import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Retrieve Records

To retrieve records from SecretVault, fetch data from your cluster's nodes, then decrypt any encrypted fields using [nilQL](/build/nilQL) to reconstruct the original data.

### 1. Check Your Collection for the Schema ID

List available Collections using the [List Schemas endpoint](../../api/nildb/list-the-organizations-schemas.api.mdx) (GET /schemas) to get the Schema ID of the collection you want to store your data in.

### 2. Retrieve Records

Retrieve records from a collection by calling the [Read Data endpoint](../../api/nildb/retrieve-data-from-the-specified-schema-collection-that-matches-the-provided-filter) (POST /data/read) with the schema id and optionally a filter. If you don't pass in a filter, all records will be returned.

<details>
<summary>Example `POST /data/read` Payload</summary>

```JSON
{
   "schema": "9b22147f-d6d5-40f1-927d-96c08XXXXXXXX",
   "filter": {
      "service": "Netflix"
   }
}
```

</details>

<details>
<summary>Code Sample</summary>

<Tabs>
  <TabItem value="python" label="Python">

```python reference showGithubLink
https://github.com/NillionNetwork/blind-module-examples/blob/main/nildb/secretvault_python/nildb_api.py#L34-L59
```

</TabItem> 
<TabItem value="typescript" label="TypeScript">

```TypeScript
// coming soon
```

</TabItem>

</Tabs>

</details>

Retrieved records will have:

- Plaintext fields with identical values across nodes
- Encrypted fields as shares that need nilQL to decrypt and reconstruct values from all nodes
