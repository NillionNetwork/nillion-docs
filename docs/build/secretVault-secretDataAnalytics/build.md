# Build with Secret Vault APIs

## How to use SecretVault APIs

Interact with [nilDB APIs](/api/overview) or the [nillion-sv-wrappers](https://github.com/NillionNetwork/nillion-sv-wrappers) helper package shown in the [Quickstart](/build/secret-vault-quickstart) to use SecretVault. First complete setup by registering an organization and defining the structure of your data collections. After setup, you can securely store, retrieve, and query data from SecretVault.

### 1. Register an Organization

[Register an organization](/build/secretVault-secretDataAnalytics/access) to get your organization credentials and node details for the cluster of nilDB nodes where your data is securely stored.

### 2. Define a Collection

[Organize your data into a collection](/build/secretVault-secretDataAnalytics/create-schema), defined by a JSON schema that specifies fields, data types, and validation rules. Once created, the schema cannot be changed.

### 3. Store Records

First, encrypt any private data fields with nilQL.

Then [upload the record](/build/secretVault-secretDataAnalytics/upload) to all nodes in your cluster to store the record. Plaintext fields are stored identically across all nodes, while encrypted fields are split into unique shares, with each node holding one share to keep data secure.

### 4. Retrieve Records

[Read or retrieve a record](/build/secretVault-secretDataAnalytics/retrieve) by fetching the data from all nodes in your cluster. Decrypt private data fields with nilQL to recombine shares from all nodes and reconstruct the original data.

## API Flow Diagram

![SecretVault Registration Portal](/img/sv-sda-flow.jpg)


