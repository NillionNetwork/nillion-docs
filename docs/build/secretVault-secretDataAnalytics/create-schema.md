import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Define a Collection

To store data in SecretVault, you'll need to define a Collection with a JSON Schema, which creates a structured container for your records (individual pieces of data). This has two main effects:

1. Creates a Collection in SecretVault for your data
2. Links the Collection to your Organization and validates all records before storage, ensuring they adhere to the JSON Schema

### 1. Plan Your Collection's Data Structure

Sketch out your data structure to plan the fields and types that will define your collection's JSON schema. Here's an example:

<details>
<summary>Example Data</summary>

```json
years_in_web3 = 3 //integer, encrypted
responses = [] //array
  question_number = 1 //integer
  rating = 5 //integer
```

</details>

### 2. Create the JSON Schema

Convert your data structure into a JSON Schema following these requirements:

- Use JSON Schema draft-07, type "array"
- Each record needs a unique \_id (UUID format, coerce: true)
- Use "date-time" format for dates (coerce: true)
- Remember to take into account the type for fields that you want to encrypt using %allot/%share
- Mark required fields (\_id is always required)
- Set additionalProperties to false
- Avoid "$" prefix in field names to prevent query conflicts
- Note: System adds \_created and \_updated fields automatically

Use a [JSON Schema validator tool](https://www.jsonschemavalidator.net/) to make sure your collection's schema is valid.

<details>
<summary>Example JSON Schema</summary>

```js reference showGithubLink
https://github.com/NillionNetwork/secretvaults-js/blob/main/examples/schema.json
```

</details>

### 3. Use the Create Schema API to Create your Schema and Collection

Decide on a collection name and generate a UUID4 for the Collection ID (use identical UUID across all Cluster nodes).

Select which fields should act as primary keys / unique identifiers (`_id` should always be included).

Then use the Create Schema endpoint to upload your JSON schema to each node in your organization using [valid API tokens](/build/secretVault-secretDataAnalytics/generate-tokens) for each node.

<details>
<summary>Example `POST /schemas` Payload</summary>

```json
{
  "_id": "9b22147f-d6d5-40f1-927d-96c08XXXXXXXX",
  "name": "Web3 Experience Survey",
  "keys": ["_id"],
  "schema": {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "title": "Web3 Experience Survey",
    "type": "array",
    "items": {
      "type": "object",
      "properties": {
        "_id": {
          "type": "string",
          "format": "uuid",
          "coerce": true
        },
        "years_in_web3": {
          "type": "object",
          "properties": {
            "%share": {
              "type": "string"
            }
          },
          "required": ["%share"]
        },
        "responses": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "rating": {
                "type": "integer",
                "minimum": 1,
                "maximum": 5
              },
              "question_number": {
                "type": "integer",
                "minimum": 1
              }
            },
            "required": ["rating", "question_number"]
          },
          "minItems": 1
        }
      },
      "required": ["_id", "years_in_web3", "responses"]
    }
  }
}
```

</details>

<details>
<summary>Code Samples</summary>

<Tabs>
  <TabItem value="python" label="Python">

```python reference showGithubLink
https://github.com/NillionNetwork/blind-module-examples/blob/main/nildb/secretvault_python/define_collection.py#L12-L38
```

```python reference showGithubLink
https://github.com/NillionNetwork/blind-module-examples/blob/main/nildb/secretvault_python/nildb_api.py#L88-L111
```

</TabItem>
<TabItem value="typescript" label="TypeScript">

```tsx reference showGithubLink
https://github.com/NillionNetwork/blind-module-examples/blob/main/nildb/secretvault_nextjs/app/api/create-schema/route.ts#L41-L106
```

</TabItem> 
<TabItem value="wrapper" label="JavaScript (with wrapper)">

### Install secretvaults

```bash
npm i secretvaults
```

### Run the createSchema script

```bash
node createSchema.js
```

<Tabs>
  <TabItem value="createSchema" label="createSchema.js">
```javascript reference showGithubLink
https://github.com/NillionNetwork/secretvaults-js/blob/main/examples/createSchema.js
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

### Run the schema_create script

```bash
python3 schema_create.py
```

<Tabs>
  <TabItem value="createSchema" label="schema_create.py">
```javascript reference showGithubLink
https://github.com/NillionNetwork/secretvaults-py/blob/main/examples/store_encryption/schema_create.py
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

Schema collections are immutable. If you need to make changes to your schema, use the `DELETE /schema` API endpoint to delete your current schema, then redo this step to re-create your updated schema.
