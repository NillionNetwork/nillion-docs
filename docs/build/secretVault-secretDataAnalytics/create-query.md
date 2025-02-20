import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# SDA: Creating & Registering Queries

1. 📊 Queries in **SecretDataAnalytics** are essentially enhanced MongoDB aggregations that are executed on the data stored on **SecretVault**:
   - The support for variables in these queries/aggregations is the highlighted additional feature
2. 📝 We start with formulating a [MongoDB Aggregation Pipeline](https://www.mongodb.com/docs/manual/core/aggregation-pipeline/). In this example, we want to get all usernames for a given service by order of creation:

<details>
<summary>Example Aggregation Pipeline</summary>

```mongo
[
   {
      "$match": {
         "service": "Netflix"
      }
   },
   {
      "$sort": {
         "_created": 1
      }
   },
   {
      "$project": {
         "username": 1,
         "_id": 0
      }
   }
]
```

</details>

3. 🧰 Additionally, we'll make our matching target a **variable** (variables can be of type `string`, `number`, `boolean`, `date`, and `array` of the former 4 - they are referenced in the aggregation using a `##` prefix), and gather a few more things we're going to need before being ready to register the query:
   - 1️⃣ Your organization's DID (Decentralized Identifier), obtained during the [Access](access.md) step
   - 2️⃣ A name (description) for your query
   - 3️⃣ The schema we're targeting (by `schema_id`, you can get this via `GET /schemas` - check out the [List Schemas endpoint](../../api/nildb/get-schemas.api.mdx)) page for details
   - 4️⃣ A unique `uuid4` identifier for your query. As you're going to be registering this to multiple nodes that do not communicate or are aware of each other (for purposes of encryption via secret shares), this must be provided on creation and be the same across nodes.

<details>
<summary>Example `POST /queries` Payload</summary>

```json
{
  "_id": "21b9911a-37c1-4626-8863-e465eXXXXXXX",
  "owner": "did:nil:testnet:nillion1lng3uvz65frtv4jnrxyn2zn7xhyzujXXXXXXXX",
  "name": "Returns usernames for a given service by order of creation",
  "schema": "9b22147f-d6d5-40f1-927d-96c08XXXXXXXX",
  "variables": {
    "service": {
      "type": "string",
      "description": "The target service"
    }
  },
  "pipeline": [
    {
      "$match": {
        "service": "##service"
      }
    },
    {
      "$sort": {
        "_created": 1
      }
    },
    {
      "$project": {
        "username": 1,
        "_id": 0
      }
    }
  ]
}
```

</details>

4. 🏁 You can now use the [Create Query endpoint](../../api/nildb/overview.md) to register your query on your **SecretDataAnalytics** nodes. You can find an example below:
   - 1️⃣ Node info acquisition details can be found on the [Access](access.md) page
   - 2️⃣ Token acquisition details can be found on the [Generating API Tokens](generate-tokens.md) page

<details>
<summary>Code Sample</summary>

<Tabs>
  <TabItem value="python" label="Python">

```python reference showGithubLink
https://github.com/NillionNetwork/blind-module-examples/blob/main/nildb/secretvault_python/nildb_api.py#L113-L136
```

</TabItem>

<TabItem value="wrapper-py" label="Python (with wrapper)">

### Install secretvaults

```bash
pip install secretvaults
```

### Run the query_create script

```bash
python3 query_create.py
```

<Tabs>
  <TabItem value="createSchema" label="query_create.py">
```javascript reference showGithubLink
https://github.com/NillionNetwork/secretvaults-py/blob/main/examples/query_create.py#L2-L41
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

5. ✅ You can now move on to the next step [SDA: Querying Data](query.md) in order to test your new query.
6. ❓ Did you run into any problems and want to edit/rework your query? Use the [Delete Query endpoint](../../api/nildb/overview.md) to remove it, then make your adjustments and repeat step 4. Remember, you can always reach out to us if you get stuck!
