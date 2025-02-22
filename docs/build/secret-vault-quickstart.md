import IframeVideo from '@site/src/components/IframeVideo/index';

# SecretVault Quickstart

[SecretVault](/build/secret-vault) lets you store sensitive data securely by encrypting and splitting it across multiple nodes. While regular fields remain readable, private information is protected through encryption - making it perfect for applications that need to balance data accessibility with privacy.

**In this 15-minute quickstart, you'll build a privacy-preserving data collection for a Web3 experience survey** using Node.js and SecretVault. The project will encrypt personal data (`name` and `years_in_web3` fields) while keeping the `responses` array of survey ratings in plaintext.

<IframeVideo videoSrc="https://www.loom.com/embed/ee391ce583ab442db71942565b068e61?sid=c7dd28bb-8920-4451-a88e-6de83a21655f"/>
<br/>
:::info
This guide uses JavaScript (Node.js) and the JS [secretvaults](https://github.com/NillionNetwork/secretvaults-js) package for simplicity, but SecretVault can be integrated with any language [using the nilDB APIs directly](/build/secret-vault#how-to-use-secretvault). The wrapper package is also available in [Python](https://github.com/NillionNetwork/secretvaults-py) via [PyPi](https://pypi.org/project/secretvaults/).
:::

## Project Overview

This quickstart will guide you through:

1. Setting up a Node.js project from scratch and installing the JS [secretvaults](https://github.com/NillionNetwork/secretvaults-js) package
2. Configuring SecretVault org access
3. Creating a SecretVault Collection by uploading a schema
4. Writing and reading encrypted survey data to the collection

Your final project structure will be like this: 

[//]: # (For a complete working version, check out the finished project in this [GitHub repo]&#40;https://github.com/oceans404/nillion-sv-example&#41;)

```
sv-quickstart/
├── node_modules
├── package-lock.json
├── package.json          # Project dependencies
├── orgConfig.js          # Nillion org credentials and node URLs
├── createSchema.js       # Script for uploading a schema to create a collection
└── readWriteSv.js        # Main script that reads and writes to SecretVault
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
npm i secretvaults
```

:::info
[secretvaults](https://github.com/NillionNetwork/secretvaults-js) is a JavaScript npm package with wrappers for simplifying usage of Nillion's Secret Vault and the nilQL encryption and decryption library. A [Python](https://github.com/NillionNetwork/secretvaults-py) version is also available via [PyPi](https://pypi.org/project/secretvaults/).
:::

### 2. Set your SecretVault Organization Config

#### Create a Nillion organization configuration file

```bash
touch orgConfig.js
```

#### Add the demo organization configuration:

For quickstart purposes, we've pre-registered an org you can use. Here are the organization's credentials and cluster configuration including node urls and node did (decentralized identifiers) to paste into your `nillionOrgConfig.js` file:

<details>

<summary>**Copy this Demo Organization Config into orgConfig.js**</summary>

You can also look up cluster configuration values using the orgDid in the "Returning Org" section of the [SecretVault Registration Portal](https://sv-sda-registration.replit.app/).

```javascript
import dotenv from 'dotenv';
dotenv.config();

export const orgConfig = {
  orgCredentials: {
    secretKey: '0ac97ffdd83769c6c5032cb202d0957800e0ef151f015b0aaec52e2d864d4fc6',
    orgDid: 'did:nil:testnet:nillion1v596szek38l22jm9et4r4j7txu3v7eff3uffue',
  },
  nodes: [
    {
      url: 'https://nildb-nx8v.nillion.network',
      did: 'did:nil:testnet:nillion1qfrl8nje3nvwh6cryj63mz2y6gsdptvn07nx8v',
    },
    {
      url: 'https://nildb-p3mx.nillion.network',
      did: 'did:nil:testnet:nillion1uak7fgsp69kzfhdd6lfqv69fnzh3lprg2mp3mx',
    },
    {
      url: 'https://nildb-rugk.nillion.network',
      did: 'did:nil:testnet:nillion1kfremrp2mryxrynx66etjl8s7wazxc3rssrugk',
    },
  ],
};
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

[//]: # (- `name` is an encrypted field that stores data shares)
- `years_in_web3` is also encrypted and follows the same structure
- `responses` array holds unencrypted survey ratings, with each rating being 1-5

<details>

<summary>**Copy this Web3 Experience Survey schema into schema.json:**</summary>

```js reference showGithubLink
https://github.com/NillionNetwork/secretvaults-js/blob/main/examples/schema.json
```

</details>

#### Create the upload schema script:

```bash
touch createSchema.js
```

<details>

<summary>**Copy this script that creates your collection schema into createSchema.js:**</summary>

```js reference showGithubLink
https://github.com/NillionNetwork/secretvaults-js/blob/main/examples/createSchema.js
```

</details>

#### Run the upload schema script to create a schema collection:

```bash
node createSchema.js
```

Save the Schema ID from the output - you'll need it for writing and reading data to your collection in the next step.

### 4. Interact with SecretVault Data

#### 1. Create a main script file

```bash
touch readWriteSv.js
```

<details>
<summary>Now your file structure should look like this:</summary>
```
sv-quickstart/
├── node_modules
├── package-lock.json
├── package.json
├── orgConfig.js
├── createSchema.js
└── readWriteSv.js
```
</details>

#### 2. Import dependencies in readWriteSv.js

```
import { SecretVaultWrapper } from 'secretvaults';
import { v4 as uuidv4 } from 'uuid';
import { orgConfig } from './orgConfig.js';
```

#### 3. Add your Collection's Schema ID

```javascript
const SCHEMA_ID = 'YOUR_SCHEMA_ID';
```

#### 4. Create a payload of 1 or more Web3 Experience Survey data records to store

Mark the name and years_in_web3 fields with `%allot` to signal to nilQL that these are fields that need to be encrypted to shares before being stored in SecretVault. The secretvaults package will transform data marked %allot into encrypted %share properties before upload to SecretVault.

```javascript
const data = [
  {
    years_in_web3: { '%allot': 8 }, // years_in_web3 will be encrypted to a %share
    responses: [
      { rating: 5, question_number: 1 },
      { rating: 3, question_number: 2 },
    ], // responses will be stored in plaintext
  },
];
```

#### 5. Write the main function

- Initialize wrapper with nodes and credentials
- Write data to nodes, encrypting the years_in_web3 with nilQL ahead of time
- Read data from all nodes and recombine shares to decrypt the years_in_web3 field

```js reference showGithubLink
https://github.com/NillionNetwork/secretvaults-js/blob/main/examples/readWriteSv.js#L25-L54
```

#### 5. Run the script

```
node readWriteSv.js
```

<details>
<summary>Full readWriteSv.js file</summary>
```js reference showGithubLink
https://github.com/NillionNetwork/secretvaults-js/blob/main/examples/readWriteSv.js
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
