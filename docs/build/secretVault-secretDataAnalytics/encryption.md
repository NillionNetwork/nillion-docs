import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Encryption with nilQL

1. To apply encryption to your data, they are to be secret shared across your selected nodes.
2. This is to be done with **nilQL**, a library for working with encrypted data within nilDB queries and replies, available in [Python](https://pypi.org/project/nilql/#description) and [TypeScript](https://www.npmjs.com/).
3. You can find an example on using nilQL to encrypt/decrypt data below
4. **[NOTE]** On the next nilQL release, base64 ops will be handled in the library itself, hence this example should be edited at that time

<Tabs>
  <TabItem value="python" label="Python">

```python
import base64
import nilql
from typing import List, Tuple, Dict

class CredentialEncryption:
    def __init__(self, num_nodes: int):
        self.num_nodes = num_nodes
        self.secret_key = nilql.secret_key({'nodes': [{}] * num_nodes}, {'store': True})

    def encrypt_password(self, password: str) -> List[str]:
        """Encrypt password using secret sharing."""
        try:
            encrypted_shares = nilql.encrypt(self.secret_key, password)
            encoded_shares = []

            for i in range(self.num_nodes):
                encoded_share = base64.b64encode(encrypted_shares[i]).decode('utf-8')
                encoded_shares.append(encoded_share)

            return encoded_shares
        except Exception as e:
            raise Exception(f"Encryption failed: {str(e)}")

    def decrypt_password(self, encoded_shares: List[str]) -> str:
        """Decrypt password from shares."""
        try:
            decoded_shares = []
            for share in encoded_shares:
                decoded_share = base64.b64decode(share)
                decoded_shares.append(decoded_share)

            return nilql.decrypt(self.secret_key, decoded_shares)
        except Exception as e:
            raise Exception(f"Decryption failed: {str(e)}")

```

</TabItem> 
<TabItem value="typescript" label="TypeScript">

```TypeScript
placeholder
```

</TabItem>

</Tabs>
