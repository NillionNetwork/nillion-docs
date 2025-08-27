import TypeScriptNextSteps from './\_ts_next_steps.mdx';

# Private Storage: React Recipe

Build a React app that reads all records from a [Nillion Private Storage](/build/private-storage/overview) standard collection entirely in the browser with no server required!

:::warning
While this browser-only approach is possible with the configuration shown, we recommend using the [Next.js recipe](/build/private-storage/platform-nextjs) or a separate browser/server integration for better security and maintainability.
:::

## What You'll Build

This guide walks you through creating a React app that:

- Adds browser polyfills, stubs, and webpack configuration to make Nillion's libraries work in the browser
- Connects to 3 nilDB Testnet nodes to read data from Nillion Private Storage
- Reads all records from an existing Nillion Private Storage collection
- Displays the data in a clean, responsive interface
- Runs entirely in the browser (no backend server needed!)

### Prerequisites

Before starting this guide, you'll need:

1. **A Nillion API Key** - Follow the [Network API Access guide](/build/network-api-access) to get your API key
2. **A Nillion Private Storage collection with data** - Use the [Collection Explorer](/build/private-storage/collection-explorer) to create collections and add records using the no-code builder

## Step 1: Create React App & Install Dependencies

First, we'll create a new React app and install Nillion libraries along with browser polyfills. These polyfills are needed because Nillion uses Node.js modules that browsers don't natively support.

```bash
npx create-react-app my-nillion-app --template typescript
cd my-nillion-app

# Install Nillion dependencies, then browser polyfill packages
npm install @nillion/nuc @nillion/secretvaults
npm install --save-dev react-app-rewired assert buffer crypto-browserify os-browserify path-browserify process stream-browserify url util
```

## Step 2: Configure Your App for Browser Compatibility

Now we need to configure webpack to handle Nillion's Node.js dependencies in the browser. This involves creating polyfills and stubs for modules that don't exist in browsers.

### 1. Create config-overrides.js

```javascript
const webpack = require('webpack');

module.exports = function override(config, env) {
  // Suppress source map warnings
  config.ignoreWarnings = [
    { module: /node_modules\/@cosmjs/, message: /Failed to parse source map/ },
    {
      module: /node_modules\/cosmjs-types/,
      message: /Failed to parse source map/,
    },
  ];

  // Browser polyfills
  config.resolve.fallback = {
    ...config.resolve.fallback,
    crypto: require.resolve('crypto-browserify'),
    stream: require.resolve('stream-browserify'),
    buffer: require.resolve('buffer'),
    process: require.resolve('process/browser.js'),
    path: require.resolve('path-browserify'),
    os: require.resolve('os-browserify/browser'),
    assert: require.resolve('assert'),
    util: require.resolve('util'),
    url: require.resolve('url'),
    'node:crypto': require.resolve('crypto-browserify'),
    'node:stream': require.resolve('stream-browserify'),
    'node:buffer': require.resolve('buffer'),
    'node:process': require.resolve('process/browser.js'),
    'node:worker_threads': require.resolve('./src/stubs.js'),
    fs: false,
    net: false,
    tls: false,
    child_process: false,
    worker_threads: false,
    'node:fs': false,
    'node:net': false,
    vm: false,
    'pino-pretty': false,
    pino: false,
  };

  // Global provides
  config.plugins = [
    ...config.plugins,
    new webpack.ProvidePlugin({
      process: 'process/browser.js',
      Buffer: ['buffer', 'Buffer'],
    }),
    new webpack.NormalModuleReplacementPlugin(/^node:/, (resource) => {
      const mod = resource.request.replace(/^node:/, '');
      switch (mod) {
        case 'crypto':
          resource.request = 'crypto-browserify';
          break;
        case 'stream':
          resource.request = 'stream-browserify';
          break;
        case 'buffer':
          resource.request = 'buffer';
          break;
        case 'process':
          resource.request = 'process/browser.js';
          break;
        case 'worker_threads':
          resource.request = require.resolve('./src/stubs.js');
          break;
      }
    }),
    new webpack.NormalModuleReplacementPlugin(
      /^pino(-pretty)?$/,
      require.resolve('./src/stubs.js')
    ),
  ];

  return config;
};
```

### 2. Update TypeScript Configuration

**tsconfig.json** - Change module resolution to support Nillion's package exports:

```json
"moduleResolution": "bundler",  // was "node"
```

### 3. Update Build Scripts

**package.json** - Tell React to use our custom webpack config:

```json
"scripts": {
  "start": "react-app-rewired start",
  "build": "react-app-rewired build",
  "test": "react-app-rewired test",
  "eject": "react-scripts eject"
}
```

### 4. Create Stub for Logger

**src/stubs.js** - Create a stub for the pino logger that Nillion uses internally:

```javascript
export const pino = () => ({
  info: () => {},
  error: () => {},
  warn: () => {},
  debug: () => {},
  trace: () => {},
  fatal: () => {},
  child: () => pino(),
  level: 'info',
  levels: { values: {} },
});
export default pino;
export const prettyFactory = () => () => {};
```

### 5. Setup Browser Globals

**src/index.tsx** - Add these imports at the top to make Node.js globals available:

```javascript
import { Buffer } from 'buffer';
import process from 'process';

window.Buffer = Buffer;
window.process = process;
window.global = window;
```

## Step 3: Build Your Nillion-Powered React App

With configuration complete, let's create a simple app that connects to Nillion and reads data from a collection. This example shows how to handle authentication, data fetching, and error states.

### Create src/App.tsx

```typescript
import React, { useEffect, useState } from 'react';
import { Keypair } from '@nillion/nuc';
import { SecretVaultBuilderClient } from '@nillion/secretvaults';

const NILLION_API_KEY = process.env.REACT_APP_NILLION_API_KEY || '';
const NILLION_COLLECTION_ID = process.env.REACT_APP_NILLION_COLLECTION_ID || '';

function App() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const readCollection = async () => {
    setLoading(true);
    setError(null);

    try {
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

      setData(response.data);
    } catch (err) {
      setError((err as Error).message || 'Failed to load data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (
      NILLION_API_KEY &&
      NILLION_COLLECTION_ID &&
      NILLION_API_KEY !== 'your-api-key-here' &&
      NILLION_COLLECTION_ID !== 'your-collection-id-here'
    ) {
      readCollection();
    }
  }, []);

  if (
    !NILLION_API_KEY ||
    !NILLION_COLLECTION_ID ||
    NILLION_API_KEY === 'your-api-key-here' ||
    NILLION_COLLECTION_ID === 'your-collection-id-here'
  ) {
    return (
      <div style={{ padding: '3rem', textAlign: 'center' }}>
        <h1>⚠️ Environment Variables Missing</h1>
        <p>Create a .env file in your project root:</p>
        <pre style={{ background: '#f5f5f5', padding: '1rem' }}>
          {`REACT_APP_NILLION_API_KEY=your-api-key-here
REACT_APP_NILLION_COLLECTION_ID=your-collection-id-here`}
        </pre>
      </div>
    );
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Nillion Collection Reader</h1>
      <p>Reading all records in your Nillion Private Storage collection</p>

      <button onClick={readCollection} disabled={loading}>
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

export default App;
```

### Create .env

Update .env values based on your [Network API Key](/build/network-api-access) and your custom [Collection ID](/build/private-storage/collection-explorer#create-new-collections)

```bash
REACT_APP_NILLION_API_KEY=your-api-key-here
REACT_APP_NILLION_COLLECTION_ID=your-collection-id-here
```

### Update .gitignore

Add `.env` to the list (after `.DS_Store`).

## 🎉 That's It! Run Your App

Start your development server and see Nillion in action:

```bash
npm start
```

Your React app will now connect to Nillion's testnet and display data from your collection. If you haven't set up environment variables yet, you'll see clear instructions on screen.

## 🔒 Security Note

⚠️ **API keys in browser apps are visible to users**. For production:

- Implement server-side proxies for sensitive operations
- Collection IDs are safe to expose (they're just identifiers)

## Troubleshooting

- **React hooks error**: Ensure useEffect comes before conditional returns
- **npm audit warnings**: Normal for CRA, doesn't affect Nillion
- **Source map warnings**: Suppressed by config, ignore them
- **"hex string expected" error**: Check your API key format
- **Compatible with:** React 19, TypeScript, Create React App 5+

<TypeScriptNextSteps/>
