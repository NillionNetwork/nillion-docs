import CTABanner from '@site/src/components/CTABanner';

# Passwordless Authentication with MetaMask & Nillion


## Introduction

This guide demonstrates how to build a passwordless authentication system using **MetaMask** for identity and **Nillion's Network User Credentials (NUC)** for secure, decentralized authentication. Instead of traditional passwords, users authenticate using their Ethereum wallet signatures.


## MetaMask for Decentralized Identity (DID)

### What is a DID?

A **Decentralized Identifier (DID)** is a globally unique identifier that doesn't require a centralized authority. In our implementation, MetaMask wallet signatures are used to generate a DID that uniquely identifies users across the Nillion network.

### What are NUCs (Network User Credentials)?

**NUCs** are Nillion's cryptographic credentials that enable:
- Passwordless authentication via wallet signatures
- Secure access to Nillion's privacy-preserving infrastructure
- Identity verification without storing passwords or sensitive data

The NUC SDK abstracts the complexity of cryptographic operations, providing a simple interface for Web3 authentication.

---
Full code on github [Here](https://github.com/geniusyinka/nillion-mm-demo)

```
cd nillion-mm-demo
pnpm install
pnpm dev
```


## Step By Step Implementation

### Prerequisites


This guide assumes you have a nextjs app already set up. Otherwise install NextJS:
```bash
npx create-next-app@latest my-app --yes
```

Install the required dependencies:

```bash
npm install @nillion/nuc @nillion/secretvaults viem @tanstack/react-query
```

# Active NilDB Subcription
Head over to [subscription.nillion.com](https://subscription.nillion.com) and subscribe to Nildb.

---

### 1. Configure Nillion Network

Create a configuration file for Nillion network endpoints:

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

### 2. Connect MetaMask & Create NUC Signer

Set up the MetaMask connection and NUC signer:

```typescript
// src/context/NillionContext.tsx
import { Signer } from "@nillion/nuc";
import { createWalletClient, custom } from "viem";
import { mainnet } from "viem/chains";

const connectMetaMask = async () => {
  if (!window.ethereum) {
    throw new Error("MetaMask not installed");
  }

  // Create wallet client with viem
  const walletClient = createWalletClient({
    chain: mainnet,
    transport: custom(window.ethereum),
  });

  const [account] = await walletClient.requestAddresses();

  // Create Nillion NUC Signer from MetaMask
  const nucSigner = Signer.fromWeb3({
    getAddress: async () => account,
    signTypedData: async (domain, types, message) => {
      return walletClient.signTypedData({
        account,
        domain,
        types,
        primaryType: Object.keys(types).find(k => k !== "EIP712Domain"),
        message,
      });
    },
  });

  // Generate DID from signer
  const did = await nucSigner.getDid();
  console.log("User DID:", did.didString);

  return { signer: nucSigner, did: did.didString, address: account };
};
```

### 3. Initialize Nillion Session

Use the NUC signer to authenticate with Nillion:

```typescript
// src/hooks/useNillionClient.ts
import { NillionClient } from "@nillion/secretvaults";
import { NETWORK_CONFIG } from "@/config";

async function initializeSession(signer: Signer) {
  const client = new NillionClient({
    signer,
    nilchain: NETWORK_CONFIG.nilchain,
    nilauth: NETWORK_CONFIG.nilauth,
    nildb: NETWORK_CONFIG.nildb,
  });

  // Initialize session - this authenticates the user
  await client.initialize();

  return client;
}
```

### 4. Register & Subscribe User

Complete the authentication flow by registering the user:

```typescript
// Register builder profile
async function registerBuilder(client: NillionClient) {
  await client.registerBuilder({
    name: "User",
    description: "Authenticated via MetaMask",
  });
}

// Subscribe to Nillion services
async function subscribe(client: NillionClient) {
  await client.subscribe({
    name: "notes_subscription",
    subscriptionType: "free",
  });
}
```

### 5. Login Flow (Returning Users)

For returning users with stored sessions:

```typescript
// src/hooks/useLoginMutation.ts
async function login(signer: Signer, rootToken: string, nildbTokens: object) {
  const client = new NillionClient({
    signer,
    nilchain: NETWORK_CONFIG.nilchain,
    nilauth: NETWORK_CONFIG.nilauth,
    nildb: NETWORK_CONFIG.nildb,
  });

  // Restore previous session
  await client.login({
    rootToken,
    nildbTokens,
  });

  return client;
}
```

### 6. Complete Authentication Flow

Wire everything together:

```typescript
// Simplified flow
async function authenticateUser() {
  // 1. Connect MetaMask & get NUC signer
  const { signer, did } = await connectMetaMask();
  
  // 2. Check if user has existing session
  const hasSession = checkLocalStorage();
  
  if (hasSession) {
    // Login with existing session
    await login(signer, storedRootToken, storedNildbTokens);
  } else {
    // Initialize new session
    const client = await initializeSession(signer);
    
    // Register and subscribe
    await registerBuilder(client);
    await subscribe(client);
    
    // Store session tokens
    saveToLocalStorage(client.tokens);
  }
  
  // User is now authenticated!
  return { did, authenticated: true };
}
```

---




## Key Benefits

✅ **No Password Storage** - Users authenticate with cryptographic signatures  
✅ **Decentralized Identity** - DIDs are portable across applications  
✅ **Enhanced Security** - Leverages battle-tested wallet security  
✅ **Better UX** - One-click authentication for Web3 users  
✅ **Privacy-First** - Built on Nillion's privacy-preserving infrastructure

---

## Conclusion

This implementation demonstrates how **MetaMask** and **Nillion's NUC SDK** enable passwordless authentication in Web3 applications. By leveraging wallet signatures and decentralized identifiers, you can build secure, user-friendly authentication without the risks of traditional password systems.

The NUC abstraction handles all cryptographic complexity, allowing developers to focus on building great user experiences while maintaining the highest security standards.


