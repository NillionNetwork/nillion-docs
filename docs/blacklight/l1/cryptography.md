# Cryptography

Blacklight L1 combines three well-understood primitives. Nothing here is novel cryptography; the design choice is in how they are composed so that no participant is trusted individually.

:::note

This page describes the scheme at a level useful for evaluating the guarantees. It is not a specification, and the testnet implementation may change.

:::

## The three pieces

### 1. Threshold secret sharing

The payload is split with **Shamir secret sharing** into `m` shares, with a threshold of `k`. Any `k` shares reconstruct the payload exactly; any `k-1` reveal nothing at all about it — not a partial value, not a narrowed range.

This is what removes the trusted party. There is no single holder to compromise, and the author chooses how much redundancy (`m`) and how much collusion resistance (`k`) they want.

### 2. Identity-based encryption

Each share is encrypted to one specific node using **pairing-based identity-based encryption** over the **BLS12-381** curve, in the Boneh–Franklin style. A sealed layer carries an ephemeral group element plus masked material:

```
layer = version(1) ‖ U(48) ‖ V(32) ‖ W(32) ‖ dem_len(4) ‖ body ‖ tag(16)
```

`U` is a compressed BLS12-381 group element (48 bytes); `V` and `W` mask the session key and the payload key.

Each node holds an IBE **master secret** and publishes the corresponding **master public key** (its `mpk`) on-chain at registration. Sealing to a node requires only its `mpk` — the author never talks to the node directly, and the node need not be online when the payload is sealed.

### 3. Authenticated symmetric encryption

The share itself is sealed under an AEAD (the `dem_len` and 16-byte `tag` above), so a layer cannot be tampered with undetected. The body is the Shamir share:

```
share = x(1) ‖ y(L)
```

where `x` is the share index and `y` the share value. In private-condition mode the body also carries the sealed 52-byte condition record, which is how the condition stays hidden from observers.

## Binding the payload

Alongside the layers, the author publishes:

```
commit = keccak256(payload ‖ nonce)
```

The 32-byte nonce travels with the payload, not on-chain. On reveal, the contract recomputes the commitment and rejects anything that does not match.

This is what makes reconstruction permissionless without being exploitable: a reconstructor cannot claim the bounty for a payload they invented, because they cannot produce a matching preimage.

## Key rotation

Node keys carry a TTL and are rotated on a schedule (24 hours on testnet). Rotation is additive, not destructive: a node retains older master secrets until the triggers sealed to them have expired, so a rotation never strands work in flight.

Each rotation registers a new `mpk` on-chain, and new triggers are sealed to the newest key. A node that somehow finds the chain's newest key is one it cannot decrypt will detect that at boot and rotate immediately rather than accept work it cannot serve.

## One implementation, two hosts

The cryptography is implemented once, in Rust, and compiled to WASM. The [SDK](/blacklight/l1/sdk) is a thin typed wrapper over that same core — so an author sealing in a browser, an author sealing in Node, and a node opening a layer natively are all running byte-identical code. That removes the classic failure mode where a client and a server disagree subtly about a wire format.

An independent pure-TypeScript implementation is used in CI as a differential oracle against the WASM core, but it never ships to users.

## What is and is not protected

**Protected**

- The payload, against any coalition smaller than `k`.
- The payload, against substitution at reveal time.
- The condition, in private-condition mode, against on-chain observers.

**Not protected**

- **Timing and metadata.** That a trigger exists, its committee, its escrow, and when each share is posted are all public.
- **A coalition of `k` nodes.** They can open the payload early. Choosing `k` and avoiding committees concentrated under one operator is the author's defence — the SDK refuses committees where a single operator controls `k` unless explicitly overridden.
- **Anything after reveal.** Once revealed, the payload is public forever.
