import TypeScriptNextSteps from './\_ts_next_steps.mdx';

# Private Storage: Next.js Recipe

Build a Next.js app that reads all records from a [Nillion Private Storage](/build/private-storage/overview) standard collection using secure API routes!

:::note
This recipe uses [Next.js API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) for better security and maintainability, keeping your API keys secure on the server while providing a clean interface for your frontend.
:::

## What You'll Build

This guide walks you through creating a Next.js app that:

- Uses API routes to securely connect to 3 nilDB Testnet nodes
- Reads all records from an existing Nillion Private Storage collection
- Displays the data in a clean, responsive interface
- Keeps your API keys secure on the server (never exposed to the browser!)

### Prerequisites

Before starting this guide, you'll need:

1. **A Nillion API Key** - Follow the [Network API Access guide](/build/network-api-access) to get your API key
2. **A Nillion Private Storage collection with data** - Use the [Collection Explorer](/build/private-storage/collection-explorer) to create collections and add records using the no-code builder

## Step 1: Create Next.js App & Install Dependencies

First, we'll create a new Next.js app and install the Nillion libraries. No browser polyfills needed when using API routes!

```bash
npx create-next-app@latest my-nillion-app --typescript
cd my-nillion-app

# Install Nillion dependencies only - no polyfills needed!
npm install @nillion/nuc @nillion/secretvaults
```

## Step 2: Configure Next.js for Nillion

Next.js needs some configuration to work with Nillion's server-side packages.

### 1. Create next.config.ts

```typescript
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  serverExternalPackages: ['@nillion/secretvaults', '@nillion/nuc'],
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false,
      worker_threads: false,
    };
    return config;
  },
};

export default nextConfig;
```

### 2. Setup Environment Variables

**.env.local** - Store your sensitive configuration securely:

```bash
NILLION_API_KEY=your-api-key-here
NILLION_COLLECTION_ID=your-collection-id-here
```

### 3. Update .gitignore

Ensure `.env.local` is in your .gitignore (it should be by default with Next.js).

## Step 3: Build Your Nillion-Powered Next.js App

Now let's create the API route and frontend components. This architecture keeps your API keys secure while providing a smooth user experience.

### Create src/app/api/read-collection/route.ts

```typescript
import { Keypair } from '@nillion/nuc';
import { SecretVaultBuilderClient } from '@nillion/secretvaults';
import { NextResponse } from 'next/server';

const NILLION_API_KEY = process.env.NILLION_API_KEY;
const NILLION_COLLECTION_ID = process.env.NILLION_COLLECTION_ID;

export async function GET() {
  try {
    // Validate environment variables
    if (!NILLION_API_KEY || !NILLION_COLLECTION_ID) {
      return NextResponse.json(
        {
          success: false,
          error:
            'Missing required environment variables: NILLION_API_KEY and NILLION_COLLECTION_ID',
        },
        { status: 500 }
      );
    }

    // get a Nillion API Key: https://docs.nillion.com/build/network-api-access
    // see Nillion Testnet Config: https://docs.nillion.com/build/network-config#nildb-nodes
    const builder = await SecretVaultBuilderClient.from({
      keypair: Keypair.from(NILLION_API_KEY),
      urls: {
        chain: 'http://rpc.testnet.nilchain-rpc-proxy.nilogy.xyz',
        auth: 'https://nilauth.sandbox.app-cluster.sandbox.nilogy.xyz',
        dbs: [
          'https://nildb-stg-n1.nillion.network',
          'https://nildb-stg-n2.nillion.network',
          'https://nildb-stg-n3.nillion.network',
        ],
      },
      blindfold: { operation: 'store' },
    });

    await builder.refreshRootToken();
    const response = await builder.findData({
      collection: NILLION_COLLECTION_ID,
      filter: {},
    });

    return NextResponse.json({
      success: true,
      data: response.data,
      count: response.data.length,
    });
  } catch (error) {
    console.error('Error reading collection:', error);
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}
```

### Create src/app/page.tsx

Update page.tsx to fetch data from your API route:

```typescript
'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/read-collection');
      const result = await res.json();

      if (result.success) {
        setData(result.data || []);
      } else {
        setError(result.error || 'Failed to load data');
      }
    } catch (err) {
      setError((err as Error).message || 'Network error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (error && error.includes('Missing required environment variables')) {
    return (
      <div style={{ padding: '3rem', textAlign: 'center' }}>
        <h1>⚠️ Environment Variables Missing</h1>
        <p>Create a .env.local file in your project root:</p>
        <pre style={{ background: '#f5f5f5', padding: '1rem' }}>
          {`NILLION_API_KEY=your-api-key-here
NILLION_COLLECTION_ID=your-collection-id-here`}
        </pre>
      </div>
    );
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Nillion Collection Reader</h1>
      <p>Reading all records in your Nillion Private Storage collection</p>

      <button onClick={fetchData} disabled={loading}>
        {loading ? 'Loading...' : 'Refresh Data'}
      </button>

      {error && (
        <div style={{ color: 'red', marginTop: '10px' }}>Error: {error}</div>
      )}

      <div style={{ marginTop: '20px' }}>
        <p>Found {data.length} records:</p>
        <pre style={{ background: '#f5f5f5', padding: '10px' }}>
          {JSON.stringify(data, null, 2)}
        </pre>
      </div>
    </div>
  );
}
```

## 🎉 That's It! Run Your App

Start your development server and see Nillion in action:

```bash
npm run dev
```

Your Next.js app will now connect to Nillion's testnet through secure API routes and display data from your collection. If you haven't set up environment variables yet, you'll see clear instructions on screen.

## Troubleshooting

- **"Missing environment variables" error**: Check your .env.local file
- **"hex string expected" error**: Verify your API key format
- **Build errors**: Ensure next.config.ts is properly configured
- **Network errors**: Check your API route is accessible at /api/read-collection
- **Compatible with:** Next.js 15, TypeScript, App Router

<TypeScriptNextSteps/>
