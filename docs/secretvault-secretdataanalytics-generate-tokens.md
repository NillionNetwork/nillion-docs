import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# 3. Generating API tokens

1. In order to access the endpoints of SecretVault/SecretDataAnalytics, you will require a set of Bearer tokens for authorization - one for each node in your setup.
2. Those can be generated programmatically using the information from your Credentials and Cluster Config
3. Specifically you'll be able to generate them with just the following information using the code below:
   - Your private key
   - Your DID
   - The target node's DID

<Tabs>
  <TabItem value="python" label="Python">

```python
import jwt
import time
from ecdsa import SigningKey, SECP256k1

def create_jwt(secret_key: str = None,
               org_did: str = None,
               node_ids: list = None,
               ttl: int = 3600) -> list:
    """
    Create JWTs signed with ES256K for multiple node_ids
    """
    
    # Convert the secret key from hex to bytes
    private_key = bytes.fromhex(secret_key)
    signer = SigningKey.from_string(private_key, curve=SECP256k1)

    tokens = []
    for node_id in node_ids:
        # Create payload for each node_id
        payload = {
            "iss": org_did,
            "aud": node_id,
            "exp": int(time.time()) + ttl
        }

        # Create and sign the JWT
        token = jwt.encode(
            payload,
            signer.to_pem(),
            algorithm="ES256K"
        )
        tokens.append(token)
        print(f"Generated JWT for {node_id}: {token}")
    
    return tokens

if __name__ == "__main__":
    secret_key = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
    org_did = "did:nil:testnet:nillionXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
    node_ids = [
        "did:nil:testnet:nillionXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
        "did:nil:testnet:nillionXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
        "did:nil:testnet:nillionXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
    ]
    create_jwt(secret_key, org_did, node_ids)
```
</TabItem> 
<TabItem value="typescript" label="TypeScript">

```TypeScript
function createJwt(
    secretKey: string,
    orgDid: string,
    nodeIds: string[],
    ttl: number = 3600
): string[]
```
</TabItem> 

</Tabs>