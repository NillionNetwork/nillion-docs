import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import SupportedWallets from './\_testnet_supported_wallets.mdx';
import BlockExplorers from './\_testnet_block_explorers.mdx';

# Network Configuration

## nilChain

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

### nilVM Nodes

<Tabs>
    <TabItem value="nilVM-testnet" label="nilVM Testnet" default>
    ```
       nilVM GRPC Endpoint (Bootnode): https://node-1.nilvm-testnet-1.nillion-network.testnet.nillion.network:14311
    ```
    </TabItem>

    <TabItem value="nilVM-mainnet" label="nilVM Mainnet">
        ```
       Coming 🔜
       ```
    </TabItem>

    <TabItem value="nilVM-photon" label="nilVM Photon Testnets (sunset)">
       :::warning

       The original nilVM testnet networks, Photon1 and Photon2, are being sunset. Migrate all blind apps to the latest nilVM Testnet by April 11, 2025.
       :::
    </TabItem>

</Tabs>
<br/>

---

### nilDB Nodes

<Tabs>
    <TabItem value="nilDB-demo" label="nilDB Demo Cluster" default>

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

    <TabItem value="nilDB-testnet" label="nilDB Testnet">
        :::info
       nilDB Testnet node access is gated by nilDB Testnet-specific allowlisted API keys. [Request a Testnet node API key](/build/secretVault-secretDataAnalytics/access) to use nilDB Testnet nodes.
       :::
       <br/>

        #### nilDB Testnet node 1: [nildb-a50d](https://nildb-a50d.nillion.network/api/v1/openapi/docs/)

        ```
        nilDB Node URL: https://nildb-a50d.nillion.network
        nilDB Node DID: did:nil:testnet:nillion15lcjxgafgvs40rypvqu73gfvx6pkx7ugdja50d
        nilDB Node Public Key: 02c2540363772b8ef12f8ea77ddaf71737aa0f46ed4fcf6fe6637a25dad9674c3d
        API docs: https://nildb-a50d.nillion.network/api/v1/openapi/docs/
        ```

        #### nilDB Testnet node 2: [nildb-nildb-dvml](https://nildb-nildb-dvml.nillion.network/api/v1/openapi/docs/)

        ```
        nilDB Node URL: https://nildb-dvml.nillion.network
        nilDB Node DID: did:nil:testnet:nillion1dfh44cs4h2zek5vhzxkfvd9w28s5q5cdepdvml
        nilDB Node Public Key: 0214613f89c4639a6c923509e323fca574629675cab95f39192ed85c18fda6c68f
        API docs: https://nildb-dvml.nillion.network/api/v1/openapi/docs/
        ```

        #### nilDB Testnet node 3: [nildb-nildb-guue](https://nildb-nildb-guue.nillion.network/api/v1/openapi/docs/)

        ```
        nilDB Node URL: https://nildb-guue.nillion.network
        nilDB Node DID: did:nil:testnet:nillion19t0gefm7pr6xjkq2sj40f0rs7wznldgfg4guue
        nilDB Node Public Key: 03eab5c31424b1f95acfabdd8f6cb0a6b042c7dd9de6fb476a64c11a33a3805aea
        API docs: https://nildb-guue.nillion.network/api/v1/openapi/docs/
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

<Tabs>
    <TabItem value="nilAI-testnet" label="nilAI Testnet" default>
         :::info
       nilAI Testnet node access is gated by nilAI Testnet-specific allowlisted API keys. [Apply for API key](/build/secretLLM/access) to use nilAI Testnet nodes.
       :::

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
