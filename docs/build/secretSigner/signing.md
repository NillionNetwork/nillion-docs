import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Sign a Message

After [storing a private key in Nillion](/build/secretSigner/store-key), anyone with permissions can use SecretSigner to sign messages or transactions with it. During signing:

- The message to be signed and key's store id are provided
- The message is hashed before being sent to the network
- SecretSigner creates an ECDSA signature using the stored key shares
- The signature is returned for use with other applications

When signing a message, only the message hash is sent to the network - the original message stays private.

## Usage

<Tabs>
    <TabItem value="python" label="Python" default>
        ### Python Client: Sign a Message
        <Tabs>
            <TabItem value="store" label="signWithStoredPrivateKey.py" default>
                ```python reference showGithubLink
                https://github.com/NillionNetwork/blind-module-examples/blob/main/nilvm/secretsigner-python/signWithStoredPrivateKey.py
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
        ### TypeScript Client: Sign a Message
        <Tabs>
            <TabItem value="store=-js" label="signWithStoredPrivateKey.js" default>
                ```javascript reference showGithubLink
                https://github.com/NillionNetwork/blind-module-examples/blob/main/nilvm/secretsigner-nodejs/signWithStoredPrivateKey.js
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

## Signature Verification

Anyone can verify the signature using the same message hash and the public key that corresponds to the private key stored in Nillion. During verification:

- Use the signature (r, s values) returned from SecretSigner
- Hash the message using SHA-256
- Verify using any standard ECDSA verification library

Since SecretSigner returns standard ECDSA signatures, verification works just like it would for any other ECDSA signature.
