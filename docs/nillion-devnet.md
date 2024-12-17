# nillion-devnet

The `nillion-devnet` tool creates a Nillion network devnet that you can interact with while you keep the process running.

### Run Devnet

```bash
Usage: nillion-devnet [OPTIONS]

Options:
  -n, --node-count <NODE_COUNT>
          The number of nodes in the devnet

          [default: 3]

  -c, --cluster-id <CLUSTER_ID>
          The UUID of the cluster.

          A random UUID will be generated if none is provided, respecting the --seed parameter.

  -d, --state-directory <STATE_DIRECTORY>
          The directory where the nodes' state is stored.

          A temporary directory will be used if none is provided.

  -s, --seed <SEED>
          The seed to use, if any, for keys and cluster ids.

          If none is provided, node keys and the cluster id will be randomized.

  -p, --prime-bits <PRIME_BITS>
          The number of bits for the prime number to be used.

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
- Wallet keys: 14 private keys are written to a file in the specified directory or a temporary one.
- payment configuration (blockchain info) written to a file
  - blockchain_rpc_endpoint
  - chain_id
  - payments_sc_address
  - blinding_factors_manager_sc_address
- bootnode
- websocket

### Stop the local devnet

To stop the local devnet, run

```bash
killall nillion-devnet
```
