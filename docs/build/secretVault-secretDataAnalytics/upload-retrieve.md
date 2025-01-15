import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Uploading & Querying Data

1. The two main operations for a user are:
   - Uploading / Reading Data (SecretVault)
   - Running Queries on the Data (SecretDataAnalytics)
2. To achieve these, we are to communicate with all the nodes in use by the org via REST API endpoints, using the previously generated Bearer tokens for authentication.
3. An org can always retrieve information on all their schemas and queries using the GET `/schemas` and GET `/queries` endpoints (detailed information in the API Reference page).
4. Below are a couple simple examples on using the POST `/data/create` and POST `/data/read` endpoints. The format of these requests, and especially for uploading data, must match the JSON schema definition of the target schema. We also have this extended for POST `queries/execute` for more complex schemas.

:::info
You’ll have to provide an `_id` field of UUIDv4 type for all newly created records. All records are also getting internal `_created` and `_updated` fields automatically assigned and filled that can be used on queries.
:::

<Tabs>
  <TabItem value="python" label="Python">

```python
# nildbapi.py
import requests
import json
from typing import Dict, List, Optional

class NilDBAPI:
    def __init__(self, node_config: Dict):
        self.nodes = node_config

    def create_credential(self, node_name: str, credential_data: Dict) -> bool:
        """Create a credential entry in the specified node."""
        try:
            node = self.nodes[node_name]
            headers = {
                'Authorization': f'Bearer {node["jwt"]}',
                'Content-Type': 'application/json'
            }

            payload = {
                "schema": credential_data["schema"],
                "data": [credential_data["data"]]
            }

            response = requests.post(
                f"{node['url']}/data/create",
                headers=headers,
                json=payload
            )

            return response.status_code == 200
        except Exception as e:
            print(f"Error creating credential in {node_name}: {str(e)}")
            return False

    def read_credentials(self, node_name: str, schema: str, service: Optional[str] = None) -> List[Dict]:
        """Read credentials from the specified node."""
        try:
            node = self.nodes[node_name]
            headers = {
                'Authorization': f'Bearer {node["jwt"]}',
                'Content-Type': 'application/json'
            }

            payload = {
                "schema": schema,
                "filter": {"service": service} if service else {}
            }

            response = requests.post(
                f"{node['url']}/data/read",
                headers=headers,
                json=payload
            )

            if response.status_code == 200:
                return response.json().get("data", [])
            else:
                raise Exception(f"HTTP error! status: {response.status}")
        except Exception as e:
            print(f"Error reading credentials from {node_name}: {str(e)}")
            return []

    def read_credentials_advanced(self, node_name: str, schema: str, service: Optional[str] = None) -> List[Dict]:
        """Read credentials from the specified node with advanced filtering."""
        try:
            node = self.nodes[node_name]
            headers = {
                'Authorization': f'Bearer {node["jwt"]}',
                'Content-Type': 'application/json'
            }

            payload = {
                "schema": schema,
                "filter": {"service": service} if service else {}
            }

            response = requests.post(
                f"{node['url']}/queries/execute",
                headers=headers,
                json=payload
            )

            if response.status_code == 200:
                return response.json().get("data", [])
            return []
        except Exception as e:
            print(f"Error reading credentials from {node_name}: {str(e)}")
            return []

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
