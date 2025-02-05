import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Store Records

To store records in SecretVault, you'll first encrypt any sensitive fields with [nilQL](/build/nilQL), then store the record across your cluster's nodes. Each node stores plaintext fields identically, while encrypted fields are split into unique shares, one per node.

### 1. Check Your Collection for the Schema ID

List available Collections using the [List Schemas endpoint](../../api/nildb/list-the-organizations-schemas.api.mdx) (GET /schemas) to get the Schema ID of the collection you want to store your data in.

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
         "_id": "f47ac10b-58cc-4372-a567-0e02bXXXXXX",
         "service": "Netflix",
         "username": "JohnDoe13",
         "password": "oTsOsg+XMaA=", //encrypted share
         "registered_at": "2022-01-01T00:00:00Z"
      }
   ]
}
```

</details>

Upload to all nodes using each node's [Upload/Create Data endpoint](/api/nildb/upload-data-to-the-specified-schema-collection) using [valid API tokens](/build/secretVault-secretDataAnalytics/generate-tokens) to authenticate requests to each node. The response includes:

- Created records
- Any validation errors, where any issues with data ingestion will be described even if the communication with the node resulted in a `200` status response. You can check out an example below that showcases both instances:

<details>
<summary>Example `POST /data/create` Response</summary>

```JSON
{
   "data": {
      "created": [
         "f47ac10b-58cc-5372-a567-0e02b2XXXXXX"
      ],
      "errors": [
         {
            "error": "E11000 duplicate key error collection: datablocks_data.f47ac10b-58cc-4372-a567-0e02b2XXXXXX index: _id_ dup key: { _id: UUID(\"f47ac10b-58cc-4372-a567-0e02b2XXXXXX\") }",
            "document": {
               "_id": "f47ac10b-58cc-4372-a567-0e02bXXXXXX",
               "service": "Netflix",
               "username": "JohnDoe13",
               "password": "oTsOsg+XMaA=",
               "registered_at": "2022-01-01T00:00:00Z"
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

### Install nillion-sv-wrappers

```bash
npm i nillion-sv-wrappers
```

### Run the readWriteSv script

```bash
node readWriteSv.js
```

<Tabs>
  <TabItem value="readWriteSv" label="readWriteSv.js">
```javascript reference showGithubLink
https://github.com/NillionNetwork/nillion-sv-wrappers/blob/main/examples/readWriteSv.js
```
</TabItem>
  <TabItem value="orgConfig" label="orgConfig.js">
```javascript reference showGithubLink
https://github.com/NillionNetwork/nillion-sv-wrappers/blob/main/examples/orgConfig.js
```
</TabItem>
</Tabs>
</TabItem>
</Tabs>

</details>