# Verification

This page presents the definition of the Blacklight verification protocol and describes some of its properties.

## Protocol Implementation

This section defines the verification protocol implementation, including its functional components and their interactions.

### Committee Selection

- [WeightedCommitteeSelector](https://explorer-nilav-shzvox09l5.t.conduit.xyz/address/0xc66b2b6a28a4212b1364d17514a03cf2c5f2dd7c) - Stake-weighted random committee selection
- [HeartbeatManager](https://explorer-nilav-shzvox09l5.t.conduit.xyz/address/0x3dbe95e20b370c5295e7436e2d887cfda8bcb02c) - Orchestrates multi-round heartbeat verification with stake-weighted committees

### Heartbeat Verification

- [HeartbeatManager](https://explorer-nilav-shzvox09l5.t.conduit.xyz/address/0x3dbe95e20b370c5295e7436e2d887cfda8bcb02c) - Orchestrates multi-round heartbeat verification with stake-weighted committees

### Attestation Challenges

...

### Monitoring and Reporting

...

## Protocol Properties

This section describes the trust assumptions, cryptographic features, and properties of the verification protocol.

### Trust Layer

...

### TEE Attestation

...

### Continuous Monitoring

- [HeartbeatManager](https://explorer-nilav-shzvox09l5.t.conduit.xyz/address/0x3dbe95e20b370c5295e7436e2d887cfda8bcb02c) - Orchestrates multi-round heartbeat verification with stake-weighted committees

### Accountability Mechanisms

- [JailingPolicy](https://explorer-nilav-shzvox09l5.t.conduit.xyz/address/0x7fe02e082ff4e377abe4e80bd428e45047dee957) - Penalty enforcement through temporary operator jailing

### Credible Neutrality

...