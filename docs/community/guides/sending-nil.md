import IframeVideo from '@site/src/components/IframeVideo/index';
import BlockExplorers from '../../blind-computer/\_testnet_block_explorers.mdx';

# Sending NIL Tokens (nilChain/Cosmos)

:::info
Nillion is migrating to Ethereum! **For new users, we recommend [setting up an Ethereum-compatible wallet and connecting to Blacklight](/blacklight/verify/wallet-setup), Nillion's Ethereum L2 network.**

This guide is for sending NIL tokens on nilChain (Cosmos) using Keplr, which is still supported but primarily for legacy use cases. If you need to bridge NIL from nilChain to Blacklight, see the [Bridging to Blacklight](/blacklight/tools/bridging) guide.
:::

Send a transaction on nilChain and find the onchain record of the transaction on a block explorer.

## How to send NIL on nilChain

This guide walks you through how to send NIL tokens from one nilChain wallet to another nilChain wallet and find the transaction on a block explorer.

### 0. Set up a wallet and get NIL

Follow the [Creating a Nillion Wallet (nilChain/Cosmos)](/community/guides/nillion-wallet) guide to set up a connected wallet.

### 1. Open Keplr and check your NIL balance

    1. Open Keplr and find the "Search for asset or chain" search bar on the Home tab.

    2. Type in "NIL" to filter for your available balance of NIL.

    3. Click "NIL" to open the NIL on Nillion Network view.

### 2. Send NIL to another nilChain wallet

    1. Click "Send"

    2. Under "Wallet address" paste in a valid nilChain wallet address - this address should start with `nillion`

    3. Under "Amount" type in the amount of NIL to send or click "Max" to send all your NIL minus the transaction fee (Tx Fee) shown at the bottom of Keplr.

    4. Under "Memo", optionally add a note to be sent with the transaction.

    5. Click "Next."

    6. Confirm the transaction by reviewing details to make sure the recipient's wallet address, amount, and memo are correct.

    7. Click "Approve" to send the transaction, and wait for a success message to appear.

    <IframeVideo videoSrc="https://www.loom.com/embed/bb37a3c363424e4385636a4b9cbf779e?sid=32c65c3e-247f-441a-af95-b879c4dbff1c"/>

### 3. Look for the transaction on a nilChain block explorer

There are multiple nilChain block explorers you can use to see your transaction.

<BlockExplorers/>

Use an explorer to find your transaction:

1. Open a nilChain block explorer and paste your nilChain wallet address into the search bar.

2. Find "Transactions" and click on the latest transaction.

3. Look at the transaction details to see the onchain record of the NIL you just sent.

<IframeVideo videoSrc="https://www.loom.com/embed/6f9023f29ad547f4b3a4f92bc852c11c?sid=cd8061b7-6ccf-4523-b0c9-094193e084d6"/>
