import FoundryInstallation from './\_foundry-installation.mdx';

# nillion-devnet

The `nillion-devnet` tool creates a Nillion network devnet that you can interact with while you keep the process running.

### Pre-req: Install Foundry

[Foundry](https://book.getfoundry.sh/getting-started/installation) is a portable and modular toolkit for Ethereum development. Running a local devnet uses Foundry's `anvil` tool under the hood, so you need to have Foundry installed.

<FoundryInstallation/>

### Run Devnet

```bash
Usage: nillion-devnet [OPTIONS]

Options:
  -n, --node-count <NODE_COUNT>
          The number of nodes in the devnet

          [default: 3]

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

### Devnet outputs

Running a local devnet outputs values you can use to run nillion against your local devnet rather than the network

- devnet id
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

### Spin down local devnet

To stop the local devnet, run

```bash
killall nillion-devnet
```
