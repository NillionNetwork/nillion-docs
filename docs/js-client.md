import ThemedImage from '@theme/ThemedImage';

# Nillion TypeScript Client

The Nillion TypeScript client [client-ts](https://github.com/NillionNetwork/client-ts) provides libraries for interacting with Nillion blind compute networks. This client is structured as a monorepo containing multiple packages to support different use cases and environments.

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

## Installation

Choose your preferred package manager to install the Nillion client libraries:

```bash
# Using npm
npm install @nillion/client-wasm @nillion/client-vms @nillion/client-react-hooks

# Using pnpm
pnpm add @nillion/client-wasm @nillion/client-vms @nillion/client-react-hooks

# Using yarn
yarn add @nillion/client-wasm @nillion/client-vms @nillion/client-react-hooks
```

## Package Overview

The Nillion client is composed of three main packages:

### @nillion/client-react-hooks

React hooks built on top of `@nillion/client-vms` and integrated with `@tanstack/react-query` for seamless React application development.

### @nillion/client-vms

The primary gRPC client that combines payments and network operations into a simple API. This package supports both web browsers and Node.js environments.

### @nillion/client-wasm

A collection of utility functions exported from Rust to WebAssembly, providing core functionality for the Nillion ecosystem.