import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# SecretVaults SDK TypeScript Docs

This guide shows how to get started building with the Nillion [secretvaults-ts](https://github.com/NillionNetwork/secretvaults-ts) SDK to build applications with Nillion Private Storage.

## Install Nillion Dependencies

```bash
npm install @nillion/secretvaults @nillion/nuc
```

## Builder Client Usage

SecretVaults SDK [SecretVaultBuilderClient](https://nillion.pub/secretvaults-ts/classes/SecretVaultBuilderClient.html) Usage

:::info

#### Prerequisites

Before building with the SecretVaults SDK, you need:

1. Nillion Wallet: [Create a wallet](/community/guides/nillion-wallet)
2. Testnet NIL: Get NIL tokens from the [Nillion faucet](/community/guides/testnet-faucet)
3. Get a [Nillion API Key](/build/network-api-access) with a subscription to nilDB

:::

### Initialize a Builder Client

Initialize the client with your Nillion API Key and a valid nilDB subscription. Connect to [nilDB nodes](/build/network-config#nildb-nodes) of choice. Call `refreshRootToken()` after initialization to obtain authentication tokens.

- builder keypair: from your [Nillion API Key](/build/network-api-access)
- urls: [nilDB Network Config](/build/network-config#nildb-nodes)
- blindfold.operation: Set to 'store' operation for storing data

```typescript reference showGithubLink
https://github.com/NillionNetwork/blind-module-examples/blob/main/nildb/secretvaults-ts/sdk-examples/client-helpers.ts#L17-L32
```

### Register Builder Profile

One-time setup to register your builder profile to the nilDB nodes. Checks if profile exists, creates one if needed, and handles duplicate registration errors.

- did: Decentralized identifier generated from your API key
- name: Display name that will be set for your builder profile

```typescript reference showGithubLink
https://github.com/NillionNetwork/blind-module-examples/blob/main/nildb/secretvaults-ts/sdk-examples/client-helpers.ts#L36-L62
```

### Create Collection

Collections organize and validate your data according to the schema rules. Builders can create "standard" or "owned" collection types.

:::tip

You can use the [Collection Explorer Tool](https://collection-explorer.nillion.com/) to more easily build and validate a JSON schema for your collection.
:::

#### Create Standard Collection

<Tabs>
    <TabItem value="collection-s" label="Standard Collection" default>
    ```typescript reference showGithubLink
    https://github.com/NillionNetwork/blind-module-examples/blob/main/nildb/secretvaults-ts/sdk-examples/standard-collections/create-standard-collection.ts#L9-L16
    ```
    </TabItem>
    <TabItem value="schema-s" label="contactBookSchema">
    ```typescript reference showGithubLink
    https://github.com/NillionNetwork/blind-module-examples/blob/main/nildb/secretvaults-ts/sdk-examples/schema-examples.ts
    ```    
    </TabItem>
</Tabs>

#### Create Owned Collection

<Tabs>
    <TabItem value="collection-o" label="Owned Collection" default>
    ```typescript reference showGithubLink
    https://github.com/NillionNetwork/blind-module-examples/blob/main/nildb/secretvaults-ts/sdk-examples/owned-collections/create-owned-collection.ts#L9-L16
    ```
    </TabItem>
    <TabItem value="schema-o" label="contactBookSchema">
    ```typescript reference showGithubLink
    https://github.com/NillionNetwork/blind-module-examples/blob/main/nildb/secretvaults-ts/sdk-examples/schema-examples.ts
    ```    
    </TabItem>
</Tabs>

### Read Collections

Gets the id, collection type, and name of all collections.

```typescript reference showGithubLink
https://github.com/NillionNetwork/blind-module-examples/blob/main/nildb/secretvaults-ts/sdk-examples/shared/read-collections.ts#L7
```

### Create Records

Creates new records in a standard collection. Records must match the collection's JSON schema. Use %allot to mark fields for encryption.

- collection: ID of the target collection
- data: Array of record objects matching the schema
- %allot: Special field marker that encrypts the value

:::tip

Use the no-code [Collection Explorer Tool](https://collection-explorer.nillion.com/) to view the collection and schema

The collection page has an "Example Record Payload" button that will show you the data structure for a record in the collection.
:::

```typescript reference showGithubLink
https://github.com/NillionNetwork/blind-module-examples/blob/main/nildb/secretvaults-ts/sdk-examples/standard-collections/create-standard-record.ts#L11-L26
```

### Read Records

Finds and retrieves records from a collection using filter criteria. Use the collection explorer to view collections and records.

- collection: ID of the collection to search
- filter: Query object to match records (e.g., by \_id or other fields)

```typescript reference showGithubLink
https://github.com/NillionNetwork/blind-module-examples/blob/main/nildb/secretvaults-ts/sdk-examples/shared/read-collection.ts#L8-L11
```

### Update Records

Updates existing records in a collection. Can modify both regular and encrypted fields using MongoDB-style update operators.

- collection: ID of the target collection
- filter: Query to match records for updating
- update: Update operations using $set, $unset, etc.

```typescript reference showGithubLink
https://github.com/NillionNetwork/blind-module-examples/blob/main/nildb/secretvaults-ts/sdk-examples/standard-collections/update-record.ts#L10-L23
```

### Delete Records

Deletes records from a collection based on filter criteria. Use the collection explorer to verify deletions.

- collection: ID of the target collection
- filter: Query to match records for deletion

```typescript reference showGithubLink
https://github.com/NillionNetwork/blind-module-examples/blob/main/nildb/secretvaults-ts/sdk-examples/standard-collections/delete-record.ts#L9-L14
```

### Create Query

Creates a new saved query in the system using MongoDB-style aggregation pipeline syntax. Queries operate on plaintext fields only - they cannot query encrypted fields (those marked as secret). Queries can be used for simple filtering or complex operations like statistical analysis, data aggregation, and transformations. Once saved, queries can be parameterized with variables and reused across different executions.

:::tip
Queries support the full range of MongoDB aggregation operations on plaintext fields - from simple $match filters to complex statistical calculations using $group, $avg, $min, $max, and more. Encrypted fields cannot be queried. Reference the [Query Examples section](#query-examples) to see how to structure aggregation pipelines for string and number field queries.
:::

<Tabs>
    <TabItem value="full" label="Create Age Query" default>

    This creates a query for a collection with a plaintext `age` number field. You could create this query for a Contact Book Collection, which has `age` as a plaintext, optional number field.

```typescript
const queryId = randomUUID();
const queryRequest: CreateQueryRequest = {
  _id: queryId,
  collection: collectionId,
  name: 'Calculate Age Statistics',
  variables: {},
  pipeline: [
    {
      $match: {
        age: { $exists: true, $ne: null },
      },
    },
    {
      $group: {
        _id: null,
        averageAge: { $avg: '$age' },
        minAge: { $min: '$age' },
        maxAge: { $max: '$age' },
        totalWithAge: { $sum: 1 },
        standardDeviation: { $stdDevPop: '$age' },
      },
    },
  ],
};

const createResponse = await builderClient.createQuery(queryRequest);
```

    </TabItem>
    <TabItem value="schema" label="contactBookSchema">
    ```typescript reference showGithubLink
    https://github.com/NillionNetwork/blind-module-examples/blob/main/nildb/secretvaults-ts/sdk-examples/schema-examples.ts
    ```
    </TabItem>

</Tabs>

### Run Query

Executes a saved query and retrieves the results. Query execution is asynchronous across distributed nodes, requiring polling to get the final results. You can pass variables to parameterize the query at runtime.

- \_id: ID of the saved query to execute
- variables: Object containing values for any query variables defined in the saved query
- Polling: Results must be polled as queries execute asynchronously across nodes
- Timeout: Example shows polling for up to 30 seconds with exponential backoff

```typescript reference showGithubLink
https://github.com/NillionNetwork/blind-module-examples/blob/main/nildb/secretvaults-ts/sdk-examples/queries/run-query.ts#L9-L46
```

### Create Delegation Token

Creates a delegation token that allows a user client to perform operations on behalf of a builder client. Delegation tokens enable secure, time-limited access without sharing the builder's root credentials.

- audience(userDid): Specifies which user DID can use this token
- expiresAt: Unix timestamp when the token becomes invalid
- build(): Signs the token with the builder's private key

```typescript reference showGithubLink
https://github.com/NillionNetwork/blind-module-examples/blob/main/nildb/secretvaults-ts/sdk-examples/owned-collections/create-delegation-token.ts#L20-L44
```

## User Client Usage

SecretVaults SDK [SecretVaultUserClient](https://nillion.pub/secretvaults-ts/classes/SecretVaultUserClient.html) Usage

### Generate a New User Keypair

Creates a new cryptographic keypair for user authentication and generates the corresponding decentralized identifier (DID).

```typescript reference showGithubLink
https://github.com/NillionNetwork/blind-module-examples/blob/main/nildb/secretvaults-ts/sdk-examples/nuc-helpers.ts#L4-L7
```

### Initialize a User Client

Initialize the user client with their user keypair or get their `Keypair` from the user's private key.

- urls: [nilDB Network Config](/build/network-config#nildb-nodes)
- blindfold.operation: Set to 'store' operation for storing data

```typescript reference showGithubLink
https://github.com/NillionNetwork/blind-module-examples/blob/main/nildb/secretvaults-ts/sdk-examples/client-helpers.ts#L79-L87
```

### Create Owned Records

Creates user-owned records with access control permissions. Unlike standard records, owned records have explicit ownership and can grant specific access rights to other users.

- owner: User ID that owns the data
- data: Array of record objects
- acl: Access control list defining permissions for other users (in this case the `granteeDid`)
- delegationToken: Token from the builder allowing the user to perform the operation on the builder's collection

```typescript reference showGithubLink
https://github.com/NillionNetwork/blind-module-examples/blob/main/nildb/secretvaults-ts/sdk-examples/owned-collections/create-owned-data.ts#L15-L53
```

### List Owned Records

Retrieves a list of all data references owned by the user client, showing which collections contain the user's data.

- listDataReferences(): Returns all data references for the authenticated user
- collection: ID of the collection containing the user's data
- document/record: ID of the specific record owned by the user
- builderClient: ID of the builder client that created the collection

```typescript reference showGithubLink
https://github.com/NillionNetwork/blind-module-examples/blob/main/nildb/secretvaults-ts/sdk-examples/owned-collections/list-owned-records.ts#L9-L25
```

### Read Owned Record

Retrieves a specific owned record by its ID from a collection. Only the record owner or users with granted read access can retrieve the data.

- collection: ID of the collection containing the record
- document: ID of the specific record to retrieve
- readData(): Fetches the record data with decrypted fields

```typescript reference showGithubLink
https://github.com/NillionNetwork/blind-module-examples/blob/main/nildb/secretvaults-ts/sdk-examples/owned-collections/read-owned-record.ts#L9-L14
```

### Delete Owned Record

Deletes a specific owned record from a collection. Only the record owner can delete their data.

- collection: ID of the collection containing the record
- document: ID of the specific record to delete
- deleteData(): Removes the record from the collection permanently

```typescript reference showGithubLink
https://github.com/NillionNetwork/blind-module-examples/blob/main/nildb/secretvaults-ts/sdk-examples/owned-collections/delete-owned-record.ts#L9-L14
```

### Grant Access

Grants specific permissions to another user for accessing an owned record. The record owner can control read, write, and execute permissions.

- grantee: DID of the user receiving access permissions
- read/write/execute: Boolean flags for specific permission types
- collection: ID of the collection containing the record
- document: ID of the specific record to grant access to

```typescript reference showGithubLink
https://github.com/NillionNetwork/blind-module-examples/blob/main/nildb/secretvaults-ts/sdk-examples/owned-collections/grant-access.ts#L13-L27
```

### Revoke Access

Removes previously granted permissions from a user for accessing an owned record. Only the record owner can revoke access permissions.

- collection: ID of the collection containing the record
- document: ID of the specific record to revoke access from
- grantee: DID of the user whose access is being revoked
- revokeAccess(): Removes all permissions for the specified user

```typescript reference showGithubLink
https://github.com/NillionNetwork/blind-module-examples/blob/main/nildb/secretvaults-ts/sdk-examples/owned-collections/revoke-access.ts#L19-L25
```

## Integration Examples

### Standard Collection Example

Complete workflow demonstrating standard collection operations: creating a collection, adding multiple records, updating data, deleting records, and viewing the final state.

<details>
    <summary>Full Example Code</summary>
    <Tabs>
    <TabItem value="full" label="Full Example" default>
    ```typescript reference showGithubLink
https://github.com/NillionNetwork/blind-module-examples/blob/main/nildb/secretvaults-ts/sdk-examples/standard-collections/full-example-standard.ts#L10-L108
    ```
    </TabItem>
    <TabItem value="schema" label="contactBookSchema">
    ```typescript reference showGithubLink
    https://github.com/NillionNetwork/blind-module-examples/blob/main/nildb/secretvaults-ts/sdk-examples/schema-examples.ts
    ```    
    </TabItem>
</Tabs>
</details>

### Owned Collection Example

Complete example demonstrating the full workflow for owned data collections: creating a user, delegation tokens, owned collections, and data with access control.

<details>
    <summary>Full Example Code</summary>
    <Tabs>
    <TabItem value="full" label="Full Example" default>
    ```typescript reference showGithubLink
https://github.com/NillionNetwork/blind-module-examples/blob/main/nildb/secretvaults-ts/sdk-examples/owned-collections/full-example-owned.ts#L10-L108
    ```
    </TabItem>
    <TabItem value="schema" label="contactBookSchema">
    ```typescript reference showGithubLink
    https://github.com/NillionNetwork/blind-module-examples/blob/main/nildb/secretvaults-ts/sdk-examples/schema-examples.ts
    ```    
    </TabItem>
</Tabs>
</details>

### Query Examples

Complete working examples demonstrating MongoDB-style aggregation queries on plaintext fields. Each example includes collection setup, sample data creation, multiple query types, and result processing. These show the full range of operations possible on unencrypted data in Private Storage.

#### Querying String Fields

Demonstrates text-based queries including exact matches, pattern matching with regex, case-insensitive searches, prefix/suffix filtering, and text aggregations. Examples use the plaintext `name` field from a contact book schema.

<details>
    <summary>Querying String Fields Example Code</summary>
    <Tabs>
    <TabItem value="full" label="Full Script" default>
    ```typescript reference showGithubLink
    https://github.com/NillionNetwork/blind-module-examples/blob/main/nildb/secretvaults-ts/sdk-examples/queries/plaintext-string-query-example.ts
    ```    
    </TabItem>
    <TabItem value="queries" label="String Queries">
    ```typescript reference showGithubLink
    https://github.com/NillionNetwork/blind-module-examples/blob/main/nildb/secretvaults-ts/sdk-examples/query-examples-string.ts
    ```    
    </TabItem>
    </Tabs>

</details>

#### Querying Number Fields

Demonstrates numeric queries including exact values, range filtering, mathematical comparisons, statistical calculations (avg, min, max, standard deviation), grouping by numeric ranges, and sorting with pagination. Examples use the plaintext `age` field from a contact book schema.

<details>
    <summary>Querying Number Fields Example Code</summary>
    <Tabs>
    <TabItem value="full" label="Full Script" default>
    ```typescript reference showGithubLink
    https://github.com/NillionNetwork/blind-module-examples/blob/main/nildb/secretvaults-ts/sdk-examples/queries/plaintext-number-query-example.ts
    ```    
    </TabItem>
    <TabItem value="queries" label="Number Queries">
    ```typescript reference showGithubLink
    https://github.com/NillionNetwork/blind-module-examples/blob/main/nildb/secretvaults-ts/sdk-examples/query-examples-number.ts
    ```    
    </TabItem>
    </Tabs>

</details>

## Full SDK Reference Docs

Complete TypeScript documentation for all methods and types is available at: https://nillion.pub/secretvaults-ts/modules.html

### [SecretVaultBuilderClient](https://nillion.pub/secretvaults-ts/classes/SecretVaultBuilderClient.html)

- Class for standard data collections with comprehensive CRUD operations and collection management.

- Key Methods: `createCollection`, `createStandardData`, `findData`, `updateData`, `deleteData`, `register`, `readProfile`, `refreshRootToken`, `createQuery`, `runQuery`

### [SecretVaultUserClient](https://nillion.pub/secretvaults-ts/classes/SecretVaultUserClient.html)

- Class for user-owned data collections with data access control and permissions.

- Key Methods: `createData`, `readData`, `deleteData`, `grantAccess`, `revokeAccess`, `listDataReferences`, `readProfile`

### Available Types

The SDK includes comprehensive TypeScript types for all requests, responses, and data structures.
