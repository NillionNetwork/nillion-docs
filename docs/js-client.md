import ThemedImage from '@theme/ThemedImage';
import DocCardList from '@theme/DocCardList';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Nillion TypeScript Client

The Nillion TypeScript client client-ts provides libraries for interacting with Nillion blind compute networks. This client is structured as a monorepo containing multiple packages to support different use cases and environments.

## Quick Start

The fastest way to get started with Nillion is using the create-nillion-app cli tool, which spins up a working Next.js app

```bash
npx create-nillion-app@latest
```

<div style={{ textAlign: 'center' }}>
  <ThemedImage
    alt="Nillion Quickstart Demo"
    sources={{
        light: '/img/nillion_quickstart_demo_light.png',
        dark: '/img/nillion_quickstart_demo_dark.png',
      }}
  />
  <p>For more detailed information on building with create-nillion-app, check out our [Quickstart Guide](/quickstart).</p>
</div>

## Manual Installation

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

```typescript
  import { useEffect, useState } from "react";
  import { NillionProvider, createClient } from "@nillion/client-react-hooks";
  import type { VmClient } from "@nillion/client-vms";

  const [client, setClient] = useState<VmClient>();

  useEffect(() => {
    const init = async () => {
      const client = await createClient("devnet");
      setClient(client);
    };
    void init();
  }, []);

  if (!client) {
    return <div>Loading...</div>;
  }  const [client, setClient] = useState<VmClient>();

  useEffect(() => {
    const init = async () => {
      const client = await createClient("devnet");
      setClient(client);
    };
    void init();
  }, []);

  if (!client) {
    return <div>Loading...</div>;
  }

  ...
    <NillionProvider client={client}>
      ...
    </NillionProvider>
```

# Package Overview

The Nillion client is composed of three main packages:

### @nillion/client-react-hooks

React hooks built on top of @nillion/client-vms and integrated with @tanstack/react-query for seamless React application development.

### @nillion/client-vms

The primary gRPC client that combines payments and network operations into a simple API. This package supports both web browsers and Node.js environments.

### @nillion/client-wasm

A collection of utility functions exported from Rust to WebAssembly, providing core functionality for the Nillion ecosystem.

## Resources

<DocCardList/>
