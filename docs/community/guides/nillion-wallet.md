import IframeVideo from '@site/src/components/IframeVideo/index';
import SupportedWallets from '../../blind-computer/\_testnet_supported_wallets.mdx';

# Creating a Nillion Wallet (nilChain/Cosmos)

:::info
Nillion is migrating to Ethereum! **For new users, we recommend [setting up an Ethereum-compatible wallet and connecting to Blacklight](/blacklight/tools/wallet-setup), Nillion's Ethereum L2 network.**

This guide is for creating a nilChain (Cosmos) wallet using Keplr, which is still supported but primarily for legacy use cases.
:::

This guide walks you through creating a nilChain (Cosmos) wallet using Keplr to connect to the nilChain network and access your NIL tokens.

<iframe
  width='100%'
  height='500'
  src='https://www.youtube.com/embed/9IOa4BZRmR4'
  title='YouTube video player'
  frameborder='0'
  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
  allowfullscreen
></iframe>
## Supported Wallets

<SupportedWallets/>

## How to Create a nilChain Wallet

This guide walks you through downloading Keplr, setting up your wallet, and adding the nilChain (Cosmos) network.

### 1. Download Keplr

Visit the [Keplr download page](https://www.keplr.app/download) and select your browser to download the Keplr browser extension. We recommend Chrome.

![Download Keplr](/img/download-wallet.png)

### 2. Install the Keplr browser extension

Click "Add to Chrome" to install the Keplr Chrome extension.

![Add extension](/img/add-extension.png)

### 3. Create a new wallet

After Keplr is installed, it will pop open in a new tab. Click "Create a new wallet."

![Create wallet](/img/create-wallet.png)

### 4. Create a recovery phrase

:::info
**If you are a developer, make sure to use the "Sign-up with Google" registration.** This is the only Keplr option that lets you "View private key" for the new wallet, which you will need to do during development.
:::

Create a wallet using one of the options:

![Create a wallet with a new recovery phrase](/img/recovery-phrase.png)

### 5. Secure your recovery phrase

Follow the steps to show your recovery phrase. Make sure to store your secret recovery phrase securely.
![Secure phrase](/img/secure-phrase.png)

### 6. Set a wallet password

Verify your recovery phrase by filling in ordered words. Then name your wallet and set a password. You'll use this password to log into Keplr on this device. To import this wallet for use on another device, you'll need the recovery phrase.
![Verify](/img/verify-wallet.png)

### 7. Add nilChain Network

:::info
When adding nilChain to Keplr, you'll see "Nillion Testnet" rather than Mainnet. This is expected. The same wallet address you create now will be usable when Mainnet launches.
:::

    1. Toggle open the "Extensions" button in your browser and pin the Keplr extension so that the browser has access to it.

    2. Open the [Keplr Chains page](https://chains.keplr.app/) and search for "Nillion Testnet" Click "Add to Keplr."

    3. "Approve" adding the Nillion within Keplr.

    4. In the Keplr extension, click the hamburger menu and click "Manage Chain Visibility." This opens the Select Chains page in a new tab. Search for "NIL" and click the checkmark to make the Nillion Network visible from within Keplr. Click "Save."

    5. Verify setup by toggling Keplr back open. Scroll down to the bottom of the "Home" tab, where you should see a new NIL token balance of 0 NIL.

![Keplr Config](/img/keplr_config.png)

### 8. Find your new nilChain wallet address

    1. From your Keplr extension, click the "Copy address" button.

    2. Now you'll see addresses for all enabled chains. Filter for "NIL"

    3. Click to copy your nilChain wallet address to your clipboard. Your nilChain wallet address is safe to share with others; they'll need your wallet address to send you NIL.

<IframeVideo videoSrc="https://www.loom.com/embed/3b243bee264d4ca992381ef131e5a625?sid=17c8f87a-a468-41e3-88f1-7ca287063d29"/>
