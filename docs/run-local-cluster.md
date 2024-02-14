# run-local-cluster

The run-local-cluster tool creates a local cluster of Nillion nodes you can interact with while you keep the process running.

### Pre-req: Install Foundry

[Foundry](https://book.getfoundry.sh/getting-started/installation) is a portable and modular toolkit for Ethereum development. Running a local cluster uses Foundry's anvil tool under the hood, so you need to have Foundry installed.

```bash
# install Foundryup, the Foundry toolchain installer
curl -L https://foundry.paradigm.xyz | bash

# after installation, use the foundryup commmand to install the binaries including Anvil
foundryup
```

### Run Local Cluster

```bash
Usage: run-local-cluster [OPTIONS]

Options:
  -n, --node-count <NODE_COUNT>
          The number of nodes in the cluster

          [default: 5]

  -c, --cluster-id <CLUSTER_ID>
          The uuid of the cluster.

          A random uuid will be used if none is provided, honoring the --seed parameter.

  -d, --state-directory <STATE_DIRECTORY>
          The directory where the node's states is stored.

          A temporary directory will be used if none is provided.

  -s, --seed <SEED>
          The seed to use, if any, for keys and cluster ids.

          If none is provided, node keys and the cluster id will be randomized.

  -p, --prime-bits <PRIME_BITS>
          The number of bits in the prime number to be used

          [default: 256]

  -b, --bind-address <BIND_ADDRESS>
          The address to bind to

          [default: 127.0.0.1]

  -h, --help
          Print help (see a summary with '-h')

  -V, --version
          Print version
```

### Local cluster outputs

Running a local cluster outputs values you can use to run nil-cli against your local cluster rather than the network

- cluster id
- blockchain node endpoint
- node ids
- wallet keys: 14 private keys written to a file
- payment configuration (blockchain info) written to a file
  - blockchain_rpc_endpoint
  - chain_id
  - payments_sc_address
  - blinding_factors_manager_sc_address
- bootnode
- websocket

### Spin down local cluster

To stop the local cluster, run

```bash
killall run-local-cluster
```
