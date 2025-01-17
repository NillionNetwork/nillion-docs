import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Uploading & Querying Data

1. The two main operations for a user are:
   - Uploading / Reading Data (SecretVault)
   - Running Queries on the Data (SecretDataAnalytics)
2. To achieve these, we are to communicate with all the nodes in use by the org via REST API endpoints, using the previously generated Bearer tokens for authentication.
3. An org can always retrieve information on all their schemas and queries using the GET `/schemas` and GET `/queries` endpoints (detailed information in the [API Reference](../../api/nildb/overview) page).
4. Below are a couple simple examples on using the POST `/data/create`, POST `/data/read` and POST `queries/execute` endpoints. The format of these requests, and especially for uploading data, must match the JSON schema definition of the target schema.

:::info
- You’ll have to provide an `_id` field of UUIDv4 type for all newly created records. This is because the nodes are completely independent and agnostic of each other, and we'll need a point of reference to reconstruct the encrypted data.
- Also note that all records are also getting internal `_created` and `_updated` fields automatically assigned and filled that can be used on queries.
:::

<Tabs>
  <TabItem value="python" label="Python">

```python reference showGithubLink
https://github.com/NillionNetwork/nil-examples/blob/main/nildb/secretvault_python/nildb_api.py
```

</TabItem> 
<TabItem value="typescript" label="TypeScript">

```TypeScript
// lib/nildb.ts
import { NODE_CONFIG, NUM_NODES, SCHEMA_ID } from './config';

export type NodeName = keyof typeof NODE_CONFIG;

export interface Credential {
  _id: string;
  username: string;
  password: string;
  service: string;
}

interface CredentialPayload {
  schema: string;
  data: Credential;
}

interface NodeResponse<T> {
  data?: T;
  error?: string;
}

export const createNilDBAPI = (config = NODE_CONFIG) => {
  const uploadCredential = async (
    nodeName: NodeName,
    credentialData: CredentialPayload
  ): Promise<boolean> => {
    const node = config[nodeName];

    try {
      const response = await fetch(`${node.url}/data/create`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${node.jwt}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          schema: credentialData.schema,
          data: [credentialData.data],
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return true;
    } catch (error) {
      console.error(`Error creating credential in ${String(nodeName)}:`, error);
      return false;
    }
  };

  const retrieveCredentials = async (
    nodeName: NodeName,
    schema: string,
    service?: string
  ): Promise<Credential[]> => {
    const node = config[nodeName];

    try {
      const response = await fetch(`${node.url}/data/read`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${node.jwt}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          schema,
          filter: service ? { service } : {},
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = (await response.json()) as NodeResponse<Credential[]>;
      return result.data || [];
    } catch (error) {
      console.error(`Error reading credentials from ${nodeName}:`, error);
      return [];
    }
  };

  const retrieveCredentialsAdvanced = async (
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

  return {
    uploadCredential,
    retrieveCredentials,
    retrieveCredentialsAdvanced,
    config,
    NUM_NODES,
    SCHEMA_ID,
  } as const;
};

export type NilDB = ReturnType<typeof createNilDBAPI>;


```

</TabItem> 
    <TabItem value="json" label="JSON">

```JSON
// Single-node example API requests

// POST /data/create
// Authorization: Bearer XXXXXXX
{
  "schema": "6aa651af-7762-4aaa-9089-82f8eab16774",
  "data": [
    {
      "_id": "490421b2-2efb-496a-9e77-2064d5928887",
      "username": "my_username",
      "password": "oTsOsg+XMaA=", //encrypted share
      "service": "github"
    }
  ]
}

// POST /queries/execute
// Authorization: Bearer XXXXXXX
{
  "id": "dfcee886-231d-4a9d-9bdd-857f74a72669",
  "variables": {
    "service": "github"
  }
}
```

</TabItem> 
</Tabs>
