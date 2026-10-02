---
title: Build a Covenants app
description: Build a Covenants app on Blacklight L1 with @nillion/covenants-sdk — seal a payload to a committee of nodes, post it with an on-chain release condition, and reconstruct it when the condition fires.
---

import AgentPrompt from '@site/src/components/AgentPrompt';

# Build a Covenants app

A Covenants app seals a payload to a committee of Blacklight L1 nodes, posts it with an on-chain release condition, and reconstructs it when the condition fires. `@nillion/covenants-sdk` is the TypeScript SDK and CLI for building one.

- **npm:** [`@nillion/covenants-sdk`](https://www.npmjs.com/package/@nillion/covenants-sdk)
- Works in Node and in the browser. Both bindings drive the same Rust core compiled to WASM — the same code the nodes run natively.

<AgentPrompt />

## Install

```bash
npm install @nillion/covenants-sdk viem
npm pkg set type=module   # required: the package is ESM-only
```

`viem` is a **peer** dependency, so it is not bundled and you will not end up with two copies.

The package installs a `covenants` binary. To use the CLI without installing the package:

```bash
npx -p @nillion/covenants-sdk covenants candidates
```

:::note Renamed from `@nillion/blacklight-l1-sdk`

The SDK was published as `@nillion/blacklight-l1-sdk`, with a `blacklight-l1-sdk` binary. It is now `@nillion/covenants-sdk`, and the binary is `covenants`. If a tutorial uses the old names, swap in the new ones.

:::

## Configure

Two settings pick the network: `RPC_URL`, and `CONFIG_ADDRESS`, the `ProtocolConfig` address of the deployment you target. On mainnet, set both:

```bash
export RPC_URL=https://mainnet.infura.io/v3/YOUR_KEY
export CONFIG_ADDRESS=0x0000000000000000000000000000000000000000   # mainnet ProtocolConfig, see Contracts
```

With neither set, the CLI reads the Sepolia testnet, so reads work on a machine with nothing set up:

```bash
npx covenants candidates      # who can be picked
npx covenants status --id N   # is it resolved
npx covenants shares --id N   # what has been posted
```

### Writing needs one thing: `AUTHOR_KEY`

Anything that sends a transaction — `post`, `reveal`, `reconstruct`, `claim-recon`, `withdraw-refund` — needs your own funded key. There is no default, and the CLI refuses rather than guess:

```bash
AUTHOR_KEY=0xYOUR_PRIVATE_KEY npx covenants post ...
```

That key needs ETH for gas and the escrow, and NIL for the protocol fee. It is read from the environment only, never a flag, so it cannot land in your shell history.

### Environment

| var | required | default |
| --- | --- | --- |
| `AUTHOR_KEY` | **writes only** | none — writes refuse without it |
| `RPC_URL` | on mainnet | `https://ethereum-sepolia-rpc.publicnode.com` |
| `CONFIG_ADDRESS` | on mainnet | the Sepolia testnet deployment, announced on stderr each run |
| `CHAIN_ID` | no | detected from `RPC_URL` |

`CONFIG_ADDRESS` is the one address an integration pins — every other address resolves from it on-chain. When you rely on the built-in default, the CLI prints it on stderr on every run, because a superseded deployment keeps answering rather than going dark. See [Contracts](/blacklight/l1/contracts) for the current addresses.

## Quickstart

**1. See who is available.**

```bash
npx covenants candidates
```

Lists registered nodes with their stake, markup, and how many shares they have posted. No configuration needed.

**2. Post a trigger.** This sends a transaction, so it needs `AUTHOR_KEY`.

```bash
AUTHOR_KEY=0xYOUR_PRIVATE_KEY npx covenants post \
  --condition "BTC >= 100000" \
  --payload "the secret" \
  --mode private \
  --k 3 --m 5
```

This seals the payload to a committee of 5, requires any 3 of them to open it, and escrows payment. `--mode private` keeps the condition itself hidden on-chain; `--mode public` publishes it.

**3. Watch it.**

```bash
npx covenants status --id 1
npx covenants shares --id 1
```

**4. Reconstruct once `k` shares are in.**

```bash
npx covenants reconstruct --id 1
npx covenants reveal --id 1
```

Reconstruction is permissionless and carries a bounty the author escrowed, so anyone can perform it — the contract checks the result against the author's commitment.

## Choosing a committee

Either name the nodes explicitly:

```bash
npx covenants post --condition "…" --nodes 3,7,12,15,19 --k 3
```

Or pick a strategy and let the SDK select:

| Strategy | Selects for |
| --- | --- |
| `balanced` (default) | 0.5 response rate + 0.3 stake + 0.2 cost |
| `experienced` | most shares posted |
| `staked` | highest stake |
| `cheapest` | lowest committee cost |

```bash
npx covenants post --condition "…" --strategy staked --m 5 --k 3
```

Escrow for a committee is the **sum of the `k` highest markups**, not the average — raising `k` can raise your cost as well as your collusion resistance.

The SDK refuses a committee in which a single operator controls `k` or more slots, since that operator could open the payload alone. Override only when testing against your own nodes.

## Conditions

Conditions can be absolute or relative to the current cross-venue median price:

```bash
--condition "BTC >= 100000"
--condition "BTC >= @market" --at-market-bps -100    # 1% below spot at post time
```

An optional `--window +60:+900` restricts when the condition may fire.

## Settlement hooks

A trigger can name a contract to call on reveal, so a downstream protocol acts on the revealed value atomically:

```bash
npx covenants post --condition "…" --hook 0xYourContract --hook-gas 250000
```

Hook gas is escrowed at your ceiling and refunded down to what it actually uses. If a settlement resolves without acknowledging, `retry --id N` re-runs it.

## Sponsored posting

An author with an empty wallet can seal and sign offline, and let somebody else pay:

```bash
npx covenants sign-authorization --condition "…" --out auth.json
npx covenants post-sponsored --authorization auth.json
```

Omitting `--payer` means anyone may submit the bundle, so treat the file as a bearer instrument and transmit it privately.

## Programmatic use

The same operations are available as functions. `seal` produces the ciphertext layers and the commitment; `post` submits them; `reconstruct` and `reconstructAndPost` recover the payload.

```ts
import { seal, post, reconstruct, commitOf } from '@nillion/covenants-sdk';
```

Also exported: `openLayer`, `mpkFromSecret`, `validateMpk`, `rankSlots`, `layerLenForPayload`, and the `Mode` and `SealResult` types. Exact signatures ship with the package's type definitions.

## Command reference

| Command | Purpose |
| --- | --- |
| `candidates` | list registered nodes |
| `post` | seal a payload and fire a trigger |
| `status --id N` | trigger state |
| `shares --id N` | shares posted so far |
| `reconstruct --id N` | read shares, interpolate, reveal on-chain |
| `reveal --id N` | print the revealed payload |
| `retry --id N` | re-run a settlement that resolved unacknowledged |
| `claim-recon` | withdraw accrued reconstructor fees |
| `withdraw-refund --id N` | pull a refund the automatic push could not deliver |
| `sign-authorization` | seal and sign offline, for sponsored posting |
| `post-sponsored` | submit and pay for someone else's authorization |
| `exit-status --node N` | stake, pending tranches, and maturity dates |
| `retire` / `unretire` | stop or resume accepting work and emissions |

The full brief lives in the **Agentic coding** banner at the top of this page —
copy it straight to your clipboard there, no expanding required.

## Where next

- [How it Works](/blacklight/l1/how-it-works) — the lifecycle end to end
- [Cryptography](/blacklight/l1/cryptography) — what the guarantees rest on
- [Contracts](/blacklight/l1/contracts) — mainnet and testnet addresses
- [Faucet](/blacklight/l1/faucet) — testnet NIL and Sepolia ETH
