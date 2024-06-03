import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import SupportedWallets from './\_testnet_supported_wallets.mdx';
import BlockExplorers from './\_testnet_block_explorers.mdx';

# Nillion Network

![Nillion's dual network architecture diagram](/img/dual-architecture.png)

## Dual Network Architecture

The Nillion Network has a Dual Network Architecture: **the Coordination Layer and the Petnet.**

[NilChain](https://github.com/NillionNetwork/nilchain) is the Coordination Layer for the Nillion Network. It coordinates payments for blind computations and storage operations performed on the network.

The Petnet harnesses privacy-enhancing technologies (PETs) including [Nillion's MPC Protocol](/nillions-mpc-protocol) to secure distributed secrets and perform blind computation. It operates without a global shared state or consensus on order, focusing instead on decentralizing trust for high value data across the network using clusters of nodes.

## Testnet

### Nillion Testnet (Coordination Layer)

The Nillion Testnet is live! Follow our [Testnet Guides](/testnet-guides) to create a wallet connected to the Nillion Testnet, use the Nillion Testnet Faucet, and send Testnet NIL tokens.

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

        Nillion Testnet chain info

        ```json reference showGithubLink
        https://github.com/chainapsis/keplr-chain-registry/blob/main/cosmos/nillion-chain-testnet.json

        ```

        </TabItem>
    </Tabs>

### 🔜 Petnet Testnet

The Petnet Testnet is in private beta. Today builders can use the [Nillion SDK](/nillion-sdk-and-tools) to connect their blind applications to a local [nillion-devnet](/nillion-devnet). Upon Petnet Testnet integration with the Coordination Layer in [Phase 2 of Nillion Network deployment](https://nillion.com/news/589/), builders will be able to connect their blind applications to the Nillion Network Testnet, making them accessible to the whole community.
