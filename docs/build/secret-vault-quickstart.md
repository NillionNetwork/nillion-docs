# SecretVault Quickstart

In this 15-minute guide, you'll build a privacy-preserving Web3 experience survey using Node.js and SecretVault. The project will encrypt personal data (name and years_in_web3) while keeping survey ratings in plaintext.

![Web3 Experience Survey](/img/survey.png)

:::info
This guide uses JavaScript (Node.js) and the [nillion-sv-wrappers](https://github.com/NillionNetwork/nillion-sv-wrappers) package for simplicity, but SecretVault can be integrated with any language [using the nilDB APIs directly](/build/secret-vault#how-to-use-secretvault).
:::

## Project Overview

This quickstart will guide you through:

1. Setting up a Node.js project from scratch and installing [nillion-sv-wrappers](https://github.com/NillionNetwork/nillion-sv-wrappers)
2. Configuring SecretVault org access
3. Creating a SecretVault Collection by uploading a schema
4. Writing and reading encrypted survey data to the collection

Your final project structure will be below. For a complete working version, check out the finished project in this [GitHub repo](https://github.com/oceans404/nillion-sv-example)

```
sv-quickstart/
├── node_modules
├── package-lock.json
├── package.json          # Project dependencies
├── nillionOrgConfig.js   # Nillion org credentials and node URLs
├── postSchema.js         # Script for uploading a schema to create a collection
└── index.js              # Main script that reads and writes to SecretVault
```

### Prerequisites

- Node.js (v18 or higher recommended)
- npm (comes with Node.js)

## Build your project

### 1. Set up Node.js Project

#### Create and enter the project directory:

```bash
mkdir sv-quickstart
cd sv-quickstart
```

#### Initialize npm project with type "module" and install dependencies:

```bash
npm init es6
npm i nillion-sv-wrappers uuid
```

:::info

- [nillion-sv-wrappers](https://github.com/NillionNetwork/nillion-sv-wrappers) is a JavaScript npm package with wrappers for simplifying usage of Nillion's Secret Vault and the nilQL encryption and decryption library.

- uuid is used to generate unique ids for each record uploaded to SecretVault.
  :::

### 2. Set your SecretVault Organization Config

#### Create a Nillion organization configuration file

```bash
touch nillionOrgConfig.js
```

#### Add the demo organization configuration:

For quickstart purposes, we've pre-registered an org you can use. Here are the organization's credentials and cluster configuration including node urls and node did (decentralized identifiers) to paste into your `nillionOrgConfig.js` file:

<details>

<summary>**Copy this Demo Organization Config into nillionOrgConfig.js**</summary>

You can also look up cluster configuration values using the orgDid in the "Returning Org" section of the [SecretVault Registration Portal](https://sv-sda-registration.replit.app/).

```python reference showGithubLink
https://github.com/oceans404/nillion-sv-example/blob/main/nillionOrgConfig.js
```

</details>

Now we have all the organization and cluster details needed to use SecretVault:

- Organization Credentials: private key and did
- Cluster configuration: Node API urls and Node DIDs for each node in the cluster

### 3. Create Collection Schema

#### Create a schema.json file:

```bash
touch schema.json
```

Add the "Web3 Experience Survey" schema within schema.json. The schema definition specifies the data structure of any record uploaded to the collection:

- Every survey response requires a unique `_id`
- `name` is an encrypted field that stores data shares
- `years_in_web3` is also encrypted and follows the same structure
- `responses` array holds unencrypted survey ratings, with each rating being 1-5

<details>

<summary>**Copy this Web3 Experience Survey schema into schema.json:**</summary>

```js reference showGithubLink
https://github.com/oceans404/nillion-sv-example/blob/main/schema.json
```

</details>

#### Create the upload schema script:

```bash
touch postSchema.js
```

<details>

<summary>**Copy this script that creates your collection schema into postSchema.js:**</summary>

```js reference showGithubLink
https://github.com/oceans404/nillion-sv-example/blob/main/postSchema.js
```

</details>

#### Run the upload schema script to create a schema collection:

```bash
node postSchema.js
```

Save the Schema ID from the output - you'll need it for writing and reading data to your collection in the next step.

### 4. Interact with SecretVault Data

#### 1. Create a main script file

```
touch index.js
```

<details>
<summary>Now your file structure should look like this:</summary>
```
sv-quickstart/
├── node_modules
├── package-lock.json
├── package.json
├── nillionOrgConfig.js
├── postSchema.js
└── index.js
```
</details>

#### 2. Import dependencies in index.js

```
import { SecretVaultWrapper } from 'nillion-sv-wrappers';
import { v4 as uuidv4 } from 'uuid';
import { orgConfig } from './nillionOrgConfig.js';
```

#### 3. Add your Collection's Schema ID

```javascript
const SCHEMA_ID = 'YOUR_SCHEMA_ID';
```

#### 4. Create a payload of 1 or more Web3 Experience Survey data records to store

Mark the name and years_in_web3 fields with `$allot` to signal to nilQL that these are fields that need to be encrypted to shares before being stored in SecretVault. The nillion-sv-wrappers package will transform data marked $allot into encrypted $share properties before upload to SecretVault.

```javascript
const data = [
  {
    _id: uuidv4(),
    name: { $allot: 'Vitalik Buterin' }, // will be encrypted to a $share
    years_in_web3: { $allot: 8 }, // will be encrypted to a $share
    responses: [
      { rating: 5, question_number: 1 },
      { rating: 3, question_number: 2 },
    ],
  },
];
```

#### 5. Write the main function

- Initialize wrapper with nodes and credentials
- Write data to nodes, encrypting the years_in_web3 with nilQL ahead of time
- Read data from all nodes and recombine shares to decrypt the years_in_web3 field

```js reference showGithubLink
https://github.com/oceans404/nillion-sv-example/blob/main/index.js#L33-L70
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

- [Registering your own organization](/build/secretVault-secretDataAnalytics/access)
- [Creating custom collection schemas](/build/secretVault-secretDataAnalytics/create-schema)
- [Storing new records](/build/secretVault-secretDataAnalytics/upload)
- [Retrieving filtered records](/build/secretVault-secretDataAnalytics/retrieve)
