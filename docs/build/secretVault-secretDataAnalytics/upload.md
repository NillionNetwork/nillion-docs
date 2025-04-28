import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Store Records

To store records in SecretVault, you'll first encrypt any sensitive fields with [nilQL](/build/nilQL), then store the record across your cluster's nodes. Each node stores plaintext fields identically, while encrypted fields are split into unique shares, one per node.

### 1. Check Your Collection for the Schema ID

List available Collections using the [List Schemas endpoint](../../api/nildb/get-schemas.api.mdx) (GET /schemas) to get the Schema ID of the collection you want to store your data in.

### 2. Store a Record

Before storing:

- Encrypt any private fields using [nilQL](/build/nilQL) to get encrypted shares
- Make sure data matches your Collection's JSON Schema
- Generate and include a unique \_id (UUIDv4) for each record

:::note
You can include up to 10k records in a `POST /data/create` request, and the total JSON body size can be up to 16MB
:::

<details>
<summary>Example `POST /data/create` Payload</summary>

```JSON
{
  "schema": "9b22147f-d6d5-40f1-927d-96c08XXXXXXXX",
  "data": [
    {
      "_id": "120a60f3-d1b6-4a11-a413-abcd60c8ccb3",
      "years_in_web3": "zKH1L", // encrypted share
      "responses": [
        { "rating": 5, "question_number": 1 },
        { "rating": 3, "question_number": 2 }
      ]
    },
    {
      "_id": "b321301b-ffcd-43d8-bec7-4b0830f7a305",
      "years_in_web3": "5J_KL4", // encrypted share
      "responses": [
        { "rating": 2, "question_number": 1 },
        { "rating": 4, "question_number": 2 }
      ]
    }
  ]
}

```

</details>

Upload to all nodes using each node's [Upload/Create Data endpoint](/api/nildb/upload-data) using [valid API tokens](/build/secretVault-secretDataAnalytics/generate-tokens) to authenticate requests to each node. The response includes:

- Created records
- Any validation errors, where any issues with data ingestion will be described even if the communication with the node resulted in a `200` status response. You can check out an example below that showcases both instances:

<details>
<summary>Example `POST /data/create` Response</summary>

```JSON
{
   "data": {
      "created": [
         "120a60f3-d1b6-4a11-a413-abcd60c8ccb3"
      ],
      "errors": [
         {
            "error": "E11000 duplicate key error collection: datablocks_data.f47ac10b-58cc-4372-a567-0e02b2XXXXXX index: _id_ dup key: { _id: UUID(\"b321301b-ffcd-43d8-bec7-4b0830f7a305\") }",
            "document": {
              "_id": "b321301b-ffcd-43d8-bec7-4b0830f7a305",
              "years_in_web3": "5J_KL4",
              "responses": [
                { "rating": 2, "question_number": 1 },
                { "rating": 4, "question_number": 2 }
              ]
            }
         }
      ]
   }
}
```

</details>

<details>
<summary>Code Samples</summary>

<Tabs>
  <TabItem value="python" label="Python">

```python reference showGithubLink
https://github.com/NillionNetwork/blind-module-examples/blob/main/nildb/secretvault_python/nildb_api.py#L9-L32
```

</TabItem> 
<TabItem value="typescript" label="TypeScript">

```TypeScript reference showGithubLink
https://github.com/NillionNetwork/blind-module-examples/blob/main/nildb/secretvault_nextjs/app/lib/nildb.ts#L24-L52
```

</TabItem>
<TabItem value="wrapper" label="JavaScript (with wrapper)">

### Install secretvaults

```bash
npm i secretvaults
```

### Run the readWriteSv script

```bash
node readWriteSv.js
```

<Tabs>
  <TabItem value="readWriteSv" label="readWriteSv.js">
```javascript reference showGithubLink
https://github.com/NillionNetwork/secretvaults-js/blob/main/examples/store/dataCreateRead.js
```
</TabItem>
  <TabItem value="orgConfig" label="orgConfig.js">
```javascript reference showGithubLink
https://github.com/NillionNetwork/secretvaults-js/blob/main/examples/orgConfig.js
```
</TabItem>
</Tabs>
</TabItem>
<TabItem value="wrapper-py" label="Python (with wrapper)">

### Install secretvaults

```bash
pip install secretvaults
```

### Run the data_create_read script

```bash
python3 data_create_read.py
```

<Tabs>
  <TabItem value="readWriteSv" label="data_create_read.py">
```javascript reference showGithubLink
https://github.com/NillionNetwork/secretvaults-py/blob/main/examples/store_encryption/data_create_read.py
```
</TabItem>
  <TabItem value="orgConfig" label="org_config.py">
```javascript reference showGithubLink
https://github.com/NillionNetwork/secretvaults-py/blob/main/examples/org_config.py
```
</TabItem>
</Tabs>
</TabItem>

</Tabs>

</details>
