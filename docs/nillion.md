# nillion

The nillion tool is a command line version of the Nillion Client that can be used to store secrets, retrieve a secret, store a program, compute on a program, get cluster information, check the preprocessing pool status, and display node and user ids from keys.

nillion can be run against the Nillion Network or against a local cluster spun up with nillion-devnet. If nillion is running against your local cluster, use the cluster id, bootnodes, smart contract addresses, chain id, rpc url endpoint values that are [local cluster outputs](nillion-devnet#local-cluster-outputs) as nillion options.

```bash
Usage: nillion [OPTIONS] -b <BOOTNODES> <COMMAND>

Commands:
  store-secrets              Store secrets in the network
  retrieve-secret            Retrieve a secret from the network
  store-program              Store a program in the network
  compute                    Perform a computation in the network
  cluster-information        Fetch the cluster's information
  preprocessing-pool-status  Fetch the preprocessing pool status for a cluster
  inspect-ids                Display the node/user ids derived from the provided keys
  help                       Print this message or the help of the given subcommand(s)

Options:
      --user-key <USER_KEY>
          The user key in base58

      --user-key-seed <USER_KEY_SEED>
          The seed to be used to derive user key

  -u, --user-key-path <USER_KEY_PATH>
          The path to the file that contains the user key in base58

      --node-key <NODE_KEY>
          The node key in base58

      --node-key-seed <NODE_KEY_SEED>
          The seed to be used to derive node key

  -n, --node-key-path <NODE_KEY_PATH>
          The path to the file that contains the node key in base58

  -b <BOOTNODES>
          A list of bootnodes to connect to.

          This needs to use libp2p multiaddress format.

  -l, --listen-address <LISTEN_ADDRESS>
          The address to listen on.

          If none is provided, the client will be expected to dial all of its peers (not receive incoming connections).

      --payments-rpc-endpoint <RPC_ENDPOINT>
          RPC endpoint URL

      --payments-sc-address <PAYMENTS_SC_ADDRESS>
          Payments smart contract address

      --blinding-factors-manager-sc-address <BLINDING_FACTORS_MANAGER_SC_ADDRESS>
          Blinding factors manager smart contract address

      --payments-private-key <PRIVATE_KEY>
          Wallet signer private key

      --payments-chain-id <CHAIN_ID>
          Wallet signer chain ID

      --blockchain-config-path <BLOCKCHAIN_CONFIG_PATH>
          Path to a configuration file containing the blockchain configurations

  -h, --help
          Print help (see a summary with '-h')

  -V, --version
          Print version
```

## Store secrets with nillion

Store secrets from a secrets file or by passing them into the command directly.

### store-secrets usage

```bash
nillion --user-key <YOUR_USER_KEY> \
	--node-key <YOUR_NODE_KEY> \
	-b <BOOTNODES> \
	--payments-private-key <PRIVATE_KEY> \
	--payments-chain-id <CHAIN_ID> \
	--payments-rpc-endpoint <BLOCKCHAIN_RPC_ENDPOINT> \
	--payments-sc-address <PAYMENTS_SC_ADDRESS> \
	--blinding-factors-manager-sc-address <BLINDING_FACTORS_MANAGER_SC_ADDRESS> \
  store-secrets \
  [OPTIONS] \
  --cluster-id <CLUSTER_ID> \
  --dealer-name <DEALER_NAME> \
  [PROGRAM_ID]
```

```bash
# Arguments:
  [PROGRAM_ID]
          The program id that the store is for, if any

Options:
      --int-secret <INTEGER_SECRETS>
          An integer secret.

          These must follow the pattern `<name>=<value>`.

          [aliases: i]

      --uint-secret <UNSIGNED_INTEGER_SECRETS>
          An unsigned integer secret.

          These must follow the pattern `<name>=<value>`.

          [aliases: ui]

      --secrets-path <SECRETS_PATH>
          A path to load secrets from

  -c, --cluster-id <CLUSTER_ID>
          The cluster id to perform the operation on

      --authorize-user-execution <AUTHORIZE_USER_EXECUTION>
          Give execution access to this user on the secret we're uploading

      --dealer-name <DEALER_NAME>
          Dealer name is used by the program to identify the input owners

  -h, --help
          Print help (see a summary with '-h')
```

### Example secrets file

```
# Secrets file with 2 secrets of type SecretInteger
integers:
  my_secret1: 6
  my_secret2: 4
```

## Retrieve a secret with nillion

Retrieve a secret by store id and secret id

### retrieve-secret usage

```bash
nillion --user-key <YOUR_USER_KEY> \
	--node-key <YOUR_NODE_KEY> \
	-b <BOOTNODES> \
	--payments-private-key <PRIVATE_KEY> \
	--payments-chain-id <CHAIN_ID> \
	--payments-rpc-endpoint <BLOCKCHAIN_RPC_ENDPOINT> \
	--payments-sc-address <PAYMENTS_SC_ADDRESS> \
	--blinding-factors-manager-sc-address <BLINDING_FACTORS_MANAGER_SC_ADDRESS> \
  retrieve-secret \
  --cluster-id <CLUSTER_ID> \
  --store-id <STORE_ID> \
  --secret-id <SECRET_ID>
```

```bash
Options:
  -c, --cluster-id <CLUSTER_ID>  The cluster id to perform the operation on
      --store-id <STORE_ID>      The store id to retrieve
      --secret-id <SECRET_ID>    The specific secret id to be retrieved
  -h, --help                     Print help
```

## Store a program with nillion

Name and store a compiled Nada program on the network.

### store-program usage

```bash
nillion --user-key <YOUR_USER_KEY> \
	--node-key <YOUR_NODE_KEY> \
	-b <BOOTNODES> \
	--payments-private-key <PRIVATE_KEY> \
	--payments-chain-id <CHAIN_ID> \
	--payments-rpc-endpoint <BLOCKCHAIN_RPC_ENDPOINT> \
	--payments-sc-address <PAYMENTS_SC_ADDRESS> \
	--blinding-factors-manager-sc-address <BLINDING_FACTORS_MANAGER_SC_ADDRESS> \
  store-program \
  --cluster-id <CLUSTER_ID> \
  <PROGRAM_PATH> \
  <PROGRAM_NAME>
```

```bash
Arguments:
  <PROGRAM_PATH>
  <PROGRAM_NAME>  The name of the program
```

## Compute on a program with nillion

Compute on a stored program by program id with stored secrets, secrets and public variables from files, or secrets and public variables input directly in the command

### compute usage

```bash
nillion --user-key <YOUR_USER_KEY> \
	--node-key <YOUR_NODE_KEY> \
	-b <BOOTNODES> \
	--payments-private-key <PRIVATE_KEY> \
	--payments-chain-id <CHAIN_ID> \
	--payments-rpc-endpoint <BLOCKCHAIN_RPC_ENDPOINT> \
	--payments-sc-address <PAYMENTS_SC_ADDRESS> \
	--blinding-factors-manager-sc-address <BLINDING_FACTORS_MANAGER_SC_ADDRESS> \
  compute \
  [OPTIONS] \
  --cluster-id <CLUSTER_ID> \
  <PROGRAM_ID>
```

```bash
Arguments:
  <PROGRAM_ID>
          The id of the program to be run

Options:
  -c, --cluster-id <CLUSTER_ID>
          The cluster id to perform the operation on

      --store-id <STORE_IDS>
          A store secret id to be used..

      --result-node <RESULT_NODES>
          A result node's party id.

          Not providing any result nodes means the dealer node will be the defaulted as the result node.

      --result-node-name <RESULT_NODE_NAMES>
          A result node's name

      --bind-dealer <BIND_DEALER>


      --int-secret <INTEGER_SECRETS>
          An integer secret.

          These must follow the pattern `<name>=<value>`.

          [aliases: i]

      --uint-secret <UNSIGNED_INTEGER_SECRETS>
          An unsigned integer secret.

          These must follow the pattern `<name>=<value>`.

          [aliases: ui]

      --secrets-path <SECRETS_PATH>
          A path to load secrets from

      --int-public-variable <INTEGER_PUBLIC_VARIABLES>
          An integer public variable.

          These must follow the pattern `<name>=<value>`.

          [aliases: ip]

      --uint-public-variable <UNSIGNED_INTEGER_PUBLIC_VARIABLES>
          An unsigned integer public variable.

          These must follow the pattern `<name>=<value>`.

          [aliases: uip]

      --public-variables-path <PUBLIC_VARIABLES_PATH>
          A path to load secrets from

  -h, --help
          Print help (see a summary with '-h')
```

### Example public variables file

```
# Public variables file with 2 public variables of type PublicVariableInteger
integers:
  my_public_variable1: 20
  my_public_variable2: 12
```

## Get cluster information with nillion

Get info about the cluster

### cluster-information usage

```bash
nillion --user-key <YOUR_USER_KEY> \
	--node-key <YOUR_NODE_KEY> \
	-b <BOOTNODES> \
	--payments-private-key <PRIVATE_KEY> \
	--payments-chain-id <CHAIN_ID> \
	--payments-rpc-endpoint <BLOCKCHAIN_RPC_ENDPOINT> \
	--payments-sc-address <PAYMENTS_SC_ADDRESS> \
	--blinding-factors-manager-sc-address <BLINDING_FACTORS_MANAGER_SC_ADDRESS> \
  cluster-information \
  <CLUSTER_ID>

Arguments:
  <CLUSTER_ID>  The cluster id to query for

Options:
  -h, --help  Print help
```

## Check the preprocessing pool status with nillion

Fetch the preprocessing pool status for a cluster

### preprocessing-pool-status usage

```bash
nillion --user-key <YOUR_USER_KEY> \
	--node-key <YOUR_NODE_KEY> \
	-b <BOOTNODES> \
	--payments-private-key <PRIVATE_KEY> \
	--payments-chain-id <CHAIN_ID> \
	--payments-rpc-endpoint <BLOCKCHAIN_RPC_ENDPOINT> \
	--payments-sc-address <PAYMENTS_SC_ADDRESS> \
	--blinding-factors-manager-sc-address <BLINDING_FACTORS_MANAGER_SC_ADDRESS> \
  preprocessing-pool-status \
  <CLUSTER_ID>

Arguments:
  <CLUSTER_ID>  The cluster id to query for

Options:
  -h, --help  Print help
```

## Display node and user ids with nillion

Check the peer id of the node and the user id of the user.

### inspect-ids usage

```bash
nillion --user-key <YOUR_USER_KEY> \
	--node-key <YOUR_NODE_KEY> \
	-b <BOOTNODES> \
	--payments-private-key <PRIVATE_KEY> \
	--payments-chain-id <CHAIN_ID> \
	--payments-rpc-endpoint <BLOCKCHAIN_RPC_ENDPOINT> \
	--payments-sc-address <PAYMENTS_SC_ADDRESS> \
	--blinding-factors-manager-sc-address <BLINDING_FACTORS_MANAGER_SC_ADDRESS> \
  inspect-ids

Options:
  -h, --help  Print help
```
