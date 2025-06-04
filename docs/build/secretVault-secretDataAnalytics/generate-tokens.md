import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Generating API tokens

1. In order to access the endpoints of SecretVault/SecretDataAnalytics, you will require a set of Bearer tokens for authorization - one for each node in your setup.
2. Those can be generated programmatically using the information from your `Credentials` and `Cluster Config`.
3. Specifically you'll be able to generate them with just the following information using the code below:
   - Your private key
   - Your DID
   - The target node's DID
4. We're encouraging generation during runtime with short TTL for these tokens, but it's up to you if you want to manually rotate them on longer intervals.

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
    # these are the demo cluster node dids, change them if your config is different
    node_ids = [
        "did:nil:testnet:nillion1fnhettvcrsfu8zkd5zms4d820l0ct226c3zy8u",
        "did:nil:testnet:nillion14x47xx85de0rg9dqunsdxg8jh82nvkax3jrl5g",
        "did:nil:testnet:nillion167pglv9k7m4gj05rwj520a46tulkff332vlpjp"
    ]
    create_jwt(secret_key, org_did, node_ids)
```

</TabItem> 
<TabItem value="javascript" label="JavaScript (from scratch)">

```javascript reference showGithubLink
https://github.com/NillionNetwork/blind-module-examples/blob/main/nildb/secretvault_nextjs_niql/generate.js
```

</TabItem>

<TabItem value="wrapper" label="JavaScript (with wrapper)">

### Install secretvaults

```bash
npm i secretvaults
```

### Run the generateApiTokens script

```bash
node generateApiTokens.js
```

<Tabs>
  <TabItem value="generateApiTokens" label="generateApiTokens.js">
```javascript reference showGithubLink
https://github.com/NillionNetwork/secretvaults-js/blob/main/examples/generateApiTokens.js
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

### Run the generate_api_tokens script

```bash
python3 generate_api_tokens.py
```

<Tabs>
  <TabItem value="generateTokens" label="generate_api_tokens.py">
```javascript reference showGithubLink
https://github.com/NillionNetwork/secretvaults-py/blob/main/examples/generate_api_tokens.py
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
