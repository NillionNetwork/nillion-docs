import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Define a Query | Data Analytics

To run Data Analytics on SecretVault, you'll need to define a query. This is an enhanced MongoDB aggregation pipeline that is executed on the data stored on **SecretVault**. The support for variables in these queries/aggregations is the highlighted additional feature.


### 1. Define your Data Analytics Query and Variables

Before we begin, we need to take into consideration the type of operation our data were encrypted for. While the query/aggregation can perform any kind of computation
on data stored as plaintext, for encrypted data there are only two options:
- Data stored with the STORE option can only be retrieved as is
- Data stored with the SUM option can have summation run directly on the encrypted shares - the results of this from all the nodes can then be reconstructed

Queries are formulated using [MongoDB Aggregation Pipelines](https://www.mongodb.com/docs/manual/core/aggregation-pipeline/).

Additionally, there's an option for using **variables** (variables can be of type `string`, `number`, `boolean`, `date`, and `array` of the former 4 - they are referenced in the aggregation using a `##` prefix).

For the examples below we'll use the "Web3 survey" schema and showcase two different queries for STORE and SUM operations.

<details>
<summary>Example Queries</summary>

<Tabs>
<TabItem value="store schema" label="Store Schema">

```python reference showGithubLink
https://github.com/NillionNetwork/secretvaults-py/blob/main/examples/store_encryption/schema_store.json
```

</TabItem> 
<TabItem value="store query" label="Store Query">
This query returns the years in web3 of the users that gave the top 3 ratings.
```python reference showGithubLink
https://github.com/NillionNetwork/secretvaults-py/blob/main/examples/store_encryption/query_store_no_vars.json
```

</TabItem>
<TabItem value="sum schema" label="Sum Schema">

```python reference showGithubLink
https://github.com/NillionNetwork/secretvaults-py/blob/main/examples/sum_encryption/schema_sum.json
```

</TabItem> 
<TabItem value="sum query" label="Sum Query w/ variables">
THis query returns sum of years in web3 and count of users that have answered question x (a variable)
```python reference showGithubLink
https://github.com/NillionNetwork/secretvaults-py/blob/main/examples/sum_encryption/query_sum_with_vars.json
```

</TabItem>
</Tabs>
</details>





### 1b. [Optional] Enlisting the help of LLMs

Alternatively you can use a LLM with the the prompt provided below. At the end of the prompt template, substitute the sections `MY SCHEMA` with your own, and `MY QUERY DESCRIPTION` with information about your query, including the encryption operation used in nilQL (default is `STORE`, alternatively you can use `SUM` but remember the data in the collection are to be encrypted in the same way), any variables you'd like to add, and a description of what you want the query to return.

<details>
<summary>LLM Prompt Template</summary>

```
TASK:
- For the data described by the json schema found below (MY SCHEMA), build a Mongo Aggregation pipeline using as example
the query examples provided (EXAMPLE QUERIES that are setup against EXAMPLE SCHEMA - adjust for MY SCHEMA), the QUERY
SETUP HINTS/GUIDE and MY QUERY DESCRIPTION

EXAMPLE SCHEMA FOR THE EXAMPLE QUERIES:
{
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

EXAMPLE QUERIES:
> Example for store encryption and no variables
{
    "variables": {},
    "pipeline":
        [
          {
            "$unwind": "$responses"
          },
          {
            "$group": {
              "_id": "$_id",
              "avg_rating": { "$avg": "$responses.rating" },
              "years_in_web3": { "$first": "$years_in_web3" }
            }
          },
          {
            "$sort": { "avg_rating": -1 }
          },
          {
            "$limit": 3
          },
          {
            "$project": {
              "_id": 1,
              "years_in_web3": {
                "%share": "$years_in_web3.%share"
              },
              "avg_rating": 1
            }
          }
        ]
    }

> Example with sum encryption and variables
{
    "variables": {
        "question_number": {
            "type": "number",
            "description": "The target question"
        }
    },
    "pipeline":
        [
          {
            "$match": {
              "responses.question_number": "##question_number"
            }
          },
          {
            "$group": {
              "_id": null,
              "total_years": { "$sum": "$years_in_web3.%share" },
              "count": { "$sum": 1 }
            }
          },
          {
            "$project": {
              "_id": 0,
              "sum_years_in_web3": {
                "%share": {
                  "$mod": [
                    "$total_years",
                    { "$add": [{ "$pow": [2, 32] }, 15] }
                  ]
                }
              },
              "user_count": "$count"
            }
          }
        ]
    }

QUERY SETUP HINTS/GUIDE:
- consider these working example
- any field in the schema that has %share under it, is encrypted and should be handled as in the examples depending if
we're using store encryption or sum encryption (note the mod operation in the sum example, it has to be exactly that
for sum encryption)
- consider the format of the output regarding fields with %share, it should be nested like in the examples
- if variables are mentioned, populate the variables field in the query like in the example with variables, and use the
variable fields inside the pipeline prefixed with ## like in the example with variables

=======================================================================================================================

MY QUERY DESCRIPTION:
- Encryption type: Store
- Variables: None
- Desired outcome: For each user, get the number of responses they gave, and return the count of responses and years
they spent in web3. Get the top 5 by number of responses.

MY SCHEMA:
{
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

```

</details>



### 2. Use the Create Query API to register your query

Decide on a query name/description and generate a UUID4 for the Collection ID (use identical UUID across all Cluster nodes). You'll also need the schema id of the collection you're going to run the query against. You can get this via `GET /schemas` - check out the [List Schemas endpoint](../../api/nildb/get-schemas.api.mdx)) page for details.

Then use the [Create Query endpoint](../../api/nildb/add-query.api.mdx) to upload your query to each node in your organization using [valid API tokens](/build/secretVault-secretDataAnalytics/generate-tokens) for each node.

<details>
<summary>Example `POST /queries` Payload</summary>

```json
{
   "_id": "21b9911a-37c1-4626-8863-e465eXXXXXXX",
   "name": "Returns usernames for a given service by order of creation",
   "schema": "9b22147f-d6d5-40f1-927d-96c08XXXXXXXX",
   "variables": {
   "question_number": {
      "type": "number",
      "description": "The target question"
    }
  },
  "pipeline":
      [
        {
          "$match": {
            "responses.question_number": "##question_number"
          }
        },
        {
          "$group": {
            "_id": null,
            "total_years": { "$sum": "$years_in_web3.%share" },
            "count": { "$sum": 1 }
          }
        },
        {
          "$project": {
            "_id": 0,
            "sum_years_in_web3": {
              "%share": {
                "$mod": [
                  "$total_years",
                  { "$add": [{ "$pow": [2, 32] }, 15] }
                ]
              }
            },
            "user_count": "$count"
          }
        }
      ]
}
```

</details>

<details>
<summary>Code Samples</summary>

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
  <TabItem value="createQuery" label="query_create.py">
```python reference showGithubLink
https://github.com/NillionNetwork/secretvaults-py/blob/main/examples/store_encryption/query_create.py
```
</TabItem>
  <TabItem value="orgConfig" label="org_config.py">
```python reference showGithubLink
https://github.com/NillionNetwork/secretvaults-py/blob/main/examples/org_config.py
```
</TabItem>
</Tabs>

</TabItem>

</Tabs>
</details>

Queries are immutable. If you need to make changes to your schema, use the `DELETE /queries` API endpoint to delete your current query, then redo this step to re-create your updated query.
