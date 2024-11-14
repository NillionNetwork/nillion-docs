import DocCardList from '@theme/DocCardList';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import JsHeaders from './\_js-headers-proxy.mdx';

# JavaScript Client

The JavaScript client for building on top of the Nillion Network is built on several packages.

- `@nillion/client-react-hooks`: React hooks built on _@nillion/client-vms_ and _@tanstack/react-query_
- `@nillion/client-vms`: Primary gRPC client combining payments and network operations into a simple API (supports web and Node.js)
- `@nillion/client-wasm`: Utility functions exported from Rust to WebAssembly

They can be used to manage Nada programs, store and retrieve secrets, and run computations.

:::info
Refer to the [Quickstart Guide](./quickstart-install) to quickly installs the Nillion SDK + the Javascript Client with a Next.js boilerplate
:::

## Installation

If you prefer to do a manual installation of the JS packages, follow the below guidelines.

### Install Nillion SDK

In your shell/terminal run the following command.

```bash
curl https://nilup.nilogy.xyz/install.sh | bash
```

Then ensure that you can run the `nillion-devnet` command in a separate terminal. Please refer to the [Installation guide](./installation) for further information.

### Install the JavaScript Client

Install the following packages in your browser application (i.e. React / Nextjs)

<Tabs>

  <TabItem value="npm" label="npm" default>
```bash
npm install @nillion/client-wasm @nillion/client-vms @nillion/client-react-hooks
```
  </TabItem>

   <TabItem value="yarn" label="yarn">
```bash
yarn add @nillion/client-wasm @nillion/client-vms @nillion/client-react-hooks
```
  </TabItem>

  <TabItem value="pnpm" label="pnpm">
```bash
pnpm add @nillion/client-wasm @nillion/client-vms @nillion/client-react-hooks
```
  </TabItem>
</Tabs>

## Usage

TODO:

## Resources

<DocCardList/>
````
