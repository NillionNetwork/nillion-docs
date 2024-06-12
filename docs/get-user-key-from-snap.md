# Get User Key from MetaMask Snap

`nillion-user-key-manager` is an experimental [MetaMask Snap](https://docs.metamask.io/snaps/) for storing a Nillion user key locally in a snap with the MetaMask Flask browser extension.

1. Install the [MetaMask Flask browser extension](https://docs.metamask.io/snaps/get-started/install-flask/)
2. Create a new test wallet in the MetaMask Flask browser extension
3. Temporarily disable any other wallet browser extensions (Classic MetaMask, Rainbow Wallet, etc.) while using MetaMask Flask
4. Visit the [Nillion Key Management UI](https://nillion-snap-site.vercel.app/) to generate a user key and store it locally in MetaMask Snaps - this saves your user key within MetaMask so it can be used by other Nillion web apps
5. Use the following code to `getUserKeyFromSnap`. The user key is a parameter needed to instantiate a NillionClient.

```ts reference showGithubLink
https://github.com/NillionNetwork/scaffold-nillion/blob/main/packages/nextjs/utils/nillion/getUserKeyFromSnap.ts
```
