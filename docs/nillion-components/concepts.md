# Concepts

### Users

A Nillion Network user has a [Ed25519 key pair](https://cryptography.io/en/latest/hazmat/primitives/asymmetric/ed25519/#key-interfaces) consisting of a public and private key.

#### User Key

The `user_key` is the user's private key. The user key should never be shared publicly, as it unlocks access and permissions to secrets stored on the network.

#### User ID

The `user_id` is the user's public key, and is the public user identifier. Other parties can grant a user permissions to a secret based on their user id.&#x20;

### Programs

Programs are written in Nada, then compiled to generate a mid-level intermediate (MIR) representation of the program that can be stored in the Nillion Network for future use.

#### Program ID

The `program_id` is the identifier for a program stored in the Nillion Network.

#### Party

A `Party` is a named entity involved in Nada program computation. Parties can supply inputs to calculations, reveal outputs of calculations, or both.

#### Inputs

An `Input` is named external data provided by a specific [Party](concepts.md#party) for Nada program computation. Inputs can be secret or public.

#### Outputs

An `Output` is the named result of a Nada program revealed to a specific [Party](concepts.md#party) after computation.

### Secrets

A Nillion `Secret`, identified by a `store_id`, consists of one or more named secret values.

#### Store ID

The `store_id` is the identifier for a set of one or more named secret values stored in the Nillion Network. This `store_id` is returned by the network as a result of storing a secret.

#### Secret Name

The `secret_name` is a user given name for a single secret value.

### Permissions

Permissions are access control mechanisms attached to a secret stored in the network

#### Default Permissions

Any `user_id` given "default permissions" at store time through `default_for_user(user_id)` will have permission to retrieve and update the permissions of a secret.

#### Secret Permissions

A `user_id` can be given retrieve, update, delete, and/or compute permissions on a secret.

* retrieve / read a secret: `add_retrieve_permissions(user_id)`
* update a secret: `add_update_permissions(user_id)`
* delete a secret: `add_delete_permissions(user_id)`
* compute on a secret: `add_compute_permissions({user_id: {program_id}})`

### Clusters

A cluster is a subset of the compute nodes that exist in the Nillion Network.

#### Cluster ID

The `cluster_id` is the identifier for a cluster of nodes in the Nillion Network.

### Nodes

Nodes in the Nillion Network have public and private key pairs.

#### Node Key

The `node_key` is the node's private key, which it keeps a secret.

#### Peer ID

The `peer_id` is a [libp2p concept](https://docs.libp2p.io/concepts/fundamentals/peers/#peer-id). Each node is a peer in the overall peer-to-peer Nillion Network. The `peer_id` serves as a unique identifier for each peer or node, and is a verifiable link between a peer and its public cryptographic key.

#### Bootnodes

Bootnodes are nodes designated as entry points of the Nillion Network. All the nodes require a list of bootnodes to be able to join the network. After a node dials the configured bootnodes and connects, the bootnodes introduce them to the rest of the network allowing the peer discovery process to start.

#### Dealer nodes

A dealer node is an SDK-based node that sends tasks to the Nillion Network.

#### Result nodes

A result node is an SDK-based node that receives the results of computations run on the Nillion Network.

#### Compute nodes

Compute nodes can perform all the functions of the Nillion Network including computation and storage.

#### Relay servers

Because dealer and result nodes can run anywhere (web browsers, other platforms), compute nodes are configured as relay servers with [libp2p's Circuit Relay protocol](https://github.com/libp2p/specs/blob/master/relay/circuit-v2.md). Dealers and result nodes can establish relay circuits with relay servers in order to operate in the network the same as the rest of the nodes.
