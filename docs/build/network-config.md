import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import SupportedWallets from '../\_testnet_supported_wallets.mdx';
import BlockExplorers from '../\_testnet_block_explorers.mdx';

# Network Configuration

## nilChain

Configuration information for connecting to [nilChain](https://github.com/NillionNetwork/nilchain), Nillion's coordination layer.

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
    nilChain JSON RPC URL: http://nilchain-rpc.nillion.network
    nilChain REST API: https://nilchain-api.nillion.network
    nilChain GRPC URL: https://nillion-grpc.lavenderfive.com
    ```
    </TabItem>

</Tabs>
<br/>

---

## Petnet

### nilDB Nodes

[Private Storage](/build/private-storage/overview) solutions leverage a decentralized cluster of nilDB nodes. The [secretvaults SDK](/build/private-storage/secretvaults) can connect to a cluster of one or more nodes, making it possible to store and query both plaintext and encrypted data stored in the cluster.

<Tabs>
    <TabItem value="nilDB-testnet" label="nilDB Testnet">

    ```
    NILCHAIN_URL=http://rpc.testnet.nilchain-rpc-proxy.nilogy.xyz
    NILAUTH_URL=https://nilauth.sandbox.app-cluster.sandbox.nilogy.xyz
    NILAUTH_PUBLIC_KEY=03e3ba1eb887b4e972fbf395d479ff6cdb2cec91ba477ffc287b2b9cb5ec2161aa
    NILDB_NODE_1=https://nildb-stg-n1.nillion.network
    NILDB_NODE_2=https://nildb-stg-n2.nillion.network
    NILDB_NODE_3=https://nildb-stg-n3.nillion.network
    ```

    </TabItem>
    <TabItem value="nilDB-alpha" label="nilDB Alpha">

    #### Node 1: [nildb-nx8v](https://nildb-nx8v.nillion.network/api/v1/openapi/docs/)

    ```
    URL: https://nildb-nx8v.nillion.network
    DID: did:nil:testnet:nillion1qfrl8nje3nvwh6cryj63mz2y6gsdptvn07nx8v
    Public Key: 034a2df3bafaca2aa0b70353aa2f05ad129096b60c8a305d115bf605d57bc2588a
    API docs: https://nildb-nx8v.nillion.network/api/v1/openapi/docs/
    ```

    #### Node 2: [nildb-p3mx](https://nildb-p3mx.nillion.network/api/v1/openapi/docs/)

    ```
    URL: https://nildb-p3mx.nillion.network
    DID: did:nil:testnet:nillion1uak7fgsp69kzfhdd6lfqv69fnzh3lprg2mp3mx
    Public Key: 03d088a7f2c8f2a6e2aa788265c87e22d1501dd1210fa149ff600ac264ada5eb42
    API docs: https://nildb-p3mx.nillion.network/api/v1/openapi/docs/
    ```

    #### Node 3: [nildb-rugk](https://nildb-rugk.nillion.network/api/v1/openapi/docs/)

    ```
    URL: https://nildb-rugk.nillion.network
    DID: did:nil:testnet:nillion1kfremrp2mryxrynx66etjl8s7wazxc3rssrugk
    Public Key: 02c4a5c6135098dd7ac1186c13d4de466be85f85efc6961e75abc31e4fdac41528
    API docs: https://nildb-rugk.nillion.network/api/v1/openapi/docs/
    ```

    </TabItem>

    <TabItem value="nilDB-mainnet" label="nilDB Mainnet" default>

    #### [nildb-5ab1](https://nildb-5ab1.nillion.network/)

    ```
    URL: https://nildb-5ab1.nillion.network
    Public Key: 031f95488b7c389c963548e57b9871a22477fc475adbbd8336a70e1715a7245ab1
    ```

    #### [nildb-906d](https://nildb-906d.kjnodes.com)

    ```
    URL: https://nildb-906d.kjnodes.com
    Public Key: 031bf30c915e24478e6522395404bf1123982f8224c15cf2cd4ec0f82ba4a0906d
    ```

    #### [nildb-8001](https://nildb-8001.cloudician.xyz)

    ```
    URL: https://nildb-8001.cloudician.xyz
    Public Key: 03e238bcededae0b203b75edff7539be77cc0950b10a24e95cc0baae8f43638001
    ```

    #### [nildb-ddb5](https://nildb-ddb5.imperator.co)

    ```
    URL: https://nildb-ddb5.imperator.co
    Public Key: 032b3ac6a1bf2219a60845d10b506f5cb7a8e5f506a5beba9a64a3fa3ff4fdddb5
    ```

    #### [nildb-f496](https://nildb-f496.pairpointweb3.io)

    ```
    URL: https://nildb-f496.pairpointweb3.io
    Public Key: 02955a7d9f47f463540866daec7d0cd8774a827bb4f8ac68e6d266066b4335f496
    ```

    #### [nildb-f375](https://nildb-f375.stcbahrain.net)

    ```
    URL: https://nildb-f375.stcbahrain.net
    API docs: https://nildb-f375.stcbahrain.net/api/v1/openapi/docs/
    ```

    #### [nildb-2140](https://nildb-2140.staking.telekom-mms.com)

    ```
    URL: https://nildb-2140.staking.telekom-mms.com
    API docs: https://nildb-2140.staking.telekom-mms.com/api/v1/openapi/docs/
    ```

    </TabItem>

</Tabs>
<br/>

---

### nilAI Nodes

[Private LLMs](/build/private-llms/overview) can be leveraged by connecting to a nilAI node, which runs AI models within a TEE.

<Tabs>
    <TabItem value="nilAI-testnet" label="nilAI Alpha" default>
       ```
       nilAI Node URL: https://nilai-a779.nillion.network
       API docs: https://nilai-a779.nillion.network/docs
       ```
    </TabItem>

</Tabs>
<br/>
