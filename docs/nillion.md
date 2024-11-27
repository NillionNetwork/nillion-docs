# nillion

The `nillion` tool is a command line version of the Nillion Client. We refer to the tool as the CLI Client.

The nillion tool can be used to generate user keys, generate node keys, store secrets, retrieve a secret, store a program, compute on a program, get cluster information, check the preprocessing pool status, and display node and user ids from keys.

nillion can be run against the Nillion Network or against a local cluster spun up with nillion-devnet. If nillion is running against your local cluster, use the cluster id, bootnodes, smart contract addresses, chain id, rpc url endpoint values that are [local cluster outputs](/nillion-devnet#devnet-outputs) as nillion options.

## Installation

Follow instructions to [install the Nillion SDK and Tools](/nillion-sdk-and-tools#installation), which include `nillion` tool installation

# Usage

```bash
Usage: nillion [OPTIONS] <COMMAND>

Commands:
  store-values               Store values in the network
  retrieve-values            Retrieve values from the network
  store-program              Store a program in the network
  compute                    Perform a computation in the network
  cluster-information        Fetch the cluster information
  delete-values              Delete values from the network
  preprocessing-pool-status  Fetch the preprocessing pool status for a cluster
  inspect-ids                Display the node/user ids derived from the provided keys
  shell-completions          Generate shell completions
  retrieve-permissions       Retrieve permissions for stored secrets
  overwrite-permissions      Overwrite permissions on a stored secrets
  identity-gen               Generate user identities
  networks                   Manage network configurations
  identities                 Manage identities
  context                    Manage the context to use for all upcoming command invocations
  help                       Print this message or the help of the given subcommand(s)

Options:
  -i, --identity <IDENTITY>  Identities configuration
  -n, --network <NETWORK>    Network configuration name
  -h, --help                 Print help
  -V, --version              Print version
```

For any of the commands listed above, you can run `nillion <COMMAND> --help` and get detailed information on usage.