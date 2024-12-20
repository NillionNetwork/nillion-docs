import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import SupportedWallets from './\_testnet_supported_wallets.mdx';
import BlockExplorers from './\_testnet_block_explorers.mdx';

# Nillion Network

The **Nillion Network** allows developers to build applications and services that leverage privacy-enhancing technologies (PETs) such as secure multi-party computation (MPC) to perform blind computations over private user data (without requiring that data to be revealed to the network or to other users).

## Network Architecture

![Nillion's network architecture diagram](/img/network_diagram.png)

The Nillion Blind Computer is a distributed network tailor-made to make Blind Computation possible. The network is split into two parts: **The Petnet** (Privacy Enhancing Technology Network) and **The Coordination Layer**.

### The Petnet

The Petnet is made up of separate Clusters of nodes that offer different technologies and products, with the goal of allowing anyone to come and spin up their own Cluster. App developers can then choose from existing Clusters or create their own to tailor their specific infrastructure and security needs. Nodes looking to form a new Cluster for general use can compete for user adoption across many axes including number of nodes, price, reputation, performance, cryptoeconomic security, jurisdiction, and hardware-based security. Developers then have the power to pick their own point on the tradeoff space and decide what matters to them – keeping them in control.

### The Coordination Layer

The Coordination Layer is a blockchain that manages shared resources for the whole Nillion Network. It’s built on top of the Cosmos SDK stack and such as rewards, cryptoeconomic stake, and governance, as well as enabling inter-cluster coordination. Since it’s intended purely for coordination purposes, the chain doesn’t have an open execution environment for running smart contracts.

## Live Testnet

Consistent with the dual network architecture described above, the **Nillion Network testnet** (or simply **Nillion testnet**) consists of two interdependent testnet instances: the **nilChain testnet** and the **Petnet testnet**.

### nilChain Testnet

The nilChain testnet is live! Follow our [Testnet Guides](/testnet-guides) to create a wallet connected to the Nillion testnet, use the testnet faucet, and send NIL testnet tokens.

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

        nilChain testnet chain info:

        ```json reference showGithubLink
        https://github.com/chainapsis/keplr-chain-registry/blob/main/cosmos/nillion-chain-testnet.json

        ```

        </TabItem>
    </Tabs>

### Petnet Testnet

The Petnet testnet is also live! Builders can now [build their blind applications](/quickstart) and then [connect them to the Petnet testnet](/network-configuration) to make them accessible to the whole community.

## Local Devnet

Builders that prefer to work locally can use the [Nillion SDK](/nillion-sdk-and-tools) to connect their blind applications to a local instance of the [nillion-devnet](/nillion-devnet). Builders have the option to connect these applications to the Petnet testnet once they are ready.
