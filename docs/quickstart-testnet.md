import JsHeaders from './\_js-headers-proxy.mdx';

# Deploy your blind app to the Nillion Testnet

Your blind app is currently running locally against the nillion-devnet. Let's configure environment variables to point at the Nillion Testnet. That way anyone can play with your blind app once it's deployed.

## Update your .env file and test locally

Update your .env values to point at the Nillion Testnet

```
# testnet .env file

REACT_APP_NILLION_CLUSTER_ID=3272dd62-b126-466e-92f2-69fcc2c62ab6
REACT_APP_NILLION_BOOTNODE_WEBSOCKET=/dns/node-1.testnet-nucleus.nillion-network.nilogy.xyz/tcp/14211/wss/p2p/12D3KooWFH5doiPHBJa8cgx7B2zzD7z7DbyKzRJPmsTZFHFT5zyc
REACT_APP_NILLION_NILCHAIN_JSON_RPC=http://65.109.222.111:26657
REACT_APP_NILLION_NILCHAIN_REST_API=http://65.109.222.111:26657
REACT_APP_NILLION_NILCHAIN_CHAIN_ID=nillion-chain-testnet-1
REACT_APP_API_BASE_PATH=/nilchain-proxy
REACT_APP_NILLION_NILCHAIN_PRIVATE_KEY=YOUR-NIL-FUNDED-PRIVATE-KEY
```

The `REACT_APP_NILLION_NILCHAIN_PRIVATE_KEY` private key value above should correspond to an address you've funded with Testnet NIL - [check out the Nillion Faucet Guide](/guide-testnet-faucet) to learn how to get Testnet NIL.

Test the configuration locally against your blind app to make sure the full blind computation flow is working as expected.

## Set Headers and set up proxy for nilchain

<JsHeaders/>

## Commit your project to Github

Commit your repo to Github and tag your Github repo with `nillion-nada` so the rest of the Nillion community can find it.

## Host your blind app with Vercel

1. Follow the https://vercel.com/docs/getting-started-with-vercel/import guide to import your Github project to Vercel

2. Follow the https://vercel.com/docs/projects/environment-variables guide to add all Testnet environment variables

3. Set up the vercel.json file with headers and proxy rewrites

```json reference showGithubLink
https://github.com/NillionNetwork/cra-nillion/blob/main/vercel.json
```

4. Share your live link on [Nillion's Github Discussions Show and Tell Forum](https://github.com/orgs/NillionNetwork/discussions/categories/show-and-tell)

## Keep Exploring

🥳 Congratulations on completing the Nillion Developer Quickstart and deploying your blind app to the Nillion testnet. Keep exploring and building by

- reading about [Nillion concepts](/concepts) and the [Nada Language](nada-lang)
- learning how to interact with and manage programs, secrets, and permissions on the Nillion Network with [Nillion Client](/js-client)
- challenging yourself to create a page that solves the [millionaires problem](/multi-party-computation#classic-scenario-the-millionaires-problem)