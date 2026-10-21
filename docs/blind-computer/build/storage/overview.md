# Private Storage with nilDB

:::warning[The Nillion-coordinated nilDB cluster has been sunset]
Nillion no longer runs a nilDB cluster, so there is no Nillion-hosted private storage to connect to. The technology is still here: nilDB is open source. The [nilDB node](https://github.com/NillionNetwork/nildb), the [secretvaults SDK](https://github.com/NillionNetwork/secretvaults-ts) and the [blindfold libraries](/blind-computer/build/storage/blindfold) remain available, and anyone can run a nilDB node or a cluster of their own. The rest of this section describes how private storage works and how to use it with a cluster you run.
:::

## What is Private Storage

Nillion's decentralized storage system keeps sensitive data secret by storing encrypted shares across a cluster of nilDB nodes. Each nilDB node stores a separate share of the encrypted data, ensuring no single node can reveal the original value.

This approach offers stronger security than traditional databases where all data sits in one place. Because secretvaults splits sensitive data between nodes, a breach of any single node only reveals a useless share. You need to combine multiple shares to reconstruct and decrypt the original data.

## How it Works

Private storage is enabled using Nillion's [blindfold libraries](/blind-computer/build/storage/blindfold) (which implement secret sharing) and Nillion's [secretvaults SDKs](/blind-computer/build/storage/secretvaults) (which simplify interacting with nilDB clusters).

1. **Data Encryption**: Sensitive fields are encrypted using cryptographic keys
2. **Share Generation**: Encrypted data is mathematically split into multiple shares
3. **Distributed Storage**: Each nilDB node stores only one share of the encrypted data
4. **Secure Retrieval**: Multiple shares must be combined to reconstruct the original data
5. **Automatic Decryption**: The secretvaults libraries handle share recombination and decryption from nilDB nodes

## How to Use Private Storage

Interact with the private storage solution using the TypeScript or Python [secretvaults libraries](/blind-computer/build/storage/secretvaults). First register as a builder or user, define data collections, then securely store and retrieve data.

**For Builders (Applications)**

- Get access to the nilDB nodes of your cluster
- Define collections with schemas
- Store and query data
- Create aggregation queries

**For Users (Data Owners)**

- Connect to a nilDB cluster
- Store private data with access controls
- Manage permissions on your data
- Grant and revoke access

Learn more about the key concepts [here](/blind-computer/build/storage/key-concepts)