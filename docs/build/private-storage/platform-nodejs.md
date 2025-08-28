import TypeScriptNextSteps from './\_ts_next_steps.mdx';

# Private Storage: Node.js Recipe

Build a Node.js script that reads all records from a [Nillion Private Storage](/build/private-storage/overview) standard collection with full TypeScript support!

:::note
Node.js provides direct access to all Nillion capabilities without browser constraints. Perfect for server applications, API backends, CLI tools, and automation scripts.
:::

## What You'll Build

This guide walks you through creating a Node.js/TypeScript script that:

- Connects directly to 3 nilDB Testnet nodes to read data from Nillion Private Storage
- Reads all records from an existing Nillion Private Storage collection
- Displays the data in formatted JSON output
- Runs in any Node.js environment (servers, CI/CD, local development)

### Prerequisites

Before starting this guide, you'll need:

1. **A Nillion API Key** - Follow the [Network API Access guide](/build/network-api-access) to get your API key
2. **A Nillion Private Storage collection with data** - Use the [Collection Explorer](/build/private-storage/collection-explorer) to create collections and add records using the no-code builder

## Step 1: Create Project & Install Dependencies

First, we'll create a new Node.js project and install the Nillion libraries. No browser polyfills needed - Node.js has everything built-in!

```bash
mkdir my-nillion-app
cd my-nillion-app
npm init -y
```

Install Nillion dependencies and TypeScript tooling

```bash
npm install @nillion/nuc @nillion/secretvaults
npm install -D typescript @types/node tsx dotenv
```

## Step 2: Configure Your TypeScript Project

Set up TypeScript for modern Node.js development.

### 1. Create tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "lib": ["ES2022"],
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "moduleResolution": "node"
  }
}
```

### 2. Setup Environment Variables

**.env** - Store your configuration securely:

```bash
NILLION_API_KEY=your-api-key-here
NILLION_COLLECTION_ID=your-collection-id-here
```

### 3. Update .gitignore

Create a .gitignore file and add:

```
node_modules/
.env
dist/
*.js
```

### 4. Add Package Scripts

**package.json** - Add convenient scripts for development and set the module type:

```json
{
  "name": "my-nillion-app",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "tsx read-collection.ts",
    "build": "tsc",
    "start": "node read-collection.js"
  }
}
```

## Step 3: Build Your Nillion-Powered Node.js Script

Let's create a TypeScript script that connects to Nillion and reads your collection data.

### Create read-collection.ts

```typescript
import { Keypair } from '@nillion/nuc';
import { SecretVaultBuilderClient } from '@nillion/secretvaults';
import 'dotenv/config';

async function readAllRecords() {
  // Load environment variables
  const NILLION_API_KEY = process.env.NILLION_API_KEY;
  const NILLION_COLLECTION_ID = process.env.NILLION_COLLECTION_ID;

  // Validate environment variables
  if (!NILLION_API_KEY || !NILLION_COLLECTION_ID) {
    throw new Error(
      'Missing required environment variables: NILLION_API_KEY and NILLION_COLLECTION_ID'
    );
  }

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

    // Refresh authentication
    await builder.refreshRootToken();

    // Read all records from the collection
    const response = await builder.findData({
      collection: NILLION_COLLECTION_ID,
      filter: {}, // Empty filter returns all records
    });

    // Display results
    console.log(
      `Found ${response.data.length} records in collection ${NILLION_COLLECTION_ID}:`
    );
    console.log(JSON.stringify(response.data, null, 2));

    return response.data;
  } catch (error) {
    console.error('Error reading collection:', error);
    throw error;
  }
}

// Run the script
readAllRecords()
  .then(() => {
    console.log('Successfully read all records');
    process.exit(0);
  })
  .catch((error) => {
    console.error('Failed to read records:', error);
    process.exit(1);
  });
```

## 🎉 That's It! Run Your Script

Execute your script and see Nillion in action:

```bash
npm run dev
```

Your Node.js script will connect to Nillion's testnet and display all records from your collection. If you haven't set up environment variables yet, you'll see a clear error message.

## Troubleshooting

- **"Missing environment variables" error**: Check your .env file exists
- **"hex string expected" error**: Verify your API key format
- **Module not found**: Ensure all dependencies are installed
- **TypeScript errors**: Make sure tsconfig.json is properly configured
- **Compatible with:** Node.js 18+, TypeScript 5+, ES Modules

<TypeScriptNextSteps/>
