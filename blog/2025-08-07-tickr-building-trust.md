---
title: 'Tickr: Building Trust in Trading Performance'
description: How Nillion's privacy-preserving infrastructure enables verifiable trading performance without exposing sensitive information
slug: tickr-app
authors: nillion-team
tags: [tickr, nilDB, nilCC, zkTLS]
image: /img/articles/hero-tickr.png
hide_table_of_contents: false
---

![Tickr: Building Trust in Trading Performance](/img/articles/hero-tickr.png)

At Nillion, we're best known for building advanced privacy-preserving infrastructure. However, there's another essential, though often overlooked, concept that we are enabling - trust. One could argue this is the root concept of all, what can I trust, and why can I trust it?

In this article, we explain what motivated us to build [Tickr](https://tickr.app), and how we applied Nillion's technology, [nilDB](/build/private-storage/overview) (secure database) and nilCC (confidential computing), to solve very specific, but distinct, problems for traders and their communities on centralised exchanges (CEXs) and decentralised exchanges (DEXs).

<!-- truncate -->

The CEX (Binance) integration posed a particularly difficult challenge as the data is non-public and it is hard to prove it's provenance. To solve this we have teamed up with [Primus Labs](https://www.primus.xyz) ([@primus_labs](https://x.com/primus_labs)) - combining Nillion's infrastructure with Primus Labs' zkTLS protocol and accompanying browser extension to create a Binance integration that privately verifies trading data.

## The Trading Trust Gap

Traders who want to build an audience and monetise their insights face two distinct, but equally difficult, problems depending on where they trade.

On CEXs like Binance, the issue is verification. Traders might be highly profitable, but they have no reliable way to prove it. There's no on-chain footprint to audit, and most followers are understandably skeptical. As a result, CEX traders often struggle to build trust with their communities or monetise their alpha.

On DEXs, the problem is different. Because all trades are public, traders can prove their performance, but only by doxxing their wallet address. Once a wallet is doxxed, their alpha becomes public too. Anyone can follow and copy their trades in real time, making it almost impossible to monetise premium strategies.

In both the CEX and DEX situations, above, the goal is for a follower to trust a trader's performance without the underlying wallet being doxxed. Here, trust must be the foundation of the trader-follower relationship. Tickr aims to solve this problem for CEXs and DEXs.

## Tickr: Solving the Proof Problem

Here, we outline, at a high level, the way Tickr addresses the problems described above. Tickr caters for two distinct user groups - traders and followers - each with distinct needs, but connected by a shared requirement: verifiable, privacy-preserving trust.

### For Traders

Traders, on CEXs or DEXs, need a way to prove their performance credibly, without exposing the underlying account or wallet they trade from. Tickr enables this by allowing them to:

- Verify ownership of their trading account or wallet, and have their performance data displayed on a public leaderboard in a trustworthy, tamper-proof way.
- Keep all identifying information private, even from Tickr itself, thanks to a backend built on nilCC and nilDB.
- Publish alpha that is accessible only to paying subscribers and only to those subscribers.

### For Followers

Followers want to decide which alpha they subscribe to based on trusted performance metrics of the traders. Tickr helps them:

- View trader performance on the leaderboard they can trust.
- Subscribe to alpha from traders and know they will definitely be granted access once subscribed.

## Verifying performance data

To support traders on both CEXs and DEXs, we integrated both Binance and [Hyperliquid](https://hyperliquid.xyz). Traders can connect their account/wallet to Tickr and verify their trading history. The Tickr backend runs entirely inside nilCC, a confidential compute environment where even the host infrastructure cannot view or manipulate the data being processed.

Once their account/wallet is connected, trading data is extracted, processed to compute performance metrics, and secret-shared across three nilDB nodes from within nilCC. In the case of Binance, we utilise Primus Labs' zkTLS protocol. Primus provides zkTLS proof templates that attest key Binance data like PnL over 24h, 7d and 30d periods. The Tickr frontend uses Primus' Chrome extension to generate a signed, ZK proof payload without exposing raw credentials or trading history. This payload is then decrypted and verified inside nilCC and data stored across nilDB nodes.

Each nilDB node is operated independently and stores only a share of the data, never the full data. This means no single node has access to wallet addresses, account credentials, or sensitive performance or trading data in the clear.

This distributed storage, combined with the prior zkTLS attestation and TEE-based processing, forms the foundation of Tickr's privacy-preserving trust model - enabling verifiable trading performance without exposing sensitive information.

## Architecture and technical design of Tickr

This section walks through the core steps in Tickr's system - from privately verifying a trader's performance to securely granting followers permissions to alpha after subscribing.

Here we focus on the Binance flow, which uses zkTLS via an integration with [@primus_labs](https://x.com/primus_labs). The Hyperliquid flow is structurally similar, except requires a connected EVM wallet and verifies data via the Hyperliquid API directly inside nilCC.

Tickr is built using nilCC and nilDB:

- **nilDB** is Nillion's distributed, MPC-based storage layer. Sensitive data is split into encrypted shares (secret shares) and stored across independently operated nodes. No single node learns anything about the original sensitive data from their share, as all the shares are required to reconstruct any data.
- **nilCC** is Nillion's confidential compute environment. It runs on a single bare-metal node within a stateless Trusted Execution Environment (TEE), ensuring that all computations are private, even from the infrastructure operator. Because nilCC runs on bare metal, there is no dependency on external cloud providers like AWS or Azure, which often introduces a layer of privacy risk and concern.

First, we consider the app flow from the trader connecting their Binance account, their data being verified, securely stored, and then served to the app leaderboard for other users to view. The diagram below illustrates this full flow.

![Tickr Architecture Flow - Binance Connection](/img/articles/tickr-architecture.png)

Now let's consider what is happening, step by step:

### 1. Binance Account Connection via zkTLS:

A trader connects their Binance account through the Tickr app using Primus Labs' zkTLS Binance flow. This is facilitated via the Primus Chrome Extension, which must be installed in the trader's browser. Once logged into Binance, the extension extracts and verifies trading data, returning an encrypted and signed payload to the Tickr frontend.

### 2. Forwarding to Tickr Backend:

The Tickr frontend forwards the encrypted payload and its accompanying signature to the Tickr backend, which operates entirely within nilCC. This payload and accompanying zkProof being sent to nilCC (running in a TEE), ensures that no party - including Tickr or Nillion - can access the underlying data.

### 3. Decryption, Verification & Computation in nilCC:

Inside nilCC, the backend verifies the signature to confirm authenticity, decrypts the payload, and extracts and computes on the relevant performance data required to be served in the app. All processing occurs within nilCC, ensuring complete privacy from the host server.

### 4. Secure Storage in nilDB:

The processed performance data is securely split up (secret-shared) and encrypted across three independent nilDB nodes, each run by a distinct entity.

### 5 - 7. Rendering Leaderboard Data:

When a followers opens the app to the leaderboard page, the Tickr backend (recall, running in nilCC) requests shares for the leaderboard data from the nilDB nodes. The shares are reconstructed inside nilCC, and then forwarded securely to the frontend to be displayed on the leaderboard.

Second, we consider the app flow from a trader creating their alpha and it being securely stored to a followers subscribing, being granted permissions on the alpha and viewing it. The diagram below illustrates this flow.

![Tickr Architecture Flow - Alpha Creation and Subscription](/img/articles/tickr-architecture.png)

Again, we now go through the flow step by step:

### 1. Creating Alpha:

When a trader publishes alpha content, it is sent to the backend (running in nilCC).

### 2 - 3. Alpha secret shared

The Tickr backend secret shares the alpha and stores the shares across the nilDB nodes.

### 4 - 5. Subscription and Payment:

Followers subscribe to alpha by paying the required amount in NIL via the [nilChain](/learn/what-is-nillion#nilchain). The resulting transaction hash is sent to the Tickr backend for verification.

### 6 - 7. Subscription verification & permissions granted

The Tickr backend verifies that the txn is for the correct amount of nil and then grants the follower permissions to view the (shares of) the alpha.

### 8 - 10. Follower views alpha

When the follower has successfully subscribed, they can view the alpha on the trader's profile as they have programmatic permissions (via NUCs) to view the data. Here the shares of the alpha are requested by the Tickr backend, reconstructed and then sent to the frontend for the user to view. Note: when the users subscription ends, their permission to view the alpha is automatically revoked.

## Conclusion

In this blog, we've explored how Tickr tackles the trust problem at the heart of crypto trading communities. By leveraging Nillion's privacy-preserving infrastructure - nilCC, nilDB, and zkTLS - we've built a system where traders can prove their performance without revealing sensitive information, and followers can confidently subscribe to verified alpha.

We've shown how Nillion's tech stack can be used not just for privacy and security, but as a foundation for building trust - especially in places like CEXs where verification has traditionally been difficult or impossible.

If you're curious about the technology that makes this possible, particularly how we combine zkTLS with confidential compute, follow [Build on Nillion](https://x.com/buildonnillion). We'll be publishing more technical content soon.

In the meantime, these posts provide a deeper look at the building blocks behind Tickr and our work and thoughts on zkTLS, including our integration with [@primus_labs](https://x.com/primus_labs). The collaboration with Primus highlights how multiple layers of privacy-preserving infrastructure - from confidential computing to verifiable data attestation - can come together to build systems rooted in both privacy and proof.
