import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# SDA: Querying Data

1. 🔍 You can check out the available queries for your org via `GET /queries` - see the [List Queries endpoint](../../api/nildb/list-the-organizations-queries.api.mdx) page for details.
2. 🧰 Then, using the query id and any variables required you are ready to setup the payload for executing the query:

<details>
<summary>Example `POST /queries/execute` Payload</summary>

```JSON
{
  "id": "dfcee886-231d-4a9d-9bdd-857f74XXXXX",
  "variables": {
    "service": "Netflix"
  }
}
```

</details>

3. 🏁 You can now use the `POST /queries` endpoint to retrieve the results - check out the [Execute Queries endpoint](../../api/nildb/add-a-new-query.api.mdx) page for details. You can find an example below:

   - 1️⃣ Node info acquisition details can be found on the [Access](access.md) page
   - 2️⃣ Token acquisition details can be found on the [Generatin API Tokens](generate-tokens.md) page

<details>
<summary>Code Sample</summary>

<Tabs>
  <TabItem value="python" label="Python">

```python reference showGithubLink
https://github.com/NillionNetwork/blind-module-examples/blob/main/nildb/secretvault_python/nildb_api.py#L61-L79
```

</TabItem> 
<TabItem value="typescript" label="TypeScript">

```TypeScript
// coming soon
```

</TabItem> 
</Tabs>
</details>
