import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Retrieve Records

To retrieve records from SecretVault, fetch data from your cluster's nodes, then decrypt any encrypted fields using [nilQL](/build/nilQL) to reconstruct the original data.

### 1. Check Your Collection for the Schema ID

List available Collections using the [List Schemas endpoint](../../api/nildb/get-schemas.api.mdx) (GET /schemas) to get the Schema ID of the collection you want to store your data in.

### 2. Retrieve Records

Retrieve records from a collection by calling the [Read Data endpoint](../../api/nildb/read-data) (`POST /data/read`) with the schema id and optionally a filter. If you don't pass in a filter, all records will be returned.

#### Using a filter
A filter can be a basic match (e.g. `"status": "active"`), a comparison (e.g. `"age" : { "$gte": 30}`) or something more complex.

<details>
<summary>Complex filter example & resources</summary>

```JSON
{
  "filter": {
    "$and": [
        { "status": "active" },
        { "age": { "$gte": 30 } },
        { "tags": { "$in": ["premium", "verified"] } }
    ]
  }
}
```
For more operator options check out [Comparison Operators](https://www.mongodb.com/docs/manual/reference/operator/query/#comparison) and [Logical Operators](https://www.mongodb.com/docs/manual/reference/operator/query/#logical).
</details>

#### Examples for retrieving records

<details>
<summary>Example `POST /data/read` Payload</summary>

```JSON
{
   "schema": "9b22147f-d6d5-40f1-927d-96c08XXXXXXXX",
   "filter": {
      "_id": "120a60f3-d1b6-4a11-a413-abcd60c8ccb3"
   }
}
```

</details>

<details>
<summary>Code Samples</summary>

<Tabs>
  <TabItem value="python" label="Python">

```python reference showGithubLink
https://github.com/NillionNetwork/blind-module-examples/blob/main/nildb/secretvault_python/nildb_api.py#L34-L59
```

</TabItem> 
<TabItem value="typescript" label="TypeScript">

```TypeScript reference showGithubLink
https://github.com/NillionNetwork/blind-module-examples/blob/main/nildb/secretvault_nextjs/app/lib/nildb.ts#L54-L84
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

Retrieved records will have:

- Plaintext fields with identical values across nodes
- Encrypted fields as shares that need nilQL to decrypt and reconstruct values from all nodes


### Other operations on records

- [Update Data endpoint](../../api/nildb/update-data) (also supported via the `secretvaults` JS+Python wrappers)
- [Delete Data endpoint](../../api/nildb/delete-data) (also supported via the `secretvaults` JS+Python wrappers)
- [Flush Data endpoint](../../api/nildb/delete-all-data)
- [Tail Data endpoint](../../api/nildb/list-new-data)


