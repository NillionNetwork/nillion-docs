import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import SupportedWallets from './\_testnet_supported_wallets.mdx';
import BlockExplorers from './\_testnet_block_explorers.mdx';

# Nillion Network

The **Nillion Network** allows developers to build applications and services that leverage privacy-enhancing technologies (PETs) such as secure multi-party computation (MPC) to perform blind computations over private user data (without requiring that data to be revealed to the network or to other users).

## Dual Network Architecture

![Nillion's dual network architecture diagram](/img/dual-architecture.png)

The Nillion Network consists of two parallel, interdependent networks: a **Coordination Layer** and an **Orchestration Layer**.

* The **[NilChain](https://github.com/NillionNetwork/nilchain)** network coordinates payments for storage operations and blind computations performed on the network.
* The **Petnet** harnesses PETs such as MPC to protect data at rest and to enable blind computations that can operate on that data.

The Nillion Network operates without a global shared state or consensus on order. Instead, its design is oriented around supporting storage of private high-value data and computation over that data while decentralizing trust among the nodes in the network.

## Live Testnet

Consistent with the dual network architecture described above, the **Nillion Network testnet** (or simply **Nillion testnet**) consists of two interdependent testnet instances: the **NilChain testnet** and the **Petnet testnet**.

### NilChain Testnet

The NilChain testnet is live! Follow our [Testnet Guides](/testnet-guides) to create a wallet connected to the Nillion testnet, use the testnet faucet, and send NIL testnet tokens.

    <Tabs>
        <TabItem value="wallets" label="Supported wallets" default>

            <SupportedWallets/>

            Wallet Guide: [Creating a Nillion Wallet](guide-testnet-connect)

        </TabItem>
        <TabItem value="explorers" label="Block explorers">

            <BlockExplorers/>

            Transaction Guide: [Sending NIL and Using a Block Explorer](/guide-testnet-tx#3-look-for-the-transaction-on-a-nillion-block-explorer)

        </TabItem>

        <TabItem value="chaininfo" label="chain-info.json" default>

        NilChain testnet chain info:

        ```json reference showGithubLink
        https://github.com/chainapsis/keplr-chain-registry/blob/main/cosmos/nillion-chain-testnet.json

        ```

        </TabItem>
    </Tabs>

### Petnet Testnet

The Petnet testnet is also live! Builders can now [build their blind applications](/quickstart) and then [connect them to the Petnet testnet](/network-configuration) to make them accessible to the whole community.

## Local Devnet

Builders that prefer to work locally can use the [Nillion SDK](/nillion-sdk-and-tools) to connect their blind applications to a local instance of the [nillion-devnet](/nillion-devnet). Builders have the option to connect these applications to the Petnet testnet once they are ready.
