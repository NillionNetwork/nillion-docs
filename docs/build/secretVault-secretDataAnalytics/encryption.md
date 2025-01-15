import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Encryption with nilQL

1. To apply encryption to your data, they are to be secret shared across your selected nodes.
2. This is to be done with **nilQL**, a library for working with encrypted data within nilDB queries and replies, available in [Python](https://pypi.org/project/nilql/#description) and [TypeScript](https://www.npmjs.com/package/@nillion/nilql).
3. You can find an example on using nilQL to encrypt/decrypt data below

<Tabs>
  <TabItem value="python" label="Python">
  ```
    pip install nilql
  ```
  </TabItem>
  <TabItem value="javascript" label="Javascript">
  ```
    pnpm install @nillion/nilql
  ```
  </TabItem>
</Tabs>

<Tabs>
  <TabItem value="python" label="Python">

```python reference showGithubLink
https://github.com/NillionNetwork/nil-examples/blob/main/nildb/secretvault_python/encryption.py
```

</TabItem> 
<TabItem value="typescript" label="TypeScript">

```tsx reference showGithubLink
https://github.com/NillionNetwork/nil-examples/blob/main/nildb/secretvault_nextjs/app/lib/encryption.ts
```

</TabItem>

</Tabs>
