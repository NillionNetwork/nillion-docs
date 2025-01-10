import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Encryption with nilQL

1. To apply encryption to your data, they are to be secret shared across your selected nodes.
2. This is to be done with **nilQL**, a library for working with encrypted data within nilDB queries and replies, available in [Python](https://pypi.org/project/nilql/#description) and [TypeScript](https://www.npmjs.com/).
3. You can find an example on using nilQL to encrypt/decrypt data below

:::info
On the next nilQL release, base64 ops will be handled in the library itself, hence this example should be edited at that time
:::

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
                # As mentioned in the INFO warning box
                # encoded_share = base64.b64encode(encrypted_shares[i]).decode('utf-8')
                encoded_shares.append(encoded_share[i])

            return encoded_shares
        except Exception as e:
            raise Exception(f"Encryption failed: {str(e)}")

    def decrypt_password(self, encoded_shares: List[str]) -> str:
        """Decrypt password from shares."""
        try:
            decoded_shares = []
            for share in encoded_shares:
                # As mentioned in the INFO warning box
                # decoded_share = base64.b64decode(share)
                decoded_shares.append(share)

            return nilql.decrypt(self.secret_key, decoded_shares)
        except Exception as e:
            raise Exception(f"Decryption failed: {str(e)}")

```

</TabItem> 
<TabItem value="typescript" label="TypeScript">

```TypeScript
// encryption.ts
import { nilql } from '@nillion/nilql';

interface EncryptionConfig {
  nodes: number;
  operations?: {
    store?: boolean;
    match?: boolean;
    sum?: boolean;
  };
}

/**
 * Creates an encryption service for handling credential encryption/decryption
 */
export const createEncryptionService = async (config: EncryptionConfig) => {
  // Create cluster config with specified number of nodes
  const cluster = {
    nodes: Array(config.nodes).fill({})
  };

  // Initialize secret key with cluster config and operations
  const secretKey = await nilql.secretKey(cluster, {
    store: true,
    ...config.operations
  });

  /**
   * Encrypt a password into shares
   */
  const encryptPassword = async (password: string): Promise<string[]> => {
    try {
      const shares = await nilql.encrypt(secretKey, password);
      if (!Array.isArray(shares)) {
        throw new Error('Unexpected encryption result');
      }
      return shares as string[];
    } catch (error) {
      throw new Error(
        `Encryption failed: ${error instanceof Error ? error.message : 'Unknown error'}`
      );
    }
  };

  /**
   * Decrypt password from shares
   */
  const decryptPassword = async (shares: string[]): Promise<string> => {
    try {
      if (shares.length !== config.nodes) {
        throw new Error(`Expected ${config.nodes} shares but got ${shares.length}`);
      }
      const decrypted = await nilql.decrypt(secretKey, shares);
      if (typeof decrypted !== 'string') {
        throw new Error('Unexpected decryption result');
      }
      return decrypted;
    } catch (error) {
      throw new Error(
        `Decryption failed: ${error instanceof Error ? error.message : 'Unknown error'}`
      );
    }
  };

  return {
    encryptPassword,
    decryptPassword
  };
};
```

</TabItem>

</Tabs>
