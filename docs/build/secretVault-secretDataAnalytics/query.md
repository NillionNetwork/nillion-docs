import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Execute a Query | Data Analytics

Running your queries is pretty straightforward, you only need the query id and any optional variables required.

### 1. Check Your Queries for the Query ID

List available Queries using the [List Queries endpoint](../../api/nildb/get-queries.api.mdx) (GET /queries) to get the Query ID.

### 2. Executing the Query

Using the query id and any variables required you are ready to setup the payload for executing the query:

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

<details>
<summary>Code Samples</summary>

<Tabs>
  <TabItem value="python" label="Python">

```python reference showGithubLink
https://github.com/NillionNetwork/blind-module-examples/blob/main/nildb/secretvault_python/nildb_api.py#L61-L79
```

</TabItem> 
<TabItem value="typescript" label="TypeScript">

```TypeScript
  const queryCredentials = async (
        nodeName: NodeName,
        query: string,
        service?: string
): Promise<Credential[]> => {
   const node = config[nodeName];

   try {
      const response = await fetch(`${node.url}/queries/execute`, {
         method: 'POST',
         headers: {
            Authorization: `Bearer ${node.jwt}`,
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({
            id: query,
            variables: {
               service: service,
            },
         }),
      });

      if (!response.ok) {
         throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = (await response.json()) as NodeResponse<Credential[]>;
      return result.data || [];
   } catch (error) {
      console.error(`Error reading advanced credentials from ${nodeName}:`, error);
      return [];
   }
};
```

</TabItem> 
<TabItem value="wrapper-py" label="Python (with wrapper)">

### Install secretvaults

```bash
pip install secretvaults
```

### Run the query_execute script

```bash
python3 query_execute.py
```

<Tabs>
  <TabItem value="createSchema" label="query_execute.py">
```javascript reference showGithubLink
https://github.com/NillionNetwork/secretvaults-py/blob/main/examples/store_encryption/query_execute.py
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
