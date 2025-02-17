import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import SupportedWallets from './\_testnet_supported_wallets.mdx';
import BlockExplorers from './\_testnet_block_explorers.mdx';

# Network Configuration

## nilChain

Configuration information for connecting to [nilChain](https://github.com/NillionNetwork/nilchain), Nillion's Coordination Layer.

<Tabs>
    <TabItem value="nilchain-testnet" label="nilChain Testnet" default>
    ```
    nilChain Chain ID: nillion-chain-testnet-1
    nilChain JSON RPC URL: http://rpc.testnet.nilchain-rpc-proxy.nilogy.xyz
    nilChain REST API: https://api.testnet.nilchain-rpc-proxy.nilogy.xyz
    nilChain GRPC URL: https://testnet-nillion-grpc.lavenderfive.com
    ```
    </TabItem>

    <TabItem value="nilchain-mainnet" label="nilChain Mainnet" default>
       ```
       Coming 🔜
       ```
    </TabItem>

</Tabs>
<br/>

---

## Petnet

### nilDB Nodes

[SecretVault](/build/secret-vault) and [SecretDataAnalytics](/build/secret-data-analytics) connect to nilDB nodes to enable storing and querying encrypted data.

<Tabs>
    <TabItem value="nilDB-demo" label="nilDB Testnet" default>

    #### Demo node 1: [nildb-zy8u](https://nildb-zy8u.nillion.network/api/v1/openapi/docs/)

    ```
    nilDB Node URL: https://nildb-zy8u.nillion.network
    nilDB Node DID: did:nil:testnet:nillion1fnhettvcrsfu8zkd5zms4d820l0ct226c3zy8u
    nilDB Node Public Key: 037a2183c3f786a3505470aa4169f50f1d267b816dc596b26405a539f2aa579469
    API docs: https://nildb-zy8u.nillion.network/api/v1/openapi/docs/
    ```

    #### Demo node 2: [nildb-rl5g](https://nildb-rl5g.nillion.network/api/v1/openapi/docs/)

    ```
    nilDB Node URL: https://nildb-rl5g.nillion.network
    nilDB Node DID: did:nil:testnet:nillion14x47xx85de0rg9dqunsdxg8jh82nvkax3jrl5g
    nilDB Node Public Key: 037782d481c4f119c88e5fc2cd17b3ca13ea7383992d09857e9ee43b51cd7f5a18
    API docs: https://nildb-rl5g.nillion.network/api/v1/openapi/docs/
    ```

    #### Demo node 3: [nildb-lpjp](https://nildb-lpjp.nillion.network/api/v1/openapi/docs/)

    ```
    nilDB Node URL: https://nildb-lpjp.nillion.network
    nilDB Node DID: did:nil:testnet:nillion167pglv9k7m4gj05rwj520a46tulkff332vlpjp
    nilDB Node Public Key: 03fda649d577a9a28d6486f9dcaa839a4719b99364348e2815280f74df4ec62894
    API docs: https://nildb-lpjp.nillion.network/api/v1/openapi/docs/
    ```

    </TabItem>

    <TabItem value="nilDB-mainnet" label="nilDB Mainnet" default>
       ```
       Coming 🔜
       ```
    </TabItem>

</Tabs>
<br/>

---

### nilAI Nodes

[SecretLLM](/build/secretLLM/overview) connnects to a nilAI node to privately run AI models within a TEE.

<Tabs>
    <TabItem value="nilAI-testnet" label="nilAI Testnet" default>
       ```
       nilAI Node URL: https://nilai-a779.nillion.network
       API docs: https://nilai-a779.nillion.network/docs
       ```
    </TabItem>

    <TabItem value="nilAI-mainnet" label="nilAI Mainnet" default>
        ```
       Coming 🔜
        ```
    </TabItem>

</Tabs>
<br/>

---

### nilVM Nodes

[SecretSigner](/build/secretSigner/overview) connects to nilVM nodes to sign messages with stored private keys.

<Tabs>
    <TabItem value="nilVM-testnet" label="nilVM Testnet" default>
    ```
    # Bootnode Multi Address
    nilVM GRPC Endpoint: https://node-1.nilvm-testnet-1.nillion-network.testnet.nillion.network:14311
    ```
    </TabItem>

    <TabItem value="nilVM-mainnet" label="nilVM Mainnet">
        ```
       Coming 🔜
       ```
    </TabItem>

    <TabItem value="nilVM-photon" label="🌅 nilVM Photon Testnets (sunsetting soon)">
       :::warning

       The original nilVM Photon testnet networks, Photon1 and Photon2, are being sunset. Migrate all blind apps to the latest nilVM Testnet by April 11, 2025.
       :::

        #### Photon2 Testnet

        ```
        Cluster ID: [no longer needed]
        Bootnode Multi Address: https://node-1.photon2.nillion-network.nilogy.xyz:14311
        Bootnode Websocket: [no longer needed]
        ```

        #### Photon1 Testnet

        ```
        Cluster ID: b13880d3-dde8-4a75-a171-8a1a9d985e6c
        Bootnode Multi Address: /dns/node-1.testnet-photon.nillion-network.nilogy.xyz/tcp/14111/p2p/12D3KooWCfFYAb77NCjEk711e9BVe2E6mrasPZTtAjJAPtVAdbye
        Bootnode Websocket: /dns/node-1.testnet-photon.nillion-network.nilogy.xyz/tcp/14211/wss/p2p/12D3KooWCfFYAb77NCjEk711e9BVe2E6mrasPZTtAjJAPtVAdbye
        ```


    </TabItem>

</Tabs>
