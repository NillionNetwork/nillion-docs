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
    nilChain Chain ID: nillion-1
    nilChain JSON RPC URL: http://nilchain-rpc-4f13.nillion.network
    nilChain REST API: https://nilchain-api-4f13.nillion.network
    nilChain GRPC URL: https://nillion-grpc.lavenderfive.com
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

    #### Demo node 1: [nildb-nx8v](https://nildb-nx8v.nillion.network/api/v1/openapi/docs/)

    ```
    URL: https://nildb-nx8v.nillion.network
    DID: did:nil:testnet:nillion1qfrl8nje3nvwh6cryj63mz2y6gsdptvn07nx8v
    Public Key: 034a2df3bafaca2aa0b70353aa2f05ad129096b60c8a305d115bf605d57bc2588a
    API docs: https://nildb-nx8v.nillion.network/api/v1/openapi/docs/
    ```

    #### Demo node 2: [nildb-p3mx](https://nildb-p3mx.nillion.network/api/v1/openapi/docs/)

    ```
    URL: https://nildb-p3mx.nillion.network
    DID: did:nil:testnet:nillion1uak7fgsp69kzfhdd6lfqv69fnzh3lprg2mp3mx
    Public Key: 03d088a7f2c8f2a6e2aa788265c87e22d1501dd1210fa149ff600ac264ada5eb42
    API docs: https://nildb-zy8u.nillion.network/api/v1/openapi/docs/
    ```

    #### Demo node 3: [nildb-rugk](https://nildb-rugk.nillion.network/api/v1/openapi/docs/)

    ```
    URL: https://nildb-rugk.nillion.network
    DID: did:nil:testnet:nillion1kfremrp2mryxrynx66etjl8s7wazxc3rssrugk
    Public Key: 02c4a5c6135098dd7ac1186c13d4de466be85f85efc6961e75abc31e4fdac41528
    API docs: https://nildb-rugk.nillion.network/api/v1/openapi/docs/
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
        # Bootnode Multi Address
        nilVM GRPC Endpoint: https://nilvm-c930.nillion.network:14311
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
