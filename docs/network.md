import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import SupportedWallets from './\_testnet_supported_wallets.mdx';
import BlockExplorers from './\_testnet_block_explorers.mdx';

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

[Private Storage](/build/secret-vault/about) solutions leverage a decentralized cluster of nilDB nodes. The [secretvaults SDK](/build/secretvault) can connect to a cluster of one or more nodes, making it possible to store and query both plaintext and encrypted data stored in the cluster.

<Tabs>
    <TabItem value="nilDB-update" label="nilDB Testnet" default>
    ### Testnet

    ```
    NILCHAIN_URL=http://rpc.testnet.nilchain-rpc-proxy.nilogy.xyz
    NILAUTH_URL=https://nilauth.sandbox.app-cluster.sandbox.nilogy.xyz
    NILAUTH_PUBLIC_KEY=03e3ba1eb887b4e972fbf395d479ff6cdb2cec91ba477ffc287b2b9cb5ec2161aa
    NILDB_NODE_1=https://nildb-stg-n1.nillion.network
    NILDB_NODE_2=https://nildb-stg-n2.nillion.network
    NILDB_NODE_3=https://nildb-stg-n3.nillion.network
    ```

    </TabItem>
    <TabItem value="nilDB-demo" label="nilDB Alpha">

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
    API docs: https://nildb-zy8u.nillion.network/api/v1/openapi/docs/
    ```

    #### Node 3: [nildb-rugk](https://nildb-rugk.nillion.network/api/v1/openapi/docs/)

    ```
    URL: https://nildb-rugk.nillion.network
    DID: did:nil:testnet:nillion1kfremrp2mryxrynx66etjl8s7wazxc3rssrugk
    Public Key: 02c4a5c6135098dd7ac1186c13d4de466be85f85efc6961e75abc31e4fdac41528
    API docs: https://nildb-rugk.nillion.network/api/v1/openapi/docs/
    ```

    </TabItem>

</Tabs>
<br/>

---

### nilAI Nodes

[Private LLMs](/build/secretLLM/overview) can be leveraged by connecting to a nilAI node, which runs AI models within a TEE.

<Tabs>
    <TabItem value="nilAI-testnet" label="nilAI Alpha" default>
       ```
       nilAI Node URL: https://nilai-a779.nillion.network
       API docs: https://nilai-a779.nillion.network/docs
       ```
    </TabItem>

</Tabs>
<br/>
