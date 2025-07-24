# Private Storage

## What is Private Storage

Nillion's decentralized storage system keeps sensitive data secret by storing encrypted shares across a cluster of nilDB nodes. Each nilDB node stores a separate share of the encrypted data, ensuring no single node can reveal the original value.

This approach offers stronger security than traditional databases where all data sits in one place. Because secretvaults splits sensitive data between nodes, a breach of any single node only reveals a useless share. You need to combine multiple shares to reconstruct and decrypt the original data.

## How it Works

Private storage is enabled using Nillion's [blindfold libraries](/build/private-storage/blindfold) (which implement secret sharing) and Nillion's [secretvaults SDKs](/build/private-storage/secretvaults) (which simplify interacting with nilDB clusters).

1. **Data Encryption**: Sensitive fields are encrypted using cryptographic keys
2. **Share Generation**: Encrypted data is mathematically split into multiple shares
3. **Distributed Storage**: Each nilDB node stores only one share of the encrypted data
4. **Secure Retrieval**: Multiple shares must be combined to reconstruct the original data
5. **Automatic Decryption**: The secretvaults libraries handle share recombination and decryption from nilDB nodes

## How to Use Private Storage

Interact with the private storage solution using the TypeScript or Python [secretvaults libraries](/build/private-storage/secretvaults). First register as a builder or user, define data collections, then securely store and retrieve data.

**For Builders (Applications)**

- Obtain [Network API Access](/build/network-api-access) to get nilDB cluster access
- Define collections with schemas
- Store and query data
- Create aggregation queries

**For Users (Data Owners)**

- Connect to a nilDB cluster
- Store private data with access controls
- Manage permissions on your data
- Grant and revoke access

## Key Concepts

### Builder

An application or service that manages collections and data. Builders have access to authentication services and can create both standard and owned collections. They can issue delegation tokens to users for specific operations.

### User

An individual who owns private data stored in owned collections. Users control access permissions through ACLs and maintain sovereignty over their personal data.

### Cluster

A group of nilDB nodes that work together to store data. The cluster provides redundancy, security through distributed shares, and consistency across operations.

### Node

An endpoint where data shares are stored. Each node:

- Stores complete plaintext data for non-encrypted fields
- Holds one encrypted share of sensitive field values
- Is identified by a unique DID (Decentralized Identifier)
- Requires authentication tokens for access
- Cannot independently decrypt sensitive data

### DID (Decentralized Identifier)

A unique cryptographic identifier for builders, users, and nodes. Format: `did:nil:[66-character-hex-string]`. Derived from public keys for verifiable authentication.

### NUC Tokens

JWT-based tokens for API authentication. These are node-specific, time-limited, cryptographically signed, and support delegation between builders and users.

### Collection

A structured container for related data records. Collections have:

- **Owner**: The builder's DID who created it
- **Type**: Either "standard" or "owned"
- **Schema**: JSON Schema defining structure and validation
- **Name**: Human-readable identifier

Collections are immutable once created.

### Collection Types

**Standard Collections**

- Managed by builders
- Used for application data
- Can contain encrypted or plaintext data
- Support indexing and queries

**Owned Collections**

- Store user-owned private data
- Each document has individual ACLs
- Users control access permissions
- Support fine-grained permission types

### Schema

A JSON Schema defines the immutable structure of records in a Collection including field names, data types, required fields, formats, and validation rules.

### Record

A single data entry that follows a collection's schema. Plaintext fields are stored identically across nodes, while encrypted fields are split into unique shares per node.

### Field Types

**Plaintext Fields**

- Stored as-is across all nodes
- Visible to anyone with collection access
- Used for non-sensitive metadata

**Encrypted Fields**

- Marked with `{ "%allot": "sensitive-value" }`
- Automatically encrypted and split into shares
- Each node stores a different mathematical share
- Requires multiple nodes to reconstruct

### Access Control (Owned Collections)

**ACL (Access Control List)**
Each document in an owned collection has individual permissions:

- **Grantee**: DID of the entity being granted access
- **Read**: Permission to retrieve and decrypt the document
- **Write**: Permission to modify the document
- **Execute**: Permission to run queries on this document

Users can grant and revoke permissions at any time. Each document maintains its own independent ACL.

### Query System

MongoDB-style aggregation pipelines are supported, including stages such as `$match`, `$group`, `$count`, `$lookup`, and `$project`.
Queries can operate on encrypted data without full decryption and support variables for parameterization.

**Query Variables**
Allow parameterization of saved queries using JSONPath syntax to specify substitution points, enabling reusable query templates.
