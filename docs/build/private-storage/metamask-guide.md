# Passwordless Authentication with MetaMask & Nillion

## Introduction

This guide demonstrates how to build a production-ready **passwordless authentication system** using **MetaMask** for identity and **Nillion's Network User Credentials (NUC)** for secure, decentralized authentication. Users authenticate using their Ethereum wallet signatures instead of traditional passwords.

---

## What You'll Build

A complete authentication system featuring:

- **MetaMask wallet connection** with automatic chain detection
- **NUC-based session management** with Nillion's privacy-preserving network
- **Persistent sessions** with secure token storage
- **Automatic reconnection** for returning users
- **Protected routes** for authenticated-only pages

---

Full code on github [Here](https://github.com/geniusyinka/nillion-metamask-login)

## Prerequisites

### 1. Create a Next.js App

```bash
npx create-next-app@latest my-app --yes
cd my-app
```

### 2. Install Dependencies

```bash
npm install @nillion/nuc @nillion/secretvaults viem @tanstack/react-query
```

### 3. Get a NilDB Subscription

Head over to [subscription.nillion.com](https://subscription.nillion.com) and subscribe to NilDB to enable your builder account.

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with providers
│   ├── page.tsx            # Home page with login UI
│   └── profile/
│       └── page.tsx        # Protected profile page
├── components/
│   └── ProtectedRoute.tsx  # Route guard component
├── context/
│   ├── NillionContext.tsx  # MetaMask & NUC state management
│   ├── NillionState.ts     # TypeScript interfaces
│   ├── AuthFlowManager.tsx # Automatic auth flow orchestration
│   └── LogContext.tsx      # Debug logging context
├── hooks/
│   ├── useNillion.ts                  # Access Nillion context
│   ├── useNillionClient.ts            # Access authenticated client
│   ├── useInitializeSessionMutation.ts # First-time session setup
│   ├── useLoginMutation.ts            # Returning user login
│   ├── useSessionQuery.ts             # Session state query
│   ├── usePersistedConnection.ts      # LocalStorage persistence
│   ├── useBuilderProfileQuery.ts      # Fetch builder profile
│   └── useProfile.ts                  # Profile data hook
└── config.ts               # Network configuration
```

---

## Step-by-Step Implementation

### Step 1: Configure Nillion Network

Create the network configuration file with Nillion endpoints:

```typescript
// src/config.ts
export const NETWORK_CONFIG = {
  chainId: "nillion-chain-testnet-1",
  nilchain: "http://rpc.testnet.nilchain-rpc-proxy.nilogy.xyz",
  nilauth: "https://nilauth.sandbox.app-cluster.sandbox.nilogy.xyz",
  nildb: [
    "https://nildb-stg-n1.nillion.network",
    "https://nildb-stg-n2.nillion.network",
    "https://nildb-stg-n3.nillion.network",
  ],
};
```

---

### Step 2: Define Application State

Create TypeScript interfaces for type safety:

```typescript
// src/context/NillionState.ts
import type { Signer } from "@nillion/nuc";

export interface NillionState {
  signer: Signer | null;
  did: string | null;
  wallets: {
    isMetaMaskConnected: boolean;
    metaMaskAddress: string | null;
  };
}
```

---

### Step 3: Create the Nillion Context

The main context handles MetaMask connection and NUC signer creation:

```typescript
// src/context/NillionContext.tsx
"use client";

import { Signer } from "@nillion/nuc";
import { createContext, useCallback, useState, type ReactNode } from "react";
import { createWalletClient, custom, type TypedDataDomain } from "viem";
import { mainnet, sepolia } from "viem/chains";
import type { NillionState } from "./NillionState";

// Extend Window for MetaMask
declare global {
  interface Window {
    ethereum?: any;
  }
}

interface INillionContext {
  state: NillionState;
  connectMetaMask: () => Promise<void>;
  logout: () => void;
}

export const NillionContext = createContext<INillionContext | null>(null);

const initialState: NillionState = {
  signer: null,
  did: null,
  wallets: {
    isMetaMaskConnected: false,
    metaMaskAddress: null,
  },
};

export function NillionProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<NillionState>(initialState);

  const connectMetaMask = useCallback(async () => {
    if (!window.ethereum) {
      throw new Error("MetaMask is not installed.");
    }

    const eth = window.ethereum;
    const metaMaskProvider = eth?.providers?.find((p: any) => p?.isMetaMask) ?? eth;

    // Detect active chain
    const chainIdHex = await metaMaskProvider.request({ method: "eth_chainId" });
    const activeChainId = Number(chainIdHex);
    const activeChain = activeChainId === 1 ? mainnet : activeChainId === 11155111 ? sepolia : mainnet;

    // Create viem wallet client
    const walletClient = createWalletClient({
      chain: activeChain,
      transport: custom(metaMaskProvider),
    });
    const [account] = await walletClient.requestAddresses();

    // Create NUC Signer from MetaMask
    const nucSigner = Signer.fromWeb3({
      getAddress: async () => account,
      signTypedData: async (domain, types, message) => {
        const typeKeys = Object.keys(types || {});
        const primaryType = typeKeys.find((k) => k !== "EIP712Domain") || typeKeys[0];
        
        return walletClient.signTypedData({
          account,
          domain: domain as TypedDataDomain | undefined,
          types,
          primaryType,
          message,
        });
      },
    });

    // Generate DID from signer
    const did = await nucSigner.getDid();
    
    setState({
      signer: nucSigner,
      did: did.didString,
      wallets: {
        isMetaMaskConnected: true,
        metaMaskAddress: account,
      },
    });
  }, []);

  const logout = useCallback(() => {
    setState(initialState);
    localStorage.clear(); // Clear persisted session
  }, []);

  return (
    <NillionContext.Provider value={{ state, connectMetaMask, logout }}>
      {children}
    </NillionContext.Provider>
  );
}
```

---

### Step 4: Initialize Session for New Users

Create the session initialization mutation that sets up the Nillion client:

```typescript
// src/hooks/useInitializeSessionMutation.ts
import { Builder, Codec, type Command, NilauthClient } from "@nillion/nuc";
import { NucCmd, SecretVaultBuilderClient } from "@nillion/secretvaults";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { NETWORK_CONFIG } from "@/config";

async function initializeSession(signer: Signer): Promise<Session> {
  // Create Nilauth client
  const nilauthClient = await NilauthClient.create({ 
    baseUrl: NETWORK_CONFIG.nilauth, 
    payer: undefined 
  });

  // Check subscription status
  const subscriberDid = await signer.getDid();
  const subStatus = await nilauthClient.subscriptionStatus(subscriberDid, "nildb");

  if (!subStatus.subscribed) {
    throw new Error("No active NilDB subscription found.");
  }

  // Create SecretVault client
  const nillionClient = await SecretVaultBuilderClient.from({
    signer,
    nilauthClient,
    dbs: NETWORK_CONFIG.nildb,
    blindfold: { operation: "store" },
  });

  // Create root authorization token
  await nillionClient.refreshRootToken();
  const rootToken = nillionClient.rootToken;

  // Mint invocation tokens for each NilDB node
  const nildbTokens: Record<string, string> = {};
  for (const node of nillionClient.nodes) {
    nildbTokens[node.id.didString] = await Builder.invocationFrom(rootToken)
      .audience(node.id)
      .command(NucCmd.nil.db.root as Command)
      .signAndSerialize(signer);
  }

  // Register builder profile if not exists
  try {
    await nillionClient.readProfile({ auth: { invocations: nildbTokens } });
  } catch {
    await nillionClient.register({
      did: subscriberDid.didString,
      name: "Demo Builder",
    });
  }

  return { nillionClient, nilauthClient, rootToken, nildbTokens };
}

export const useInitializeSessionMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (signer: Signer) => initializeSession(signer),
    onSuccess: (data) => {
      // Store session in React Query cache
      queryClient.setQueryData(["session"], data);
      
      // Persist tokens to localStorage
      localStorage.setItem("nillion_rootToken", Codec.serializeBase64Url(data.rootToken));
      localStorage.setItem("nillion_nildbTokens", JSON.stringify(data.nildbTokens));
    },
  });
};
```

---

### Step 5: Login for Returning Users

Create the login mutation to restore sessions from persisted tokens:

```typescript
// src/hooks/useLoginMutation.ts
import { Codec, NilauthClient } from "@nillion/nuc";
import { SecretVaultBuilderClient } from "@nillion/secretvaults";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { NETWORK_CONFIG } from "@/config";

async function login(
  signer: Signer,
  storedRootToken: string,
  storedNildbTokens: Record<string, string>
): Promise<Session> {
  // Re-create Nilauth client
  const nilauthClient = await NilauthClient.create({ 
    baseUrl: NETWORK_CONFIG.nilauth, 
    payer: undefined 
  });

  // Re-hydrate SecretVault client with stored token
  const nillionClient = await SecretVaultBuilderClient.from({
    signer,
    nilauthClient,
    dbs: NETWORK_CONFIG.nildb,
    blindfold: { operation: "store" },
    rootToken: storedRootToken,
  });

  const rootToken = Codec.decodeBase64Url(storedRootToken);

  return { nillionClient, nilauthClient, rootToken, nildbTokens: storedNildbTokens };
}

export const useLoginMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ signer, rootToken, nildbTokens }) => 
      login(signer, rootToken, nildbTokens),
    onSuccess: (data) => {
      queryClient.setQueryData(["session"], data);
    },
  });
};
```

---

### Step 6: Automatic Auth Flow Management

Create a component that orchestrates the authentication flow automatically:

```typescript
// src/context/AuthFlowManager.tsx
import { useEffect, useRef } from "react";
import { useInitializeSessionMutation } from "@/hooks/useInitializeSessionMutation";
import { useLoginMutation } from "@/hooks/useLoginMutation";
import { useNillion } from "@/hooks/useNillion";

export function AuthFlowManager() {
  const { state } = useNillion();
  const { mutate: initialize } = useInitializeSessionMutation();
  const { mutate: login } = useLoginMutation();
  const authFlowTriggeredRef = useRef(false);

  useEffect(() => {
    // Reset when user logs out
    if (!state.did) {
      authFlowTriggeredRef.current = false;
    }
  }, [state.did]);

  useEffect(() => {
    const isConnected = state.did && state.wallets.isMetaMaskConnected;
    
    if (isConnected && !authFlowTriggeredRef.current) {
      authFlowTriggeredRef.current = true;
      
      const storedRootToken = localStorage.getItem("nillion_rootToken");
      const storedNildbTokens = localStorage.getItem("nillion_nildbTokens");
      
      if (storedRootToken && storedNildbTokens) {
        // Returning user - restore session
        login();
      } else {
        // New user - initialize session
        initialize();
      }
    }
  }, [state.did, state.wallets.isMetaMaskConnected, login, initialize]);

  return null; // Side-effect only component
}
```

---

### Step 7: Create Protected Routes

Create a component to guard authenticated-only pages:

```typescript
// src/components/ProtectedRoute.tsx
"use client";

import { useNillion } from "@/hooks/useNillion";
import { useSessionQuery } from "@/hooks/useSessionQuery";
import { useRouter } from "next/navigation";
import { useEffect, ReactNode } from "react";

export function ProtectedRoute({ children }: { children: ReactNode }) {
  const { state } = useNillion();
  const { isSuccess: isSessionReady } = useSessionQuery();
  const router = useRouter();

  const isAuthenticated = state.wallets.isMetaMaskConnected && isSessionReady;

  useEffect(() => {
    if (!state.wallets.isMetaMaskConnected && !state.signer) {
      router.push("/");
    }
  }, [state.wallets.isMetaMaskConnected, state.signer, router]);

  if (!isAuthenticated) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="animate-pulse">Authenticating...</div>
      </div>
    );
  }

  return <>{children}</>;
}
```

---

### Step 8: Set Up the Root Layout

Wire up all providers in your root layout:

```typescript
// src/app/layout.tsx
"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { LogProvider } from "@/context/LogContext";
import { NillionProvider } from "@/context/NillionContext";
import { useState } from "react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <html lang="en">
      <body>
        <QueryClientProvider client={queryClient}>
          <LogProvider>
            <NillionProvider>{children}</NillionProvider>
          </LogProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
```

---

### Step 9: Create the Login Page

Build the main authentication UI:

```typescript
// src/app/page.tsx
"use client";

import { useNillion } from "@/hooks/useNillion";
import { useSessionQuery } from "@/hooks/useSessionQuery";

export default function Home() {
  const { state, connectMetaMask, logout } = useNillion();
  const { isSuccess: isSessionReady } = useSessionQuery();

  const isAuthenticated = state.wallets.isMetaMaskConnected && isSessionReady;

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold mb-6">Passwordless Login</h1>
        
        {!isAuthenticated ? (
          <button
            onClick={connectMetaMask}
            disabled={state.wallets.isMetaMaskConnected}
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg"
          >
            {state.wallets.isMetaMaskConnected 
              ? "Initializing Session..." 
              : "Connect with MetaMask"}
          </button>
        ) : (
          <div className="space-y-4">
            <div className="p-3 bg-green-100 rounded-lg text-green-800">
              ✅ Successfully Authenticated
            </div>
            
            <div>
              <label className="text-sm font-semibold">Wallet Address</label>
              <p className="font-mono text-sm">{state.wallets.metaMaskAddress}</p>
            </div>
            
            <div>
              <label className="text-sm font-semibold">Nillion DID</label>
              <p className="font-mono text-sm break-all">{state.did}</p>
            </div>
            
            <button onClick={logout} className="w-full bg-gray-200 py-2 rounded-lg">
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
```

---

## Session Persistence

The demo persists session tokens in `localStorage` for seamless reconnection:

| Key | Description |
|-----|-------------|
| `nillion_hasConnectedMetaMask` | Flag indicating previous MetaMask connection |
| `nillion_rootToken` | Base64-encoded root authorization token |
| `nillion_nildbTokens` | JSON object of node-specific invocation tokens |

On page reload, the `AuthFlowManager` detects stored tokens and automatically restores the session without requiring a new wallet signature.

---

## Key Concepts

### NUC Signer

The NUC Signer bridges MetaMask with Nillion's authentication system. It wraps your wallet's signing capabilities to create EIP-712 typed data signatures that Nillion understands.

### Decentralized Identifier (DID)

Generated from the NUC Signer, the DID uniquely identifies users across the Nillion network without requiring centralized user databases.

### Root Token

A master authorization token that grants access to Nillion services. Used to derive node-specific invocation tokens.

### Invocation Tokens

Node-specific tokens derived from the root token. Each NilDB node requires its own invocation token for authentication.



## Running the Demo

```bash
# Clone the repository
git clone https://github.com/geniusyinka/nillion-mm-demo
cd nillion-mm-demo

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) and connect your MetaMask wallet to experience passwordless authentication.

---

## Conclusion

This implementation demonstrates how **MetaMask** and **Nillion's NUC SDK** enable production-ready passwordless authentication in Web3 applications. The architecture includes:

- Clean separation of concerns with React Context and hooks
- Automatic session management for optimal UX
- Protected routes for authenticated-only content
- Persistent sessions across browser refreshes

By leveraging wallet signatures and decentralized identifiers, you can build secure, user-friendly authentication without the risks of traditional password systems.

