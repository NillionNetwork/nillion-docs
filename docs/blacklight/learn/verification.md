# Verification

This page describes the verification protocol utilized within Nillion Blacklight. For an overview of the system architecture and its three core components (TEE operators, Nillion's Ethereum L2, and Blacklight nodes), see the [architecture page](/blacklight/learn/architecture).


## TEE Operators

Developers run their workloads inside trusted execution environments (TEEs), such as [nilCC](/blind-computer/build/compute/overview).
For each active workload, the TEE operators periodically submit heartbeat transactions (HTXs) to [Nillion's Ethereum L2](/blacklight/verify/network) at custom intervals (e.g., one every hour).

### Heartbeat Transaction (HTX)

Each HTX serves as a proof of liveness, asserting the three facts below.

- The workload is still running inside a real TEE enclave
- The workload is ready to be independently verified by the network
- The workload maintains its privacy and integrity guarantees

An HTX contains the metadata required for Blacklight nodes to independently verify a TEE workload. The below example illustrates the structure of an HTX.

```json
{
  "provider": "nillion",
  "version": "v1",
  "workload_id": { "current": "1001", "previous": "1000" },
  "operator": { "id": 4, "name": "Latitude" },
  "builder": { "id": 94323, "name": "nillion" },
  "workload_measurement": {
    "url": "https://nilgpt.xyz/nilcc/api/v2/report",
    "artifacts_version": "0.2.1",
    "cpus": 4,
    "gpus": 1,
    "docker_compose_hash": "724ad766d1dc767394b842fdf319e89fcf2d1b462939070f5651ab54f97ce259"
  },
  "builder_measurement": {
    "url": "https://raw.githubusercontent.com/NillionNetwork/nilgpt/main/measurement-hash-index.json"
  }
}
```

The key components of an HTX are enumerated below.

- **`provider`**: Identifies the TEE provider (e.g., "nillion", "phala", etc)
- **`version`**: HTX protocol version
- **`workload_id`**: Tracks workload continuity with current and previous IDs, enabling the network to verify workload continuity and detect interruptions
- **`operator`**: Identifies the TEE operator running the workload
- **`builder`**: Identifies the builder that created the workload
- **`workload_measurement`**: Contains the workload's attestation URL and measurement data:
  - `url`: Endpoint where nodes can fetch the workload's attestation report
  - `artifacts_version`: Expected artifacts version
  - `cpus`, `gpus`: Resource specifications
  - `docker_compose_hash`: SHA256 hash of the Docker Compose configuration
- **`builder_measurement`**: Contains the builder's measurement information URL

### Continuous Monitoring

Through continuous HTX submissions, Blacklight verifies workload uptime.
If HTXs stop arriving or fail verification, the network can detect that a workload is no longer running or has been compromised.
The workload ID tracking (with both current and previous IDs) enables the network to track workload lifecycle transitions and ensure that verification covers the entire workload execution period.


## Nillion's Ethereum L2

[Nillion's Ethereum L2](/blacklight/verify/network) acts as the coordination and settlement layer for Nillion Blacklight.
It orchestrates the verification process through smart contracts that handle committee selection, consensus evaluation, and reward distribution.

### Committee Selection

When a TEE operator submits an HTX to the L2, the [WeightedCommitteeSelector contract](https://github.com/NillionNetwork/blacklight-contracts/blob/main/src/WeightedCommitteeSelector.sol)  selects a committee of Blacklight nodes to verify it.
Selection is:

- **Stake-weighted**: Nodes with more [stake](/blacklight/learn/staking-and-rewards) have higher probability of being selected, providing economic security
- **Probabilistic**: Selection remains random, preventing gaming or manipulation and ensuring diverse committee composition
- **Permissionless**: Any node that meets the minimum staking requirement can be selected

This stake-weighted but probabilistic selection prevents any single node or colluding group from controlling which nodes verify which workloads, contributing to the network's credible neutrality.


### Consensus Evaluation

After Blacklight nodes verify an HTX and submit their signed results back to the L2, the [HeartbeatManager contract](https://github.com/NillionNetwork/blacklight-contracts/blob/main/src/HeartbeatManager.sol) evaluates whether the committee has reached consensus, determined using two stake-weighted conditions:

- **Quorum requirement**: Enough of the committee's total stake has responded
- **Threshold requirement**: Enough of the committee's total stake agrees on the same outcome

Once these conditions are met, the L2 finalises the verification result for the HTX.
This multi-node consensus requirement ensures that verification outcomes are reliable and resistant to individual node failures or malicious behavior.


### Reward Distribution

Once consensus is reached, the L2 distributes rewards from the reward pool. Nodes that contributed to the finalised outcome are eligible for rewards, which they can then claim. For details on how rewards are calculated and distributed, see the [Rewards](/blacklight/learn/staking-and-rewards) page.


## Blacklight Nodes

Blacklight nodes are permissionless verifier nodes that perform the core verification work of the network.
To participate, nodes must [stake](/blacklight/learn/staking-and-rewards) a minimum amount of NIL tokens.


### Verification Process

When assigned an HTX by the L2, a Blacklight node performs a series of cryptographic and integrity checks to ensure the workload is running correctly inside a Trusted Execution Environment.


Blacklight nodes retrieve attestation reports directly from the TEE operator using URLs provided in the HTX:
- **Workload measurement URL** (`workload_measurement.url`): Points to the workload's attestation report endpoint
- **Builder measurement URL** (`builder_measurement.url`): Points to the builder's measurement information.
This direct retrieval ensures nodes verify attestations independently without relying on intermediaries, preventing attestation manipulation or replay attacks.


Blacklight nodes perform cryptographic and integrity verification:
- **Attestation signature verification**: Verifies that attestations are cryptographically signed and haven't been tampered with:
  - **nilCC workloads (AMD SEV-SNP)**: Nodes use the [nilcc attestation-verification crate](https://github.com/NillionNetwork/nilcc/tree/main/crates/attestation-verification/src) to verify AMD SEV-SNP attestations. The crate handles:
    - AMD SEV-SNP attestation signature validation
    - Measurement hash verification
    - Certificate chain validation
    - Report structure validation
  - **Phala workloads (Intel TDX)**: Nodes verify Phala-specific attestation formats, including quote verification using the [dcap-qvl crate](https://github.com/Phala-Network/dcap-qvl)
- **Workload measurement verification**: Nodes verify that workload measurements match expected values, ensuring the builder is legitimate and runs the open-source code that generates `builder_measurement` from the [HTX](/blacklight/learn/verification#heartbeat-transaction-htx), providing assurance that the workload was built by a trusted builder and hasn't been tampered with:
  - **Docker Compose hash** (`docker_compose_hash`): Validates that the workload is running the expected Docker Compose configuration. This ensures the workload hasn't been modified or replaced with a different container setup
  - **Artifacts version** (`artifacts_version`): Verifies the workload is using the expected artifacts version, ensuring consistency and preventing downgrade attacks
  - **Resource specifications**: Validates that resource allocation (CPUs, GPUs) matches the expected configuration, preventing resource exhaustion or misallocation


After performing verification checks, Blacklight nodes submit signed verification results back to the L2.
The verification logic is implemented in [blacklight-node](https://github.com/NillionNetwork/blacklight-node), which handles the orchestration of fetching attestations, performing verification checks, and submitting signed results.
