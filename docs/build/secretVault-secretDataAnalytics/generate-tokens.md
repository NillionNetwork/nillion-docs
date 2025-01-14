import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Generating API tokens

1. In order to access the endpoints of SecretVault/SecretDataAnalytics, you will require a set of Bearer tokens for authorization - one for each node in your setup.
2. Those can be generated programmatically using the information from your Credentials and Cluster Config
3. Specifically you'll be able to generate them with just the following information using the code below:
   - Your private key
   - Your DID
   - The target node's DID

<Tabs>
  <TabItem value="python" label="Python">

```python
# generate.py
# pip install "PyJWT[crypto]" ecdsa

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

# # Replace secret_key with secret Key
# # Replace org_did with DID for organization
# # Replace node_ids with the Node DIDs
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
<TabItem value="javascript" label="Javascript (Node)">

```JavaScript
// generate.js
// npm install did-jwt
// run it via node (node generate.js)

const { createJWT, ES256KSigner } = require('did-jwt');
const { Buffer } = require('buffer');

// Creating the JWT Token
async function createJwt(secretKey, orgDid, nodeIds, ttl = 3600) {
    // Create signer from private key
    const signer = ES256KSigner(Buffer.from(secretKey, 'hex'));
    const tokens = [];

    for (const nodeId of nodeIds) {
        const payload = {
            iss: orgDid,
            aud: nodeId,
            exp: Math.floor(Date.now() / 1000) + ttl
        };

        const token = await createJWT(payload, { issuer: orgDid, signer });
        tokens.push(token);
        console.log(`Generated JWT for ${nodeId}: ${token}`);
    }

    return tokens;
}

// Example usage
async function main() {
    const secretKey = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
    const orgDid = "did:nil:testnet:nillionXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
    const nodeIds = [
        "did:nil:testnet:nillionXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
        "did:nil:testnet:nillionXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
        "did:nil:testnet:nillionXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
    ];

    await createJwt(secretKey, orgDid, nodeIds);
}

if (require.main === module) {
    main().catch(console.error);
}

module.exports = { createJwt };
```

</TabItem>

</Tabs>