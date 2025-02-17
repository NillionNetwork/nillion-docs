import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Store a Private Key

The first step in using SecretSigner is storing a private key in Nillion. During storage:

- The private key is automatically split into shares and distributed across nilVM nodes
- Permissions specify which Nillion users can use this key with SecretSigner
- Each stored key receives a unique identifier (the store id) for future reference

When storing the key, compute access is granted to specific Nillion users, allowing them to use the key with SecretSigner's signing program.

## Usage

<Tabs>
    <TabItem value="python" label="Python" default>
        ### Python Client: Store a Private Key
        <Tabs>
            <TabItem value="store" label="storePrivateKey.py" default>
                ```python reference showGithubLink
                https://github.com/NillionNetwork/blind-module-examples/blob/main/nilvm/secretsigner-python/storePrivateKey.py
                ```
            </TabItem>

            <TabItem value="config" label="nillion_config.py">
                ```python reference showGithubLink
                https://github.com/NillionNetwork/blind-module-examples/blob/main/nilvm/secretsigner-python/nillion_config.py
                ```

            </TabItem>

            <TabItem value="constants" label="nillion_constants.py">
                ```python reference showGithubLink
                https://github.com/NillionNetwork/blind-module-examples/blob/main/nilvm/secretsigner-python/nillion_signature_constants.py
                ```

            </TabItem>
            <TabItem value="env-py" label=".env">
                ```text reference showGithubLink
                https://github.com/NillionNetwork/blind-module-examples/blob/main/nilvm/secretsigner-python/.env.example
                ```
            </TabItem>

        </Tabs>

    </TabItem>

    <TabItem value="js" label="Node.js">
        ### TypeScript Client: Store a Private Key
        <Tabs>
            <TabItem value="store=-js" label="storePrivateKey.js" default>
                ```javascript reference showGithubLink
                https://github.com/NillionNetwork/blind-module-examples/blob/main/nilvm/secretsigner-nodejs/storePrivateKey.js
                ```
            </TabItem>

            <TabItem value="config-js" label="nillionNetworkConfig.js">
                ```javascript reference showGithubLink
                https://github.com/NillionNetwork/blind-module-examples/blob/main/nilvm/secretsigner-nodejs/nillionNetworkConfig.js
                ```
            </TabItem>

            <TabItem value="constants-js" label="nillionSignatureConstants.js">
                ```javascript reference showGithubLink
                https://github.com/NillionNetwork/blind-module-examples/blob/main/nilvm/secretsigner-nodejs/nillionSignatureConstants.js
                ```
            </TabItem>
            <TabItem value="env-js" label=".env">
                ```text reference showGithubLink
                https://github.com/NillionNetwork/blind-module-examples/blob/main/nilvm/secretsigner-nodejs/.env.example
                ```
            </TabItem>
        </Tabs>
    </TabItem>

</Tabs>
