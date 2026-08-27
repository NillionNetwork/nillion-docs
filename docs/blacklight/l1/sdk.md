---
title: Building on Blacklight L1
description: TypeScript SDK and CLI for Blacklight L1 — seal a payload to a committee of nodes, post it with an on-chain release condition, and reconstruct it when the condition fires.
---

# Building on Blacklight L1

`@nillion/blacklight-l1-sdk` is the TypeScript SDK and CLI for Blacklight L1: seal a payload to a committee of nodes, post it with an on-chain release condition, and reconstruct it when the condition fires.

- **npm:** [`@nillion/blacklight-l1-sdk`](https://www.npmjs.com/package/@nillion/blacklight-l1-sdk)
- Works in Node and in the browser. Both bindings drive the same Rust core compiled to WASM — the same code the nodes run natively.

:::info Testnet only

Blacklight L1 is deployed to Ethereum Sepolia. Tokens have no value and deployments may be replaced, so treat anything you build against it as disposable.

:::

## Install

```bash
npm install @nillion/blacklight-l1-sdk
```

Or use the CLI without installing:

```bash
npx blacklight-l1-sdk candidates
```

## Configure

**Reads need no configuration at all.** The defaults point at the live Sepolia deployment, so this works on a machine with nothing set up:

```bash
npx blacklight-l1-sdk candidates      # who can be picked
npx blacklight-l1-sdk status --id N   # is it resolved
npx blacklight-l1-sdk shares --id N   # what has been posted
```

### Writing needs one thing: `AUTHOR_KEY`

Anything that sends a transaction — `post`, `reveal`, `reconstruct`, `claim-recon`, `withdraw-refund` — needs your own funded Sepolia key. There is no default, and the CLI refuses rather than guess:

```bash
AUTHOR_KEY=0xYOUR_PRIVATE_KEY npx blacklight-l1-sdk post ...
```

That key needs Sepolia ETH for gas and NIL for escrow. It is read from the environment only, never a flag, so it cannot land in your shell history.

### Environment

| var | required | default |
| --- | --- | --- |
| `AUTHOR_KEY` | **writes only** | none — writes refuse without it |
| `RPC_URL` | no | `https://ethereum-sepolia-rpc.publicnode.com` |
| `CONFIG_ADDRESS` | no | the live Sepolia deployment, announced on stderr each run |
| `CHAIN_ID` | no | detected from `RPC_URL` |

`CONFIG_ADDRESS` is the one address an integration pins — every other address resolves from it on-chain. The built-in default is whatever was live when your version was published, and it is printed on stderr on every run, because a superseded deployment keeps answering rather than going dark. If you are working against anything other than the current testnet, set it explicitly. See [Contracts](/blacklight/l1/contracts).

## Quickstart

**1. See who is available.**

```bash
npx blacklight-l1-sdk candidates
```

Lists registered nodes with their stake, markup, and how many shares they have posted. No configuration needed.

**2. Post a trigger.** This sends a transaction, so it needs `AUTHOR_KEY`.

```bash
AUTHOR_KEY=0xYOUR_PRIVATE_KEY npx blacklight-l1-sdk post \
  --condition "BTC >= 100000" \
  --payload "the secret" \
  --mode private \
  --k 3 --m 5
```

This seals the payload to a committee of 5, requires any 3 of them to open it, and escrows payment. `--mode private` keeps the condition itself hidden on-chain; `--mode public` publishes it.

**3. Watch it.**

```bash
npx blacklight-l1-sdk status --id 1
npx blacklight-l1-sdk shares --id 1
```

**4. Reconstruct once `k` shares are in.**

```bash
npx blacklight-l1-sdk reconstruct --id 1
npx blacklight-l1-sdk reveal --id 1
```

Reconstruction is permissionless and carries a bounty the author escrowed, so anyone can perform it — the contract checks the result against the author's commitment.

## Choosing a committee

Either name the nodes explicitly:

```bash
npx blacklight-l1-sdk post --condition "…" --nodes 3,7,12,15,19 --k 3
```

Or pick a strategy and let the SDK select:

| Strategy | Selects for |
| --- | --- |
| `balanced` (default) | 0.5 response rate + 0.3 stake + 0.2 cost |
| `experienced` | most shares posted |
| `staked` | highest stake |
| `cheapest` | lowest committee cost |

```bash
npx blacklight-l1-sdk post --condition "…" --strategy staked --m 5 --k 3
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
npx blacklight-l1-sdk post --condition "…" --hook 0xYourContract --hook-gas 250000
```

Hook gas is escrowed at your ceiling and refunded down to what it actually uses. If a settlement resolves without acknowledging, `retry --id N` re-runs it.

## Sponsored posting

An author with an empty wallet can seal and sign offline, and let somebody else pay:

```bash
npx blacklight-l1-sdk sign-authorization --condition "…" --out auth.json
npx blacklight-l1-sdk post-sponsored --authorization auth.json
```

Omitting `--payer` means anyone may submit the bundle, so treat the file as a bearer instrument and transmit it privately.

## Programmatic use

The same operations are available as functions. `seal` produces the ciphertext layers and the commitment; `post` submits them; `reconstruct` and `reconstructAndPost` recover the payload.

```ts
import { seal, post, reconstruct, commitOf } from '@nillion/blacklight-l1-sdk';
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

<details>
<summary><b>Prompt for coding agents</b> — paste this to give an assistant working context</summary>

```text
You are helping me build on Blacklight L1, a network for conditional secrets on
Ethereum Sepolia (chain 11155111). Testnet only; tokens have no value.

## Model
An author seals a payload into m Shamir shares, each encrypted to one node's
identity-based public key, and posts the ciphertext layers on-chain with a release
condition and escrow. When the condition is met, committee nodes each post their
share. Once k shares are on-chain, ANYONE can interpolate them, recover the payload,
and reveal it, earning a bounty. The contract verifies the revealed payload against
keccak256(payload ‖ nonce), committed at post time.

Guarantees: fewer than k shares reveal nothing; the payload cannot be substituted at
reveal; reconstruction needs no trusted party. NOT protected: timing and metadata are
public, and a colluding coalition of k nodes can open the payload early.

## Package
@nillion/blacklight-l1-sdk — TypeScript SDK + CLI. Node and browser; both drive the
same Rust/WASM core the nodes run natively.

Install:  npm install @nillion/blacklight-l1-sdk
CLI:      npx blacklight-l1-sdk <command>

## Environment
Reads need NO configuration — the defaults point at the live Sepolia deployment.

AUTHOR_KEY      REQUIRED FOR WRITES ONLY (post, reveal, reconstruct, claim-recon,
                withdraw-refund). No default; the CLI refuses rather than guess. Needs
                Sepolia ETH for gas and NIL for escrow. Read from the environment only,
                never a flag, so it cannot land in shell history.
RPC_URL         optional — defaults to https://ethereum-sepolia-rpc.publicnode.com
CONFIG_ADDRESS  optional — defaults to the deployment that was live when this version was
                published, and is printed on stderr every run. Pin it explicitly for
                anything other than the current testnet: a superseded deployment keeps
                answering rather than going dark.
CHAIN_ID        optional — detected from RPC_URL

Resolve every other contract address from CONFIG_ADDRESS on-chain. Never hardcode them.

## Core flow
npx blacklight-l1-sdk candidates
npx blacklight-l1-sdk post --condition "BTC >= 100000" --payload "secret" \
    --mode private --k 3 --m 5
npx blacklight-l1-sdk status --id N
npx blacklight-l1-sdk shares --id N
npx blacklight-l1-sdk reconstruct --id N
npx blacklight-l1-sdk reveal --id N

Modes: --mode private hides the condition on-chain; --mode public publishes it.

Committee: --nodes 3,7,12 for explicit, or --strategy balanced|experienced|staked|cheapest
with --m and --k. Escrow is the SUM OF THE k HIGHEST markups, not the average, so
raising k raises cost as well as collusion resistance.

Conditions: absolute ("BTC >= 100000") or relative ("BTC >= @market" with
--at-market-bps -100). Optional --window +60:+900 bounds when it may fire.

Hooks: --hook 0xAddr [--hook-gas N] calls a contract atomically on reveal; gas is
escrowed at your ceiling and refunded down to actual use. retry --id N re-runs an
unacknowledged settlement.

Sponsored: sign-authorization (offline, no gas) then post-sponsored --authorization FILE.
Without --payer the bundle is a bearer instrument — transmit privately.

## Programmatic
import { seal, post, reconstruct, commitOf, openLayer } from '@nillion/blacklight-l1-sdk';
Also: mpkFromSecret, validateMpk, rankSlots, layerLenForPayload, types Mode and SealResult.
Check the shipped .d.ts for exact signatures rather than guessing.

## Rules
- Never invent contract addresses; read them from ProtocolConfig.
- Keep the 32-byte nonce with the payload — plaintext is payload ‖ nonce, and the
  on-chain commitment cannot be reproduced without it.
- Do not build a committee where one operator holds k slots; the SDK refuses this.
- Nodes need funded operator keys to post shares; an unfunded node silently stops working.
```

</details>

## Where next

- [How it Works](/blacklight/l1/how-it-works) — the lifecycle end to end
- [Cryptography](/blacklight/l1/cryptography) — what the guarantees rest on
- [Faucet](/blacklight/l1/faucet) — testnet NIL and Sepolia ETH
