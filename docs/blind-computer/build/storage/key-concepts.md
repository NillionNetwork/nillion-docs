
## Key Concepts

### Access Control (Owned Collections)

**ACL (Access Control List)**
Each document in an owned collection has individual permissions:

- **Grantee**: DID of the entity being granted access
- **Read**: Permission to retrieve and decrypt the document
- **Write**: Permission to modify the document
- **Execute**: Permission to run queries on this document

Users can grant and revoke permissions at any time. Each document maintains its own independent ACL.

### Builder

Developer/s who builds an application or service on nilDB. They have access to authentication services and can create both standard and owned collections. They can issue delegation tokens to users for specific operations.

### Cluster

A group of nilDB nodes that work together to store data. The cluster provides redundancy, security through distributed shares, and consistency across operations.

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
- 🚧 Note: User Owned Collections are not fully supported by the [Collection Explorer Tool](/blind-computer/build/storage/collection-explorer)

### DID (Decentralized Identifier)

A unique cryptographic identifier for builders, users, and nodes. Format: `did:key:[49-character-hex-string]`. Derived from public keys for verifiable authentication.

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

### Node

An endpoint where data shares are stored. Each node:

- Stores complete plaintext data for non-encrypted fields
- Holds one encrypted share of sensitive field values
- Is identified by a unique DID (Decentralized Identifier)
- Requires authentication tokens for access
- Cannot independently decrypt sensitive data

### NUC Tokens

JWT-based tokens for API authentication. These are node-specific, time-limited, cryptographically signed, and support delegation between builders and users.

### Query System

MongoDB-style aggregation pipelines are supported, including stages such as `$match`, `$group`, `$count`, `$lookup`, and `$project`.
**Queries can operate on plaintext record values** within Private Storage and support variables for parameterization.

#### Query Variables

Allow parameterization of saved queries using JSONPath syntax to specify substitution points, enabling reusable query templates.

#### Query Examples

We provide string and number field query examples based on the plaintext [name (string) field](https://github.com/NillionNetwork/blind-module-examples/blob/main/nildb/secretvaults-ts/sdk-examples/schema-examples.ts#L11-L13) and the plaintext [age (number) field](https://github.com/NillionNetwork/blind-module-examples/blob/main/nildb/secretvaults-ts/sdk-examples/schema-examples.ts#L14-L16) in the [Example Contact Book Collection Schema](https://github.com/NillionNetwork/blind-module-examples/blob/main/nildb/secretvaults-ts/sdk-examples/schema-examples.ts).

- [Queries on String Fields](https://github.com/NillionNetwork/blind-module-examples/blob/main/nildb/secretvaults-ts/sdk-examples/query-examples-string.ts)
- [Queries on Number Fields](https://github.com/NillionNetwork/blind-module-examples/blob/main/nildb/secretvaults-ts/sdk-examples/query-examples-number.ts)

### Record

A single data entry that follows a collection's schema. Plaintext fields are stored identically across nodes, while encrypted fields are split into unique shares per node.

### Schema

A JSON Schema defines the immutable structure of records in a Collection including field names, data types, required fields, formats, and validation rules.

### User

An individual who owns private data stored in owned collections. Users control access permissions through ACLs and maintain sovereignty over their personal data.

