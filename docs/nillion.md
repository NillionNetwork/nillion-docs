# nillion

The `nillion` tool is a command line version of the Nillion Client. We refer to the tool as the CLI Client.

The nillion tool can be used to generate user keys, generate node keys, store secrets, retrieve a secret, store a program, compute on a program, get cluster information, check the preprocessing pool status, and display node and user ids from keys.

nillion can be run against the Nillion Network or against a local cluster spun up with nillion-devnet. If nillion is running against your local cluster, use the cluster id, bootnodes, smart contract addresses, chain id, rpc url endpoint values that are [local cluster outputs](/nillion-devnet#devnet-outputs) as nillion options.

## Installation

Follow instructions to [install the Nillion SDK and Tools](/nillion-sdk-and-tools#installation), which include `nillion` tool installation

# Usage

```bash
Usage: nillion [OPTIONS] -b <BOOTNODES> <COMMAND>
Commands:
  store-values               Store values in the network
  retrieve-value             Retrieve a value from the network
  store-program              Store a program in the network
  compute                    Perform a computation in the network
  cluster-information        Fetch the cluster's information
  delete-values              Delete values from the network
  preprocessing-pool-status  Fetch the preprocessing pool status for a cluster
  inspect-ids                Display the node/user ids derived from the provided keys
  shell-completions          Generate shell completions
  node-key-gen               Generate Node keys
  user-key-gen               Generate User keys
  retrieve-permissions       Retrieve permissions for stored secrets
  set-permissions            Set permissions on a stored secrets
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

  -w <WEBSOCKET_BOOTNODES>
          A list of websocket bootnode addresses to connect to.

          This needs to use libp2p multiaddress format.

  -l, --listen-address <LISTEN_ADDRESS>
          The address to listen on.

          If none is provided, the client will be expected to dial all of its peers (not receive incoming connections).

      --nilchain-rpc-endpoint <NILCHAIN_RPC_ENDPOINT>
          The nilchain RPC endpoint

      --nilchain-private-key <NILCHAIN_PRIVATE_KEY>
          The nilchain payments private key

      --gas-price <GAS_PRICE>
          The gas price to use, in unil units

  -h, --help
          Print help (see a summary with '-h')

  -V, --version
          Print version
```

## Generate user key with nillion

Generate a Nillion [user key](concepts.md#user-key) and store it in a file

### user-key-gen usage

```bash
nillion user-key-gen <FILENAME>
```

```
Arguments:
  <FILENAME>  key filename

Options:
  -s, --seed <SEED>  seed to generate the key
  -h, --help         Print help
```

## Generate node key with nillion

Generate a Nillion [node key](concepts.md#node-key) and store it in a file

### node-key-gen usage

```bash
nillion node-key-gen <FILENAME>
```

```
Arguments:
  <FILENAME>  key filename

Options:
  -s, --seed <SEED>  seed to generate the key
  -h, --help         Print help
```

## Store values with nillion

Store values in the network

### store-values usage

```bash
nillion \
    -b <YOUR_BOOTNODE> \
    --nilchain-private-key <YOUR_PRIVATE_KEY> \
    --nilchain-rpc-endpoint <YOUR_RPC_ENDPOINT> \
    --node-key-seed <YOUR_NODE_KEY_SEED> \
    --user-key-seed <YOUR_USER_KEY_SEED> \
    store-values \
    --secret-integer <name>=<value> \
    --cluster-id <YOUR_CLUSTER_ID> \
    --ttl-days <NUM_DAYS>
```

```bash
Arguments:
  [PROGRAM_ID]
          The program id that the store is for, if any

Options:
  -i, --public-integer <INTEGERS>
          An integer public variable.

          These must follow the pattern `<name>=<value>`.

      --public-unsigned-integer <UNSIGNED_INTEGERS>
          An unsigned integer public variable.

          These must follow the pattern `<name>=<value>`.

          [aliases: ui]

      --secret-integer <SECRET_INTEGERS>
          An integer secret.

          These must follow the pattern `<name>=<value>`.

          [aliases: si]

      --secret-unsigned-integer <SECRET_UNSIGNED_INTEGERS>
          An unsigned integer secret.

          These must follow the pattern `<name>=<value>`.

          [aliases: sui]

      --array-public-integer <ARRAY_INTEGERS>
          An array of integer public variables

          The expected pattern is `<name>=<comma-separated-value>`.

          Example: array1=1,2,3

          [aliases: ai]

      --array-public-unsigned-integer <ARRAY_UNSIGNED_INTEGERS>
          An array of unsigned integer public variables

          The expected pattern is `<name>=<comma-separated-value>`.

          Example: array1=1,2,3

          [aliases: aui]

      --array-secret-integer <ARRAY_SECRET_INTEGERS>
          An array of integer secrets

          The expected pattern is `<name>=<comma-separated-value>`.

          Example: array1=1,2,3

          [aliases: asi]

      --array-secret-unsigned-integer <ARRAY_SECRET_UNSIGNED_INTEGERS>
          An array of unsigned integer secrets

          The expected pattern is `<name>=<comma-separated-value>`.

          Example: array1=1,2,3

          [aliases: asui]

      --secret-blob <SECRET_BLOBS>
          A blob secret.

          These must follow the pattern `<name>=<value>` and the value must be encoded in base64.

          [aliases: sb]

      --nada-values-path <NADA_VALUES_PATH>
          A path to load secrets from

  -t, --ttl-days <TTL_DAYS>
          The time to live for the values in days

  -c, --cluster-id <CLUSTER_ID>
          The cluster id to perform the operation on

      --authorize-user-execution <AUTHORIZE_USER_EXECUTION>
          Give execution access to this user on the secret we're uploading

  -h, --help
          Print help (see a summary with '-h')
```

## Retrieve a value with nillion

Retrieve a value from the network

### retrieve-secret usage

```bash
nillion \
    -b <YOUR_BOOTNODE> \
    --nilchain-private-key <YOUR_PRIVATE_KEY> \
    --nilchain-rpc-endpoint <YOUR_RPC_ENDPOINT> \
    --node-key-seed <YOUR_NODE_KEY_SEED> \
    --user-key-seed <YOUR_USER_KEY_SEED> \
    retrieve-value \
    --cluster-id <YOUR_CLUSTER_ID> \
    --secret-id <YOUR_SECRET_NAME> \
    --store-id <YOUR_STORE_ID>
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
nillion \
    -b <YOUR_BOOTNODE> \
    --nilchain-private-key <YOUR_PRIVATE_KEY> \
    --nilchain-rpc-endpoint <YOUR_RPC_ENDPOINT> \
    --node-key-seed <YOUR_NODE_KEY_SEED> \
    --user-key-seed <YOUR_USER_KEY_SEED> \
    store-program \
    --cluster-id <CLUSTER_ID> \
    <PROGRAM_PATH> <PROGRAM_NAME>
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
nillion \
    -b <YOUR_BOOTNODE> \
    --nilchain-private-key <YOUR_PRIVATE_KEY> \
    --nilchain-rpc-endpoint <YOUR_RPC_ENDPOINT> \
    --node-key-seed <YOUR_NODE_KEY_SEED> \
    --user-key-seed <YOUR_USER_KEY_SEED> \
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

## Get cluster information with nillion

Get info about the cluster

### cluster-information usage

```bash
nillion \
    -b <YOUR_BOOTNODE> \
    --nilchain-private-key <YOUR_PRIVATE_KEY> \
    --nilchain-rpc-endpoint <YOUR_RPC_ENDPOINT> \
    --node-key-seed <YOUR_NODE_KEY_SEED> \
    --user-key-seed <YOUR_USER_KEY_SEED> \
  cluster-information \
  --cluster-id <CLUSTER_ID> \

Arguments:
  <CLUSTER_ID>  The cluster id to query for

Options:
  -h, --help  Print help
```

## Check the preprocessing pool status with nillion

Fetch the preprocessing pool status for a cluster

### preprocessing-pool-status usage

```bash
nillion \
    -b <YOUR_BOOTNODE> \
    --nilchain-private-key <YOUR_PRIVATE_KEY> \
    --nilchain-rpc-endpoint <YOUR_RPC_ENDPOINT> \
    --node-key-seed <YOUR_NODE_KEY_SEED> \
    --user-key-seed <YOUR_USER_KEY_SEED> \
  preprocessing-pool-status \
  --cluster-id <CLUSTER_ID> \

Arguments:
  <CLUSTER_ID>  The cluster id to query for

Options:
  -h, --help  Print help
```

## Display node and user ids with nillion

Check the peer id of the node and the user id of the user.

### inspect-ids usage

```bash
nillion \
    -b <YOUR_BOOTNODE> \
    --nilchain-private-key <YOUR_PRIVATE_KEY> \
    --nilchain-rpc-endpoint <YOUR_RPC_ENDPOINT> \
    --node-key-seed <YOUR_NODE_KEY_SEED> \
    --user-key-seed <YOUR_USER_KEY_SEED> \
  inspect-ids
    --cluster-id <CLUSTER_ID> \

Options:
  -h, --help  Print help
```
