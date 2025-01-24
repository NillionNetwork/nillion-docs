# SecretVault Quickstart

This guide helps you create a Node.js project that reads and writes data to a data collection in SecretVault. We'll build a web3 experience survey system where respondents' years of experience (the years_in_web3 field) is kept private through encryption, while other survey responses (question ratings) remain unencrypted in plaintext.

:::info
While this guide uses JavaScript (Node.js) and the [nillion-sv-wrappers](https://github.com/NillionNetwork/nillion-sv-wrappers) package for simplicity, you can integrate SecretVault into any language by [using the nilDB APIs directly](/build/secret-vault#how-to-use-secretvault).
:::

### Prerequisites

- Node.js (v18 or higher recommended)
- npm (comes with Node.js)

## Create Node.js Project

#### 1. Create and enter project directory for your SecretVault Quickstart

```
mkdir sv-quickstart
cd sv-quickstart
```

#### 2. Initialize npm project with type "module" and install dependencies:

- [nillion-sv-wrappers](https://github.com/NillionNetwork/nillion-sv-wrappers) is a JavaScript npm package with wrappers for simplifying usage of Nillion's Secret Vault and the nilQL encryption and decryption library.

- uuid is used to generate unique ids for each record uploaded to SecretVault.

```
npm init es6
npm i nillion-sv-wrappers uuid
```

## Setup SecretVault Config

#### 1. Create a Nillion organization configuration file

```
touch nillionOrgConfig.js
```

#### 2. Fill in the organization configuration file

Normally we would [Register an Organization](/build/secretVault-secretDataAnalytics/access) to get org credentials and cluster configuration.

For quickstart purposes, copy the this demo organization's credentials and cluster configuration including node urls and node did (decentralized identifiers) into your `nillionOrgConfig.js` file:

<details>

<summary>Copy this Demo Organization Config into nillionOrgConfig.js</summary>

You can also look up cluster configuration values using the orgDid in the "Returning Org" section of the [SecretVault Organization Portal](https://secret-vault-registration.replit.app/).

```python reference showGithubLink
https://github.com/oceans404/nillion-sv-example/blob/main/nillionOrgConfig.js
```

</details>

Now we have all the organization and cluster details needed to use SecretVault:

- Organization Credentials: private key and did
- Cluster configuration: Node API urls and Node DIDs for each node in the cluster

## Check out the Collection's Schema

For this quickstart, we'll read and write data to a pre-defined collection with a "Web3 Experience Survey" schema in the demo org. (To create your own schema later, see the [Define a Collection](/build/secretVault-secretDataAnalytics/create-schema) guide.)

The schemaId for the "Web3 Experience Survey" Schema is

```
53f9e1de-e0a3-46ab-86c6-3fd380ad8877
```

Note that this schema id is specific to the organization: `did:nil:testnet:nillion1xtm80mz4ra08vk0e09tn4tvnam50wfka5lr0h8` and can't be used by other organizations.

Key points about this schema:

- Every survey response requires a unique UUID
- years_in_web3 is defined as a string because it will store encrypted data shares
- responses array holds unencrypted survey ratings, with each rating being 1-5

<details>

<summary>Check out the Schema: Web3 Experience Survey</summary>

```js reference showGithubLink
https://github.com/oceans404/nillion-sv-example/blob/main/schema.json
```

</details>

## Write Main Script for Writing to SecretVault

#### 1. Create a main script file

```
touch index.js
```

<details>
<summary>Now your file structure should look like this:</summary>
```
sv-quickstart/
├── node_modules
├── package.json          # Project dependencies and config
├── nillionOrgConfig.js   # Nillion credentials and node URLs
└── index.js              # Main script
```
</details>

#### 2. Import dependencies in index.js

```
import { SecretVaultWrapper } from 'nillion-sv-wrappers';
import { v4 as uuidv4 } from 'uuid';
import { orgConfig } from './nillionOrgConfig.js';
```

#### 3. Add the Collection Configuration

This specifies the schema id for the schema and the names of any fields that need to be encrypted by nilQL ahead of being stored in SecretVault.

```
// Collection Configuration
const collectionConfig = {
  schemaId: '53f9e1de-e0a3-46ab-86c6-3fd380ad8877',
  encryptedFields: ['years_in_web3'],
};
```

#### 3. Create a payload of Web3 Experience Survey to store

```
// Web3 Experience Survey Data
const data = [
  {
    _id: uuidv4(),
    years_in_web3: 5,
    responses: [
      { rating: 5, question_number: 1 },
      { rating: 3, question_number: 2 },
    ],
  },
  {
    _id: uuidv4(),
    years_in_web3: 1,
    responses: [
      { rating: 2, question_number: 1 },
      { rating: 4, question_number: 2 },
    ],
  },
];
```

#### 4. Write the main function

- Initialize wrapper with nodes and credentials
- Write data to nodes, encrypting the years_in_web3 with nilQL ahead of time
- Read data from all nodes and recombine shares to decrypt the years_in_web3 field

```js reference showGithubLink
https://github.com/oceans404/nillion-sv-example/blob/main/index.js#L34-L68
```

#### 5. Run the script

```
node index.js
```

<details>
<summary>Full index.js file</summary>
```js reference showGithubLink
https://github.com/oceans404/nillion-sv-example/blob/main/index.js
```
</details>

#### Results

You should see output showing:

- Record IDs for the encrypted data written to SecretVault
- Decrypted data after reading across nodes

## Next Steps

Great work! Now that you've successfully written and read encrypted data from SecretVault, explore:

- Registering your own organization
- Defining custom collections
