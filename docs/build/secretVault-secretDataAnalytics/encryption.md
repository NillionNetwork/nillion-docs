import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Encrypt and Decrypt Data

Use nilQL to encrypt and decrypt data.

1. To apply encryption to your data, they are to be secret shared across your selected nodes.
2. This is to be done with **nilQL**, a library for working with encrypted data within nilDB queries and replies, available in [Python](https://pypi.org/project/nilql/#description) and [TypeScript](https://www.npmjs.com/package/@nillion/nilql).
3. You can find an example on using nilQL to encrypt/decrypt data below.

## Installation

Install nilQL using your preferred package manager:

<Tabs>
  <TabItem value="python" label="Python">
  Install [nilql-py](https://github.com/NillionNetwork/nilql-py), the Python library for server-side applications
  ```
    pip install nilql
  ```
  </TabItem>
  <TabItem value="javascript" label="JavaScript">
  Install [nilql-ts](https://github.com/NillionNetwork/nilql-ts), the TypeScript library for web and Node.js environments
  ```
    pnpm install @nillion/nilql
  ```
  </TabItem>
</Tabs>

## Standalone Library Usage

<Tabs>
  <TabItem value="python" label="Python">

```python reference showGithubLink
https://github.com/NillionNetwork/nil-examples/blob/main/nildb/secretvault_python/encryption.py
```

</TabItem> 
<TabItem value="typescript" label="JavaScript">

```tsx reference showGithubLink
https://github.com/NillionNetwork/nil-examples/blob/main/nildb/secretvault_nextjs/app/lib/encryption.ts
```

</TabItem>

</Tabs>

## Usage with SecretVault and SecretDataAnalytics

To encrypt data for use within SecretVault and SecretDataAnalytics, you can create a cluster key by passing in

- your [cluster config](/build/secretVault-secretDataAnalytics/access#store-your-organizations-credentials) of node urls and node DIDs
- your selected operation (store, match, sum)

```
const cluster = {
  nodes: [
    {
      url: 'https://nildb-zy8u.nillion.network',
      did: 'did:nil:testnet:nillion1fnhettvcrsfu8zkd5zms4d820l0ct226c3zy8u',
    },
    {
      url: 'https://nildb-rl5g.nillion.network',
      did: 'did:nil:testnet:nillion14x47xx85de0rg9dqunsdxg8jh82nvkax3jrl5g',
    },
    {
      url: 'https://nildb-lpjp.nillion.network',
      did: 'did:nil:testnet:nillion167pglv9k7m4gj05rwj520a46tulkff332vlpjp',
    }
  ]
}

const operation = {
  store: true
}
```

```javascript reference showGithubLink
https://github.com/NillionNetwork/nillion-sv-wrappers/blob/main/nilQl/wrapper.js#L47-L50
```
