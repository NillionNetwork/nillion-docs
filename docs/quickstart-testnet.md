import JsHeaders from './\_js-headers-proxy.mdx';
import IframeVideo from '@site/src/components/IframeVideo/index';
import {ReactTestnetEnv} from '@site/src/components/Networks/TestnetEnv';

# Deploying to the Testnet

Deploying your application to the testnet involves several steps

- Ensure you have a Nillion (Keplr Wallet) address
- Interact with the Testnet
- Commit your project to Github
- Host your blind app with Vercel

# Create a Nillion Wallet

Follow the [Creating a Nillion Wallet guide](/guide-nillion-wallet) to create your Nillion wallet. Note that when you create your wallet, you need to use the "Sign up with Google" option rather than "Use recovery phrase" option because Keplr only exposes the private key of wallets created when you "Sign up with Google." This may be useful for development debugging.

Here's how to get the `NILCHAIN_PRIVATE_KEY` value from a Nillion wallet created with a Google account:

<IframeVideo videoSrc="https://www.loom.com/embed/0f9949a990ee497195a39e02b280f2c7?sid=f53b62d2-6820-4780-98b1-5b3049b00709"/>

### Fund the Nillion Wallet address that corresponds to your private key

Follow [the Nillion Faucet Guide](/guide-testnet-faucet) to learn how to get Testnet NIL to fund the Nillion wallet address that corresponds to your private key. This way your app can pay for operations.

Test the configuration locally against your blind app to make sure the full blind computation flow is working as expected.

# Interacting with the Testnet

In the CNA boilerplate, we have created tabs to switch between the `devnet` and `testnet`. Switch to the `devnet` tab.

0. Ensure your Nillion account is working with Keplr + funded testnet NIL.
1. In your `LoginButton.tsx`, change the network settings

```ts
    ...
    const NETWORK: NetworkType = "testnet"; // devnet or testnet  <-- Change here.

    ...
    const client = await createClient({
        network: NETWORK,
        seed: "example-user-seed",
        keplr: window.keplr,
    });
    ...
```

2. Try to `Store Value` and wait for the Keplr Popup to occur.
3. This should then allow you pay and interact with the Testnet for the other modules.

## Store Nada Programs on the Testnet

Need to store your Nada programs on the Testnet? Check out our [Nada Program Uploader](https://nada-program-uploader.vercel.app/), a simple UI for uploading your program and obtaining its program ID. Just connect your wallet, upload your program, and get the program ID for your testnet deployment.

## Commit your project to Github

Commit your repo to Github and tag your Github repo with `nillion-cna` so the rest of the Nillion community can find it.

## Host your blind app with Vercel

1. Follow the [Vercel Import Guide](https://vercel.com/docs/getting-started-with-vercel/import) to import your Github project to Vercel + deploy

2. Test it with the local `devnet` and with Keplr Wallet when you toggle your network to `testnet`.

3. Share your live link on [Nillion's Github Discussions Show and Tell Forum](https://github.com/orgs/NillionNetwork/discussions/categories/show-and-tell)

## Keep Exploring

🥳 Congratulations on completing the Nillion Developer Quickstart and deploying your blind app to the Nillion Testnet. Keep exploring and building by

- reading about [Nillion concepts](/concepts) and the [Nada Language](nada-lang)
- learning how to interact with and manage programs, secrets, and permissions on the Nillion Network with [Nillion Client](/js-client)
- challenging yourself to create a page that solves the [Millionaires Problem](/multi-party-computation#applied-mpc)
