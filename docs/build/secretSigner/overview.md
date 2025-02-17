# SecretSigner

## What is SecretSigner

SecretSigner uses threshold ECDSA to enable secure message and transaction signing while keeping your private keys secret within the Nillion Network. Private keys stay split across nilVM nodes during signing operations, and you can even grant permissions to let others sign with your private keys without exposing or revealing the actual keys.

## How SecretSigner Works

### 1. Store Private Key in Nillion

The first step in using SecretSigner is storing a private key in Nillion. During storage:

- The private key is split and distributed across nilVM nodes
- Permissions specify which Nillion users can sign with the key (compute) and which can retrieve it (read/retrieve the key in plaintext)
- Each stored key receives a unique identifier

### 2. Sign Messages and Transactions

Once a private key is stored in Nillion, anyone with SecretSigner compute permissions can sign messages and transactions with it. During signing:

- Provide the message and key's store id
- SecretSigner creates an ECDSA signature using the stored key shares
- Only the message hash is sent to the network - the original message stays private

### 3. Verify Signatures

Anyone can verify the signature using the same message hash and the public key that corresponds to the private key stored in Nillion. Since SecretSigner returns standard ECDSA signatures, verification works just like it would for any other ECDSA signature.

## Key Features and Security

- **Secure Key Storage:** Import your private keys and have them securely split across the network. Your keys are never reconstructed, even during signing operations - no single point of failure.
- **Flexible Permissions:** Grant other parties the ability to sign with your keys without ever exposing the keys themselves. Perfect for delegating signing capabilities to AI agents, automated systems, or team members while keeping your keys secure. You maintain full control and can revoke access at any time.
- **Message Privacy:** Only message hashes are sent over the network during signing, keeping the actual content of your messages private.
- **High Performance:** Use SecretSigner to sign a message in under 10 seconds, regardless of message size.
- **Industry Standard:** Uses the secp256k1 curve (the same as Ethereum) for broad compatibility.

## Use Cases

#### DeFAI Agent Integrations

Allow AI agents to execute trades and transactions while keeping your private keys secure. Grant signing permissions without ever exposing the keys. Maintain complete control over access. Perfect for automated DeFi strategies.

#### Multi-Party Transaction Approval

Enable team wallets with distributed control. Define custom approval workflows. Maintain security without sharing private keys. Ideal for DAOs and treasury management.

#### Automated System Authorization

Let systems sign transactions automatically while keeping signing keys secure and isolated. Maintain audit trails of all signatures. Great for recurring payments and operations.

#### Secure Key Delegation

Delegate signing authority to contractors. Grant temporary access with expiration. Revoke access instantly if needed. Useful for project-based collaborations.

## Resources and Demos

- **[Nillion Signature Tools](https://nillion-signature-tools.streamlit.app/)**: An interactive web app and developer tool that allows you to experiment with key generation, storage, and signing with SecretSigner on the Nillion Testnet.
- **[DeFAI Demo](https://nillion.com/news/1607/)**: A blog and demo that integrates SecretSigner into an AI Agent to allow the agent to swap tokens on Ethereum with a private key that has been stored in Nillion.
