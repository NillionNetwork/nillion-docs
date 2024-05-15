import DocCardList from '@theme/DocCardList';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# JavaScript Client

[@nillion/nillion-client-js-browser](https://www.npmjs.com/package/@nillion/nillion-client-js-browser) is a JavaScript client for building on top of the Nillion Network. It can be used to manage Nada programs, store and retrieve secrets, and run computations.

## Installation

Install the [JavaScript Client](https://www.npmjs.com/package/@nillion/nillion-client-js-browser) package in your browser application.

<Tabs>

  <TabItem value="yarn" label="yarn" default>
```bash
yarn add @nillion/nillion-client-js-browser
```
  </TabItem>

  <TabItem value="npm" label="npm">
```bash
npm i @nillion/nillion-client-js-browser
```
  </TabItem>

  <TabItem value="pnpm" label="pnpm">
```bash
pnpm add @nillion/nillion-client-js-browser
```
  </TabItem>
</Tabs>

## Usage

### Asyncronously Import JavaScript Client

<Tabs>

  <TabItem value="react" label="ReactJS" default>
```js
// create state variable for Nillion JavaScript Client
const [nillion, setNillion] = useState(null);
// run once on mount
useEffect(() => {
    const importNillion = async () => {
        // asyncronously import Nillion JavaScript Client
        const nillionPackage = await import('@nillion/nillion-client-js-browser');
        // set nillion state variable
        setNillion(nillionPackage);
    };
    importNillion();
}, []);

````
  </TabItem>

<TabItem value="vanilla" label="Vanilla JS">
```html
<script type="module">
    import * as nillion from "./node_modules/@nillion/nillion-client-js-browser/nillion_client_js_browser.js";
</script>
````

</TabItem>
</Tabs>

### Import JavaScript Client Types

```js
import type * as NillionTypes from "@nillion/nillion-client-js-browser/nillion_client_js_browser.d.ts";
```

### Set COOP and COEP Headers

The JavaScript Client makes use of browser web-workers. To make your app cross-origin isolated, you'll need to set these headers:

```
Cross-Origin-Embedder-Policy: require-corp
Cross-Origin-Opener-Policy: same-origin
```


<Tabs>

<TabItem value="React" label="ReactJS" default>

Manually configure proxy requests based on the [ReactJS Guide](https://create-react-app.dev/docs/proxying-api-requests-in-development/#configuring-the-proxy-manually)

1. Install `http-proxy-middleware` using npm or Yarn:

    ```bash
    npm install http-proxy-middleware --save
    ```

    ```bash
    yarn add http-proxy-middleware
    ```

2. Create a src/setupProxy.js file and place the following contents in it:

    ```js
    module.exports = function (app) {
        app.use(function (req, res, next) {
            res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
            res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
            next();
        });
    };
    ```

</TabItem>
</Tabs>


For more information, check out
- https://developer.chrome.com/blog/enabling-shared-array-buffer/
- https://web.dev/articles/coop-coep

### Initialize NillionClient with JavaScript Client

<Tabs>

<TabItem value="app" label="App.js" default>
```js
import { useState, useEffect } from 'react';

function App() {
    // state variable for Nillion JavaScript Client Library
    const [nillion, setNillion] = useState(null);
    // state variable for NillionClient
    const [nillionClient, setNillionClient] = useState(null);
  
    // Asyncronously Import JavaScript Client package
    useEffect(() => {
        const importNillion = async () => {
            const nillionPackage = await import('@nillion/nillion-client-js-browser');
            setNillion(nillionPackage);
        };
        importNillion();
    }, []);

    // Initialize NillionClient, connecting to Nillion Network
    useEffect(() => {
        const initializeNillionClient = async () => {
            await nillion.default();
            const node_key = nillion.NodeKey.from_base58(
                process.env.REACT_APP_NILLION_NODEKEY_TEXT_PARTY_1
            );
            const user_key = nillion.UserKey.from_base58(
                process.env.REACT_APP_NILLION_USERKEY_TEXT_PARTY_1
            );
            const bootnodes_web = [process.env.REACT_APP_NILLION_WEBSOCKETS];
            const paymentsConfig = {
                rpc_endpoint: process.env.REACT_APP_NILLION_BLOCKCHAIN_RPC_ENDPOINT,
                smart_contract_addresses: {
                blinding_factors_manager:
                    process.env.REACT_APP_NILLION_BLINDING_FACTORS_MANAGER_SC_ADDRESS,
                    payments: process.env.REACT_APP_NILLION_PAYMENTS_SC_ADDRESS,
                },
                signer: {
                    wallet: {
                        chain_id: parseInt(process.env.REACT_APP_NILLION_CHAIN_ID || 0),
                        private_key: process.env.REACT_APP_NILLION_WALLET_PRIVATE_KEY,
                    },
                },
            };    
            // create new instance of NillionClient
            const client = new nillion.NillionClient(
                user_key,
                node_key,
                bootnodes_web,
                paymentsConfig
            );
            // set state access to nillionClient
            setNillionClient(client);
        };
        // initialize client if it doesn't exist yet
        if (nillion && !nillionClient) {
            initializeNillionClient();
        }
  }, [nillion, nillionClient]);

  if (nillionClient) {
    const userId = nillionClient.user_id;
    console.log(userId);
    // Add your Nillion logic here: use nillionClient to
    // store programs
    // store, retrieve, update, and delete secrets
    // compute on programs with secrets
  }

  return (
    <div className="App">
      YOUR APP HERE
    </div>
  );
}

export default App;
````
</TabItem>

<TabItem value="env" label=".env" default>

Populate the .env with your Nillion Network config - here's an example of a .env file populated with a local [nillion-devnet](/nillion-devnet) configuration

```txt
REACT_APP_NILLION_NODEKEY_TEXT_PARTY_1=23jhTcC5mAT9Hbzt3vaCUNTk5VBR7zQbvz9h34mve2a8vQvWGGXth4BQzDFetYdULZvjaET2Gc6smFn7i75YFpNH8My9d
REACT_APP_NILLION_USERKEY_TEXT_PARTY_1=54cAoGSZZ5VDRPcpQSH27wLzgtN2mAt4LkPb436hUuDuS765UZyHfN2JxqqTLuWJThgVDDqEH1cHBVbqfcbCuLbJ
REACT_APP_NILLION_WEBSOCKETS=/ip4/127.0.0.1/tcp/50356/ws/p2p/12D3KooWNQTeFoEFHLp46RVG3ydUSZ9neeoAL44DSRYjExWLsRQ4
REACT_APP_NILLION_CLUSTER_ID=18d71351-b5d9-4d8d-bbcd-cdcc615badab
REACT_APP_NILLION_BLOCKCHAIN_RPC_ENDPOINT=http://localhost:33279
REACT_APP_NILLION_BLINDING_FACTORS_MANAGER_SC_ADDRESS=a513e6e4b8f2a923d98304ec87f64353c4d5c853
REACT_APP_NILLION_PAYMENTS_SC_ADDRESS=5fc8d32690cc91d4c39d9d3abcbd16989f875707
REACT_APP_NILLION_CHAIN_ID=31337
REACT_APP_NILLION_WALLET_PRIVATE_KEY=abcdefg
```

</TabItem>
</Tabs>

## Resources

<DocCardList/>
