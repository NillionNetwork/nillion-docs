# Quickstart

This guide walks you through building a Node.js demo app that uses Nillion's private storage with user-owned collections.

## What You'll Build

In this quickstart, you'll create a simple but powerful demonstration of private storage:

1. **Builder Setup**: You (as a builder/application) will register for a Nillion API Key
2. **Create an Owned Collection**: Define an owned collection with a specific schema that users can store private data in
3. **User Data Storage** - A user will store their private data in your collection and grant you limited access to it

This showcases Nillion's core value: users own their data, but can selectively share it with applications.

## What You'll Learn

- How builders create **owned collections** for user data
- How users store private data with **individual access controls**
- How to grant and revoke specific permissions (read/write/execute)
- How the **@nillion/secretvaults** library handles encryption and share distribution automatically

## Prerequisites

### 1. Get Your API Key and Subscription

1. Visit [https://nilpay.vercel.app/](https://nilpay.vercel.app/)
2. Create a Testnet public/private key pair through the UI
3. Fund your account with Testnet NIL to create a valid subscription
4. Save your private key (hex format) - you'll need this for authentication

### 2. System Requirements

- `Node.js 22+` with ES modules support
- `pnpm` package manager (you can use `npm` or `yarn` as well)

## Project Setup

Create a new Node.js project:

```bash
mkdir nillion-secretvaults-demo
cd nillion-secretvaults-demo
pnpm init -y
```

Add ES module support to your `package.json`:

```json
{
  "type": "module"
}
```

## Install Dependencies

Install the required Nillion packages:

```bash
pnpm install @nillion/secretvaults@0.1.0-rc.4 @nillion/nuc dotenv
```

## Environment Configuration

Create a `.env` file in your project root:

```bash
# .env
NILLION_PRIVATE_KEY=your-hex-private-key-from-nilpay

# Optional: Override default testnet URLs if needed
# NILCHAIN_URL=http://rpc.testnet.nilchain-rpc-proxy.nilogy.xyz
# NILAUTH_URL=https://nilauth.sandbox.app-cluster.sandbox.nilogy.xyz
# NILDB_NODES=https://nildb-stg-n1.nillion.network,https://nildb-stg-n2.nillion.network,https://nildb-stg-n3.nillion.network
```

**⚠️ Important**: Add `.env` to your `.gitignore` to avoid committing your private key!

## Basic Script Structure

Create `demo.js` with the following structure:

```javascript
#!/usr/bin/env node

import { randomUUID } from 'crypto';
import { config as loadEnv } from 'dotenv';

// Load environment variables
loadEnv();

// Import Nillion SDK components
import {
  Keypair,
  NilauthClient,
  PayerBuilder,
  NucTokenBuilder,
  Command,
} from '@nillion/nuc';
import {
  SecretVaultBuilderClient,
  SecretVaultUserClient,
} from '@nillion/secretvaults';

// Configuration
const config = {
  NILCHAIN_URL:
    process.env.NILCHAIN_URL ||
    'http://rpc.testnet.nilchain-rpc-proxy.nilogy.xyz',
  NILAUTH_URL:
    process.env.NILAUTH_URL ||
    'https://nilauth.sandbox.app-cluster.sandbox.nilogy.xyz',
  NILDB_NODES: process.env.NILDB_NODES
    ? process.env.NILDB_NODES.split(',')
    : [
        'https://nildb-stg-n1.nillion.network',
        'https://nildb-stg-n2.nillion.network',
        'https://nildb-stg-n3.nillion.network',
      ],
  PRIVATE_KEY: process.env.NILLION_PRIVATE_KEY,
};

// Validate configuration
if (!config.PRIVATE_KEY) {
  console.error('❌ Please set NILLION_PRIVATE_KEY in your .env file');
  process.exit(1);
}

async function main() {
  // All code in the next steps will be added here
}

main().catch(console.error);
```

## Authentication and Client Setup

### Create Keypairs

```javascript
// Step 1: Create keypairs for builder and user
const builderKeypair = Keypair.from(config.PRIVATE_KEY); // Use your funded key
const userKeypair = Keypair.generate(); // Generate random user

const builderDid = builderKeypair.toDid().toString();
const userDid = userKeypair.toDid().toString();

console.log('Builder DID:', builderDid);
console.log('User DID:', userDid);
```

### Setup Authentication

```javascript
// Step 2: Create payer and nilauth client
const payer = await new PayerBuilder()
  .keypair(builderKeypair)
  .chainUrl(config.NILCHAIN_URL)
  .build();

const nilauth = await NilauthClient.from(config.NILAUTH_URL, payer);
```

### Initialize Builder Client

```javascript
// Step 3: Create builder client
const builder = await SecretVaultBuilderClient.from({
  keypair: builderKeypair,
  urls: {
    chain: config.NILCHAIN_URL,
    auth: config.NILAUTH_URL,
    dbs: config.NILDB_NODES,
  },
});

// Refresh token using existing subscription
await builder.refreshRootToken();
```

## Builder Registration

Handle builder registration with proper error handling:

```javascript
// Step 4: Register builder (handle existing registration)
try {
  const existingProfile = await builder.readProfile();
  console.log('✅ Builder already registered:', existingProfile.data.name);
} catch (profileError) {
  try {
    await builder.register({
      did: builderDid,
      name: 'My Demo Builder',
    });
    console.log('✅ Builder registered successfully');
  } catch (registerError) {
    // Handle duplicate key errors gracefully
    if (registerError.message.includes('duplicate key')) {
      console.log('✅ Builder already registered (duplicate key)');
    } else {
      throw registerError;
    }
  }
}
```

## Create an Owned Collection

### Define Collection Schema

An **owned collection** allows users to store their private data with individual access controls on each record.

```javascript
// Step 5: Define your owned collection
const collectionId = randomUUID();

const collection = {
  _id: collectionId,
  type: 'owned', // This makes it user-owned
  name: 'User Profile Collection',
  schema: {
    $schema: 'http://json-schema.org/draft-07/schema#',
    type: 'array',
    uniqueItems: true,
    items: {
      type: 'object',
      properties: {
        _id: { type: 'string', format: 'uuid' },
        name: { type: 'string' },
        email: { type: 'string', format: 'email' },
        phone: { type: 'string' },
      },
      required: ['_id', 'name', 'email'],
    },
  },
};
```

### Create Collection

```javascript
// Step 6: Create the owned collection
try {
  const createResults = await builder.createCollection(collection);
  console.log(
    '✅ Owned collection created on',
    Object.keys(createResults).length,
    'nodes'
  );
} catch (error) {
  console.error('❌ Collection creation failed:', error.message);
  // Handle testnet infrastructure issues gracefully
}
```

## User Stores Private Data

### Create User Client

```javascript
// Step 7: Create user client
const user = await SecretVaultUserClient.from({
  baseUrls: config.NILDB_NODES,
  keypair: userKeypair,
});
```

### User Uploads Data with Access Control

```javascript
// Step 8: User creates their private data and grants builder access
const delegation = NucTokenBuilder.extending(builder.rootToken)
  .command(new Command(['nil', 'db', 'data', 'create']))
  .audience(userKeypair.toDid())
  .expiresAt(Math.floor(Date.now() / 1000) + 3600) // 1 hour
  .build(builderKeypair.privateKey());

// User's private data
const userPrivateData = {
  _id: randomUUID(),
  name: 'Steph',
  email: 'steph@example.com',
  phone: '+1-555-0123',
};

// User uploads data and grants builder limited access
const uploadResults = await user.createData(delegation, {
  owner: userDid,
  acl: {
    grantee: builderDid, // Grant access to the builder
    read: true, // Builder can read the data
    write: false, // Builder cannot modify the data
    execute: true, // Builder can run queries on the data
  },
  collection: collectionId,
  data: [userPrivateData],
});

console.log('✅ User uploaded private data with builder access granted');
```

## Builder Accesses User Data

### Read User's Data (with permission)

```javascript
// Step 9: Builder reads user's data (only works because user granted access)
const userData = await user.readData({
  collection: collectionId,
  document: userPrivateData._id,
});

console.log('✅ Builder successfully accessed user data:', {
  name: userData.data.name,
  email: userData.data.email,
  // Note: Builder can only see this because user granted read permission
});
```

### List User's Data References

```javascript
// Step 10: See what data the user has stored
const references = await user.listDataReferences();
console.log('✅ User has', references.data.length, 'private records stored');
```

## Access Control in Action

### Grant Access to Another User

```javascript
// Step 11: User grants access to someone else
const friendKeypair = Keypair.generate();

await user.grantAccess({
  collection: collectionId,
  document: userPrivateData._id,
  acl: {
    grantee: friendKeypair.toDid().toString(),
    read: true, // Friend can read
    write: false, // Friend cannot modify
    execute: false, // Friend cannot run queries
  },
});

console.log('✅ User granted read access to a friend');
```

### Revoke Access

```javascript
// Step 12: User changes their mind and revokes access
await user.revokeAccess({
  grantee: friendKeypair.toDid().toString(),
  collection: collectionId,
  document: userPrivateData._id,
});

console.log("✅ User revoked friend's access");
```

### Cleanup

```javascript
// Step 13: User deletes their data
await user.deleteData({
  collection: collectionId,
  document: userPrivateData._id,
});

console.log('✅ User deleted their private data');
```

## Running Your Demo

Run the full script

```bash
node demo.js
```

## What Just Happened?

🎉 **Congratulations!** You just built a privacy-preserving application where:

1. **You (Builder)** created a secure collection for user data
2. **A User** stored their private information with automatic encryption and share distribution
3. **The User** granted you specific, limited access to their data
4. **You** could read the data only because the user gave permission
5. **The User** maintained full control - they could revoke access or delete their data at any time

This demonstrates the core principle of Nillion's private storage: **users own their data**, but can selectively share it with applications they trust.

## Key Concepts Learned

- **Owned Collections**: Collections where users control access to their individual records
- **Access Control Lists (ACLs)**: Fine-grained permissions (read/write/execute) on each data record
- **Encrypted Shares**: Your sensitive data is automatically split and distributed across multiple nodes
- **User Sovereignty**: Users maintain complete control over their private data and permissions

## Advanced Features

### Using Sensitive Field Encryption

```javascript
// Mark fields as sensitive for automatic encryption
const sensitiveData = {
  _id: randomUUID(),
  name: 'Steph', // Plaintext
  email: 'steph@example.com', // Plaintext
  phone: { '%allot': '+1-555-0123' }, // Encrypted field flag
};
```

### Query Operations

```javascript
// Create and run queries on encrypted data
const query = {
  _id: randomUUID(),
  name: 'Find Users by Name',
  collection: collectionId,
  variables: {
    searchName: {
      description: 'Name to search for',
      path: '$.pipeline[0].$match.name',
    },
  },
  pipeline: [{ $match: { name: '' } }, { $count: 'total' }],
};

await builder.createQuery(query);
```

## Next Steps

Now that you understand the basics of Nillion private storage, you can:

- Explore more complex collection schemas
- Implement query operations on encrypted data
- Build applications that respect user privacy by default
