# nilCC Key Terms

This glossary defines key terms as they are used throughout the nilCC documentation and system.

## Bare Metal

Physical server hardware that hosts the nilCC infrastructure. Each bare metal machine runs a single `nilcc-agent` instance that manages multiple Confidential VMs on that physical host. The bare metal machine provides the [AMD SEV-SNP](https://www.amd.com/en/developer/sev.html) hardware security features that enable confidential computing.

## TEE (Trusted Execution Environment)

A secure area of a processor that provides hardware-level isolation and encryption for code and data. In nilCC, TEEs are implemented using [AMD SEV-SNP](https://www.amd.com/en/developer/sev.html) technology, which creates secure enclaves where workloads can run with cryptographic proof that they haven't been tampered with or accessed by unauthorized parties, including the infrastructure provider.

## CVM (Confidential VM)

A virtual machine that leverages [AMD SEV-SNP](https://www.amd.com/en/developer/sev.html) to run workloads in a secure and verifiable way. Each CVM:

- Runs a single workload in the form of Docker Compose files
- Includes a Caddy instance for TLS certificate generation and proxy services
- Provides complete isolation from the host system and other VMs
- Generates hardware attestation reports to prove execution integrity
- Has its own dedicated resources (CPU, memory, disk)

CVMs are managed by the `nilcc-agent` on the bare metal host and run a `cvm-agent` daemon internally to manage the workload execution.

## Workload

A containerized application defined by a Docker Compose file that runs inside a CVM. Workloads in nilCC:

- Are deployed as ISO files containing the Docker Compose configuration, metadata, and environment variables
- Can be any type of application (databases, APIs, ML models, analytics pipelines, etc.)
- Run with hardware-guaranteed privacy and security
- Receive automatic TLS certificates and attestation capabilities
- Are completely isolated from other workloads and the host system

Each workload gets its own dedicated CVM and can be managed through the nilCC API (create, start, stop, restart, delete) with full lifecycle control.

## CPU/GPU

nilCC uses both CPU and GPU resources for confidential computation:

**CPU**: CVMs leverage [AMD SEV-SNP](https://www.amd.com/en/developer/sev.html) technology for secure execution. CPU resources are allocated and tracked by nilcc-agent to prevent overcommitment. The number of vCPUs attached to each VM is included in the [AMD SEV-SNP](https://www.amd.com/en/developer/sev.html) attestation report measurement, allowing verification of the exact CPU configuration.

**GPU**: nilCC supports GPU-enabled machines for enhanced computational capabilities. On GPU machines, nilcc-attester will generate an NVIDIA Confidential Compute attestation in addition to the [AMD SEV-SNP](https://www.amd.com/en/developer/sev.html) attestation. GPU resources are tracked and allocated by the system alongside CPU and memory resources.

## nilCC Components

See [nilCC Architecture](./architecture)

- **nilcc-agent**: Runs on bare metal machines to manage CVMs and workloads
- **cvm-agent**: Runs inside each CVM to manage Docker Compose workload execution
- **nilcc-attester**: Generates TEE attestations within each CVM
- **nilcc-api**: Public API for workload and system management
