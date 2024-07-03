import DocCardList from '@theme/DocCardList';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# JavaScript Client

The `@nillion/client-web` npm package is a JavaScript client for building on top of the Nillion Network. It can be used to manage Nada programs, store and retrieve secrets, and run computations.

## Installation

Install the [JavaScript Client](https://www.npmjs.com/package/@nillion/client-web) package in your browser application.

<Tabs>

  <TabItem value="yarn" label="yarn" default>
```bash
yarn add @nillion/client-web
```
  </TabItem>

  <TabItem value="npm" label="npm">
```bash
npm i @nillion/client-web
```
  </TabItem>

  <TabItem value="pnpm" label="pnpm">
```bash
pnpm add @nillion/client-web
```
  </TabItem>
</Tabs>

## Usage

### Import JavaScript Client

```js
import * as nillion from '@nillion/client-web';
```

### Set Headers and set up proxy for nilchain

The JavaScript Client makes use of browser web-workers. To make your app cross-origin isolated, you'll need to set COOP and COEP headers:

```
Cross-Origin-Embedder-Policy: require-corp
Cross-Origin-Opener-Policy: same-origin
```

<Tabs>

<TabItem value="React" label="ReactJS" default>

Add headers and create a nilchain proxy in your [webpack.config.js](https://github.com/NillionNetwork/cra-nillion/blob/main/webpack.config.js)

```js
module.exports = {
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    headers: {
      'Cross-Origin-Embedder-Policy': 'require-corp',
      'Cross-Origin-Opener-Policy': 'same-origin',
    },
    hot: true,
    client: {
      overlay: false,
    },
    historyApiFallback: true,
    proxy: [
      {
        context: ['/nilchain-proxy'],
        target: process.env.REACT_APP_NILLION_NILCHAIN_JSON_RPC,
        pathRewrite: { '^/nilchain-proxy': '' },
        changeOrigin: true,
        secure: false,
      },
    ],
  },
};
```

</TabItem>
</Tabs>

For more information, check out

- https://developer.chrome.com/blog/enabling-shared-array-buffer/
- https://web.dev/articles/coop-coep
- https://webpack.js.org/configuration/dev-server/

### Initialize NillionClient with JavaScript Client

<Tabs>

<TabItem value="app" label="App.js" default>
```js
import * as nillion from '@nillion/client-web';
import React, { useState, useEffect } from 'react';

const App: React.FC = () => {
  const [nillionClient, setNillionClient] = useState(null);
  const userKeySeed = 'my-userkey-seed';
  const nodeKeySeed = `my-nodekey-seed-${Math.floor(Math.random() * 10) + 1}`;

  const initializeNewClient = async () => {
    if (userKey) {
      await nillion.default();
      const uk = nillion.UserKey.from_base58(userKey);
      const nodeKey = nillion.NodeKey.from_seed(nodeKeySeed);
      const userKey = nillion.UserKey.from_seed(nodeKeySeed);
      const newClient = new nillion.NillionClient(userkey, nodeKey, process.env.REACT_APP_NILLION_BOOTNODE_WEBSOCKET);
      setNillionClient(newClient);
    }
  };

  useEffect(() => {
    initializeNewClient();
  }, []);

  return (
    <div className="App">
      <h1>YOUR APP HERE</h1>
      User ID: {nillionClient ?  nillionClient.user_id : 'Not set - Nillion Client has not been initialized'  }
    </div>
  );
};

export default App;


````
</TabItem>

<TabItem value="env" label=".env" default>

Populate the .env with your Nillion Network config - here's an example of a .env file populated with a local [nillion-devnet](/nillion-devnet) configuration

```txt
# replace with values from nillion-devnet

REACT_APP_NILLION_CLUSTER_ID=
REACT_APP_NILLION_BOOTNODE_WEBSOCKET=
REACT_APP_NILLION_NILCHAIN_JSON_RPC=
REACT_APP_NILLION_NILCHAIN_PRIVATE_KEY=
REACT_APP_API_BASE_PATH=/nilchain-proxy
```

</TabItem>
</Tabs>

## Resources

<DocCardList/>
````
