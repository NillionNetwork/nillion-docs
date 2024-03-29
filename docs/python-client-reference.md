# Python Client Reference

Nillion Client Python module.

<a id="py_nillion_client.AuthenticationError"></a>

### _exception_ py_nillion_client.AuthenticationError

Error related to authentication: invalid password, public key, or other internal errors

<a id="py_nillion_client.AuthenticationError.args"></a>

#### args

<a id="py_nillion_client.AuthenticationError.with_traceback"></a>

#### with_traceback()

Exception.with*traceback(tb) –
set self.*\_traceback\_\_ to tb and return self.

<a id="py_nillion_client.ClusterDescriptor"></a>

### _class_ py_nillion_client.ClusterDescriptor

The [`ClusterDescriptor`](#py_nillion_client.ClusterDescriptor) contains attributes
that describe the cluster configuration. It includes information
about:

1. Cluster id;
2. Security parameters (statistical security and security threshold);
3. Parties (nodes) in the cluster;
4. Preprocessing configuration.

This object is returned when invoking [`NillionClient`](#py_nillion_client.NillionClient) cluster_information method.

#### Example

```py3
cinfo = await client.cluster_information(args.cluster_id)
```

<a id="py_nillion_client.ClusterDescriptor.id"></a>

#### id

The Cluster identifier.

- **Return type:**
  A string containing the Nillion Cluster identifier.

#### Example

```py3
cinfo = await client.cluster_information(args.cluster_id)
print("Cluster id:", cinfo.id)
```

```text
>>> Cluster id: 147f8d45-2126-4a54-9a64-8141ee55f51a
```

<a id="py_nillion_client.ClusterDescriptor.kappa"></a>

#### kappa

The statistical security parameter kappa for this cluster.

- **Return type:**
  The value of the statistical security parameter kappa used in this cluster.

#### Example

```py3
cinfo = await client.cluster_information(args.cluster_id)
print("Statistical sec parameter kappa:", cinfo.kappa)
```

```text
>>> Statistical sec parameter kappa: 40
```

<a id="py_nillion_client.ClusterDescriptor.parties"></a>

#### parties

Cluster’s parties ids.

- **Return type:**
  A list of strings containing the party identifiers in the cluster.

#### Example

```py3
cinfo = await client.cluster_information(args.cluster_id)
print("Cluster parties' ids:", cinfo.parties)
```

```text
>>> Parties: {'12D3KooWJtRXjmV1HctQgvLUcrdxJ7cXwCHiL6PCheikN2rTJ2ZH',
              '12D3KooWHSveXS4DdXpCQyDDsp9D1x7fiTRnm1fsH9yJRpR6y4FM',
              '12D3KooWLV6HzUXpt6Tt5HUM5Fo3mpjvwsv9n4ADkJ962ArAZCvX'}
```

<a id="py_nillion_client.ClusterDescriptor.polynomial_degree"></a>

#### polynomial_degree

The polynomial degree used by this cluster. The polynomial
degree is directly related with the security threshold of the
Nillion network.

- **Returns:**
  - _An integer corresponding to the degree of the polynomial used_
  - _in the cluster for linear secret sharing._

#### Example

```py3
cinfo = await client.cluster_information(args.cluster_id)
print("Polynomial degree:", cinfo.polynomial_degree)
```

```text
>>> Polynomial degree: 1
```

<a id="py_nillion_client.ClusterDescriptor.preprocessing"></a>

#### preprocessing

The preprocessing configuration. It includes the batch size
of preprocessing material:

1. Alpha;
2. Lambda;
3. Comparison;
4. Division;
5. Modulo;
6. Public output equality.

- **Return type:**
  An instance of [`PreprocessingConfig`](#py_nillion_client.PreprocessingConfig) class.

#### Example

```py3
cinfo = await client.cluster_information(args.cluster_id)
cluster_preprocessing_info = cinfo.preprocessing
```

<a id="py_nillion_client.ClusterDescriptor.prime"></a>

#### prime

The prime number used in this cluster.

- **Return type:**
  The identifier of the prime used in the cluster.

#### Example

```py3
cinfo = await client.cluster_information(args.cluster_id)
print("Prime type:", cinfo.prime)
```

```text
>>> Prime: U256SafePrime
```

<a id="py_nillion_client.ComputeError"></a>

### _exception_ py_nillion_client.ComputeError

Error related to the computation itself: initialization, scheduling, or other internal errors

<a id="py_nillion_client.ComputeError.args"></a>

#### args

<a id="py_nillion_client.ComputeError.with_traceback"></a>

#### with_traceback()

Exception.with*traceback(tb) –
set self.*\_traceback\_\_ to tb and return self.

<a id="py_nillion_client.ComputeFinishedEvent"></a>

### _class_ py_nillion_client.ComputeFinishedEvent

The [`ComputeFinishedEvent`](#py_nillion_client.ComputeFinishedEvent) class is
returned by an async computation when the computation
has just finished.

This class has no public constructor and is received from
method [`NillionClient.next_compute_event()`](#py_nillion_client.NillionClient.next_compute_event).

<a id="py_nillion_client.ComputeFinishedEvent.result"></a>

#### result

The computation’s result, as a [`FinalResult`](#py_nillion_client.FinalResult) class.

Use the [`FinalResult.value()`](#py_nillion_client.FinalResult.value) method to
obtain the wrapped value.

- **Returns:**
  The [`FinalResult`](#py_nillion_client.FinalResult) class containing the final result
  of the computation. Use the [`FinalResult.value()`](#py_nillion_client.FinalResult.value) method to
  obtain the wrapped value.
- **Return type:**
  [FinalResult](#py_nillion_client.FinalResult)

#### Example

```py3
uuid = await client.compute(
    args.cluster_id,
    bindings,
    [store_id],
    args.compute_secrets,
    args.compute_public_variables,
)

while True:
    event = await client.next_compute_event()
    if isinstance(event, nillion.ComputeScheduledEvent):
        pass
    if isinstance(event, nillion.ComputeFinishedEvent) and event.uuid == uuid:
        print(
            f"Received computation result for {event.uuid}, result = {event.result}"
        )
        print(
            f"Received computation result value for {event.uuid}, value = {event.result.value}"
        )
        break
```

<a id="py_nillion_client.ComputeFinishedEvent.uuid"></a>

#### uuid

The computation’s UUID.

- **Returns:**
  Uuid
- **Return type:**
  str

#### Example

```py3
uuid = await client.compute(
    args.cluster_id,
    bindings,
    [store_id],
    args.compute_secrets,
    args.compute_public_variables,
)

while True:
    event = await client.next_compute_event()
    if isinstance(event, nillion.ComputeScheduledEvent):
        pass
    if isinstance(event, nillion.ComputeFinishedEvent) and event.uuid == uuid:
        print(
            f"Result for computation with UUID {event.uuid} is ready!"
        )
        break
```

<a id="py_nillion_client.ComputeScheduledEvent"></a>

### _class_ py_nillion_client.ComputeScheduledEvent

The [`ComputeScheduledEvent`](#py_nillion_client.ComputeScheduledEvent) class is
returned by an async computation when the computation is not finished yet.

This class has no public constructor and is received from
method [`NillionClient.next_compute_event()`](#py_nillion_client.NillionClient.next_compute_event).

<a id="py_nillion_client.ComputeScheduledEvent.uuid"></a>

#### uuid

The computation’s UUID. This outputs the same UUID
provided by the [`NillionClient.compute()`](#py_nillion_client.NillionClient.compute) method.

- **Returns:**
  Computation UUID.
- **Return type:**
  str

#### Example

```py3
uuid = await client.compute(
    args.cluster_id,
    bindings,
    [store_id],
    args.compute_secrets,
    args.compute_public_variables,
)

event = await client.next_compute_event()
if isinstance(event, nillion.ComputeScheduledEvent):
    computation_uuid = event.uuid
```

<a id="py_nillion_client.ConnectionMode"></a>

### _class_ py_nillion_client.ConnectionMode

This is a [`ConnectionMode`](#py_nillion_client.ConnectionMode) class. It designates the
connection mode to use in a client constructor. We support three
different modes:

1. Dialer ([`dialer()`](#py_nillion_client.ConnectionMode.dialer));
2. Direct ([`direct()`](#py_nillion_client.ConnectionMode.direct));
3. Relay ([`relay()`](#py_nillion_client.ConnectionMode.relay)).

<a id="py_nillion_client.ConnectionMode.dialer"></a>

#### dialer()

Specifies the client should connect in dialer mode.
In this mode the client only expects to dial nodes and does
not expect any incoming connection.

- **Return type:**
  [ConnectionMode](#py_nillion_client.ConnectionMode)

#### Example

```py3
connection_mode = ConnectionMode.dialer()
```

<a id="py_nillion_client.ConnectionMode.direct"></a>

#### direct()

Specifies a socket address structure for a listening client connection.

This mode is suited for clients that are backend services.

- **Parameters:**
  **str** – Socket address structure.
- **Return type:**
  [ConnectionMode](#py_nillion_client.ConnectionMode)

#### Example

```py3
connection_mode = ConnectionMode.direct('0.0.0.0:11337')
```

<a id="py_nillion_client.ConnectionMode.relay"></a>

#### relay()

Specifies the client connects to the Nillion Network in
relay mode. So, if others want to contact the client, they
have to do so through a relay node that the client is connected to
(all nodes in the network are relay nodes).

This mode is suited for clients that cannot open a port like
phones behind a CGNAT, desktop apps behind a NAT or Firewall, and others.

- **Return type:**
  [ConnectionMode](#py_nillion_client.ConnectionMode)

#### Example

```py3
connection_mode = ConnectionMode.relay()
```

<a id="py_nillion_client.DealerError"></a>

### _exception_ py_nillion_client.DealerError

Error related to the dealers: initialization, scheduling, unexpected errors

<a id="py_nillion_client.DealerError.args"></a>

#### args

<a id="py_nillion_client.DealerError.with_traceback"></a>

#### with_traceback()

Exception.with*traceback(tb) –
set self.*\_traceback\_\_ to tb and return self.

<a id="py_nillion_client.FinalResult"></a>

### _class_ py_nillion_client.FinalResult

This is a [`FinalResult`](#py_nillion_client.FinalResult) class that is returned
from a finished computation.

This class has no public constructor and is received from
method [`ComputeFinishedEvent.result()`](#py_nillion_client.ComputeFinishedEvent.result).

<a id="py_nillion_client.FinalResult.value"></a>

#### value

The result’s value of a computation.

- **Returns:**
  Result value from a computation.
- **Return type:**
  Dict

#### Example

```py3
uuid = await client.compute(
    args.cluster_id,
    bindings,
    [store_id],
    args.compute_secrets,
    args.compute_public_variables,
)

while True:
    event = await client.next_compute_event()
    if isinstance(event, nillion.ComputeScheduledEvent):
        pass
    if isinstance(event, nillion.ComputeFinishedEvent) and event.uuid == uuid:
        print(
            f"Received computation result value for {event.uuid}, value = {event.result.value}"
        )
        break
```

<a id="py_nillion_client.NillionClient"></a>

### _class_ py_nillion_client.NillionClient(node_key, bootnodes, connection_mode, user_key, payments_config, whitelist=None)

The [`NillionClient`](#py_nillion_client.NillionClient) class serves as
the primary tool for connecting to the Nillion
network and facilitating various operations.
It allows users to interact with the Nillion
network efficiently, including for the following actions:

1. Store Nada programs ([`store_program()`](#py_nillion_client.NillionClient.store_program));
2. Store secrets ([`store_secrets()`](#py_nillion_client.NillionClient.store_secrets));
3. Update secrets ([`update_secrets()`](#py_nillion_client.NillionClient.update_secrets));
4. Retrieve secrets ([`retrieve_secret()`](#py_nillion_client.NillionClient.retrieve_secret));
5. Delete secrets ([`delete_secrets()`](#py_nillion_client.NillionClient.delete_secrets));
6. Compute a Nada program over some secrets ([`compute()`](#py_nillion_client.NillionClient.compute));
7. Receive compute results ([`next_compute_event()`](#py_nillion_client.NillionClient.next_compute_event)).

An instance of [`NillionClient`](#py_nillion_client.NillionClient) can embody either
a dealer node, responsible for providing inputs, or a result
node, tasked with receiving computation outputs. Under the hood,
this spawns a set of actors and acts as a node in the network that
has both dealer and result node capabilities.

Note: multiple instances can be employed concurrently if required;
however, it is imperative that each instance possesses
a distinct [`NodeKey`](#py_nillion_client.NodeKey) when utilized within the
same interpreter.

- **Parameters:**
  - **node_key** ([_NodeKey_](#py_nillion_client.NodeKey)) – A private key to use for the Client node.
  - **bootnodes** (_list_ _of_ _str_) – A list of nodes belonging to the network (other may be discovered later).
  - **connection_mode** ([_ConnectionMode_](#py_nillion_client.ConnectionMode)) – How to connect to the network, either directly (indicating a listen address), through a relay server or as a dialer client.
  - **user_key** ([_UserKey_](#py_nillion_client.UserKey)) – User credentials to use.
  - **payments_config** ([_PaymentsConfig_](#py_nillion_client.PaymentsConfig)) – The payments configuration to use.
  - **whitelist** (_list_ _of_ _str_ _,_ _optional_) – A list of peer ids to connecto to/from.
- **Returns:**
  Instance of the NillionClient and an event receiver channel used to retrieve computation results.
- **Return type:**
  [NillionClient](#py_nillion_client.NillionClient)

#### Example

```py3
import py_nillion_client as nillion

node_key = nillion.NodeKey.from_file(os.getenv("NILLION_NODEKEY_PATH"))
bootnodes = [os.getenv("NILLION_BOOTNODE_MULTIADDRESS")]
connection_mode = nillion.ConnectionMode.dial()
user_key = nillion.UserKey.from_file(os.getenv("NILLION_USERKEY_PATH"))
rpc_endpoint = os.getenv("NILLION_BLOCKCHAIN_RPC_ENDPOINT")
wallet_private_key = os.getenv("NILLION_WALLET_PRIVATE_KEY")
chain_id = int(os.getenv("NILLION_CHAIN_ID"))
payments_address = os.getenv("NILLION_PAYMENTS_SC_ADDRESS")
blinding_factor_manager_address = os.getenv("NILLION_BLINDING_FACTORS_MANAGER_SC_ADDRESS")
payments_config = nillion.PaymentsConfig(
          rpc_endpoint,
          wallet_private_key,
          chain_id,
          payments_address,
          blinding_factor_manager_address,
      )

client = nillion.NillionClient(
      node_key,
      bootnodes,
      nillion.ConnectionMode.relay(),
      user_key,
      payments_config
  )
```

<a id="py_nillion_client.NillionClient.cluster_information"></a>

#### cluster_information(cluster_id)

Get information about a cluster by returning an instance of the [`ClusterDescriptor`](#py_nillion_client.ClusterDescriptor) class.
We can access various information about the cluster through its methods.

- **Parameters:**
  **cluster_id** (_str_) – UUID of the targeted preprocessing cluster.
- **Return type:**
  An instance of [`ClusterDescriptor`](#py_nillion_client.ClusterDescriptor) populated with the cluster information.

#### Example

```py3
cluster_id = os.getenv("NILLION_CLUSTER_ID")
await client.cluster_information(args.cluster_id)
```

<a id="py_nillion_client.NillionClient.compute"></a>

#### compute(cluster_id, bindings, store_ids, secrets, public_variables)

Requests a compute action in the Nillion Network for a specific Nada
program under a set of secrets.

Note: This method does not directly output the result of the Nada
program. Instead, it returns a computation UUID. To obtain the result,
you’ll need to fetch it separately. The UUID, in conjunction with the
event provided by the corresponding NillionClient instance channel,
allows you to retrieve the computation results. Please refer to the e
xample below for clarification.

- **Parameters:**
  - **cluster_id** (_str_) – UUID of the targeted preprocessing cluster
  - **bindings** ([_ProgramBindings_](#py_nillion_client.ProgramBindings)) – The prepared program specification and secret bindings
  - **secrets** ([_Secrets_](#py_nillion_client.Secrets)) – Additional secrets to use for the computation
  - **store_ids** (_list_ _of_ _str_) – List of the store IDs (uuids) of the secrets to use for the computation
  - **public_variables** ([_PublicVariables_](#py_nillion_client.PublicVariables)) – Public variables to use for the computation
- **Returns:**
  A computation UUID.
- **Return type:**
  str

#### Example

```py3
import py_nillion_client as nillion

bindings = nillion.ProgramBindings(args.program_id)
bindings.add_input_party("Dealer", client.party_id())
store_id = await client.store_secrets(
    args.cluster_id, bindings, args.store_secrets, None
)

bindings = nillion.ProgramBindings(args.program_id)
bindings.add_input_party("Dealer", client.party_id())
bindings.add_output_party("Result", client.party_id())

uuid = await client.compute(
    args.cluster_id,
    bindings,
    [store_id],
    args.compute_secrets,
    args.compute_public_variables,
)

while True:
    event = await client.next_compute_event()
    if isinstance(event, nillion.ComputeScheduledEvent):
        pass
    if isinstance(event, nillion.ComputeFinishedEvent) and event.uuid == uuid:
        print(
            f"Received computation result for {event.uuid}, result = {event.result}"
        )
        print(
            f"Received computation result value for {event.uuid}, value = {event.result.value}"
        )
        break
```

<a id="py_nillion_client.NillionClient.delete_secrets"></a>

#### delete_secrets(cluster_id, store_id)

Delete existing secrets.

- **Parameters:**
  - **cluster_id** (_str_) – UUID of the targeted preprocessing cluster
  - **store_id** (_str_) – The secret’s store identifier to be deleted (returned when calling [`store_secrets()`](#py_nillion_client.NillionClient.store_secrets))
- **Return type:**
  None

#### Example

```py3
await client.delete_secrets(cluster_id, store_id)
```

<a id="py_nillion_client.NillionClient.next_compute_event"></a>

#### next_compute_event()

Returns the state of the computation in the Nillin Network.

If the event is from an ongoing computation, it only includes
the corresponding UUID from the [`compute()`](#py_nillion_client.NillionClient.compute) process.
Once the computation is complete, the event includes both the
UUID and the computation result ([`FinalResult`](#py_nillion_client.FinalResult)).

- **Returns:**
  Either event type will pull the next compute event from the internal
  result channel which can be inspected to determine if compute operation
  has completed
- **Return type:**
  [ComputeScheduledEvent](#py_nillion_client.ComputeScheduledEvent) | [ComputeFinishedEvent](#py_nillion_client.ComputeFinishedEvent)

#### Example

```py3
uuid = await client.compute(
    args.cluster_id,
    bindings,
    [store_id],
    args.compute_secrets,
    args.compute_public_variables,
)

while True:
    event = await client.next_compute_event()
    if isinstance(event, nillion.ComputeScheduledEvent):
        print(
            f"Waiting for computation with UUID={event.uuid} to finish."
        )
    if isinstance(event, nillion.ComputeFinishedEvent) and event.uuid == uuid:
        print(
            f"Received computation result for {event.uuid}, result = {event.result}"
        )
        print(
            f"Received computation result value for {event.uuid}, value = {event.result.value}"
        )
        break
```

<a id="py_nillion_client.NillionClient.party_id"></a>

#### party_id()

Returns the SDK client’s instance party ID, which can be used
by the client to create program bindings ([`ProgramBindings`](#py_nillion_client.ProgramBindings),
check examples).

Effectively, the party ID is equivalent to the the Peer ID
used within libp2p for inter-node communication. It is a hash
generated from the public key of the node’s key-pair ([`NodeKey`](#py_nillion_client.NodeKey)). Not to
be confused with the [`user_id()`](#py_nillion_client.NillionClient.user_id) which is generated from the
public key of the user’s key-pair ([`UserKey`](#py_nillion_client.UserKey)).

Read more about [party_id](/concepts#party-id) and [peer_id](concepts#peer-id)

- **Returns:**
  UUID of libp2p party identifier.
- **Return type:**
  str

#### Example

```py3
print("Party ID:", client.party_id())
```

<a id="py_nillion_client.NillionClient.retrieve_secret"></a>

#### retrieve_secret(cluster_id, store_id, secret_id)

Retrieve a secret stored in the Nillion Network.

To retrieve the value of the secret, you need to use
the value attribute on the second element of the
output tuple. Check the example below to read the value
of a secret integer.

- **Parameters:**
  - **cluster_id** (_str_) – UUID of the targeted preprocessing cluster.
  - **store_id** (_str_) – The secret’s store ID (returned when calling [`store_secrets()`](#py_nillion_client.NillionClient.store_secrets)).
  - **secret_id** (_str_) – The secret’s ID.
- **Returns:**
  The secret ID as a UUID as well as the secret itself.
- **Return type:**
  tuple

#### Example

```py3
secret_name = "fortytwo"
result = await client.retrieve_secret(cluster_id, args.store_id, secret_name)
print("Secret ID: ", result[0])
print("Secret Value: ", result[1])
```

```text
>>> Secret ID: 2424a65c-d20c-4635-b864-06c064188dd4
>>> Secret Value: 42
```

<a id="py_nillion_client.NillionClient.store_program"></a>

#### store_program(cluster_id, program_name, program_mir_path)

Store programs in the Nillion Network.

The program_id used by [`store_secrets()`](#py_nillion_client.NillionClient.store_secrets) and [`compute()`](#py_nillion_client.NillionClient.compute) can be
built as follows:

```py3
client.user_id() + "/" + program_name
```

where client is a [`NillionClient`](#py_nillion_client.NillionClient) instantiation and program_name
is the name of the program.

- **Parameters:**
  - **cluster.** ( _\* cluster_id - UUID_ _of_ _the targeted preprocessing_) –
  - **store.** ( _\* program_name - Name_ _of_ _the program to_) –
  - **stored.** ( _\* program_mir_path - Path to the MIR program being_) –
- **Returns:**
  The action identifier associated with the action of storing a program
- **Return type:**
  str

#### Example

```py3
program_name = "prog"
program_mir_path = "programs-compiled/prog.nada.bin"

# Store program in the Network
print(f"Storing program in the network: {program_name}")
action_id = await client.store_program(
    args.cluster_id, program_name, program_mir_path
)
print("action_id is: ", action_id)
program_id = client.user_id() + "/" + program_name
print("program_id is: ", program_id)
```

<a id="py_nillion_client.NillionClient.store_secrets"></a>

#### store_secrets(cluster_id, bindings, secrets, permissions)

Store secrets in the Nillion Network.

- **Parameters:**
  - **cluster_id** (_str_) – UUID of the targeted preprocessing cluster
  - **bindings** ([_ProgramBindings_](#py_nillion_client.ProgramBindings) _,_ _optional_) – bindings between network parties and the parties are defined by the program
  - **secrets** ([_Secrets_](#py_nillion_client.Secrets)) – The secrets to store; this is a hash map indexed by secret IDs
  - **permissions** ([_Permissions_](#py_nillion_client.Permissions) _,_ _optional_) – permissions to be set. By default the user has update and retrieve permissions on the secret as well as compute permissions for the program bound, should there be a program bound.
- **Returns:**
  A store identifier that can be used to retrieve the secret.
- **Return type:**
  str
- **Raises:**
  **TypeError** – When using bindings, the input party name provided (e.g. “InputPartyName”) must
  match the input party name in the Nada program. Othersiwe, we get a TypeError.

#### Example

Here are some examples of how to use this function. Note that to
give permissions we use the User ID and to bind a secret to a
program we use the Party ID.

```py3
###########################
# Example 1 - Simple      #
###########################
# Notice that both bindings and permissions are set to None.
# Bindings need to be set to use secrets in programs
# Permissions need to be set to allow users other than the secret creator to use the secret
secrets = nillion.Secrets({"fortytwo": nillion.SecretInteger(42)})
store_id = await client.store_secrets(
    cluster_id, None, secrets, None
)

###########################
# Example 2 - Permissions #
###########################
permissions = nillion.Permissions.default_for_user(client.user_id())
permissions.add_retrieve_permissions(set([args.retriever_user_id]))
secrets = nillion.Secrets({"fortytwo": nillion.SecretInteger(42)})
store_id = await client.store_secrets(
    cluster_id, None, secrets, permissions
)
###########################
# Example 3 - Bindings    #
###########################
# Bind to the corresponding party in the program. In this example,
# we are just binding the client but we can bind any other user
# through its Party ID.
bindings = nillion.ProgramBindings(program_id)
# Important note: the name "InputPartyName" must match the input
# party name in the Nada program. Otherwise, the `store_secrets` action
# is not completed and it raises a TypeError.
bindings.add_input_party("InputPartyName", client.party_id())
secrets = nillion.Secrets({"fortytwo": nillion.SecretInteger(42)})
store_id = await client.store_secrets(
    cluster_id, bindings, secrets, None
)
```

<a id="py_nillion_client.NillionClient.update_permissions"></a>

#### update_permissions(cluster_id, store_id, permissions)

Update permissions for already stored secret in the Nillion Network.

- **Parameters:**
  - **cluster_id** (_str_) – UUID of the targeted preprocessing cluster
  - **store_id** (_str_) – The secret’s store ID (returned when calling [`store_secrets()`](#py_nillion_client.NillionClient.store_secrets))
  - **permissions** ([_Permissions_](#py_nillion_client.Permissions) _,_ _optional_) – permissions to be set.
- **Returns:**
  The unique identifier of this update operation ID that can be used to help troubleshoot issues with this operation.
- **Return type:**
  str

#### Example

```py3
# Store
secrets = nillion.Secrets({"fortytwo": nillion.SecretInteger(42)})
store_id = await client.store_secrets(
  cluster_id, None, secrets, None
)
# Update permissions
permissions = nillion.Permissions.default_for_user(client.user_id())
permissions.add_retrieve_permissions(set([args.retriever_user_id]))
updated_store_id = await client.update_permissions(args.cluster_id, store_id, permissions)

print("Stored secret id: ", store_id)
print("Updated stored secret id: ", updated_store_id)
```

```text
>>> Stored secret id: 3c504263-fd3f-40b8-8a1d-9056b7846637
>>> Updated stored secret id: ccdb8036-2635-40d9-9144-2cc89551fce9
```

<a id="py_nillion_client.NillionClient.update_secrets"></a>

#### update_secrets(cluster_id, store_id, bindings, secrets)

Update secrets already stored in the Nillion Network.

- **Parameters:**
  - **cluster_id** (_str_) – UUID of the targeted preprocessing cluster.
  - **store_id** (_str_) – The secret’s store ID (returned when calling [`store_secrets()`](#py_nillion_client.NillionClient.store_secrets)).
  - **bindings** ([_ProgramBindings_](#py_nillion_client.ProgramBindings) _,_ _optional_) – bindings between network parties and the parties are defined by the program.
  - **secrets** ([_Secrets_](#py_nillion_client.Secrets)) – The secrets to update; this is a hash map indexed by secret IDs.
- **Returns:**
  The unique identifier of this update operation.
- **Return type:**
  str

#### Example

```py3
updated_secrets = nillion.Secrets({"fortytwo": nillion.SecretInteger(42)})
await client.update_secrets(
    args.cluster_id, store_id, None, updated_secrets
)
```

<a id="py_nillion_client.NillionClient.user_id"></a>

#### user_id()

Returns SDK client’s user ID, which is the public user
identifier.

The user ID is used to:

1. Generate a program ID (identification of a program in the Nillion Network). Check example in [`store_program()`](#py_nillion_client.NillionClient.store_program);
2. Grant a user permission to use secrets. Check [`Permissions`](#py_nillion_client.Permissions).

It is a hash generated from the public key of the user’s key-pair ([`UserKey`](#py_nillion_client.UserKey)). Not to
be confused with the [`party_id()`](#py_nillion_client.NillionClient.party_id) which is the generated from the
public key of the node’s key-pair ([`NodeKey`](#py_nillion_client.NodeKey)).

Please check [[https://docs.nillion.com/concepts](Nillion](https://docs.nillion.com/concepts](Nillion) Docs)
for more information.

- **Returns:**
  Client’s user identifier.
- **Return type:**
  str

#### Example

```py3
print("Party ID:", client.client_id())
```

<a id="py_nillion_client.NodeKey"></a>

### _class_ py_nillion_client.NodeKey

This is a [`NodeKey`](#py_nillion_client.NodeKey) class that
contains a private key used by the
underlying libp2p to form multiaddress and
identity secrets. This class is consumed by [`NillionClient`](#py_nillion_client.NillionClient)
class to initialize a client.

This object’s constructors can be used via the following
class methods:

1. From string encoded in Base58 ([`from_base58()`](#py_nillion_client.NodeKey.from_base58));
2. From a file ([`from_file()`](#py_nillion_client.NodeKey.from_file));
3. From a seed ([`from_seed()`](#py_nillion_client.NodeKey.from_seed)).

<a id="py_nillion_client.NodeKey.from_base58"></a>

#### from_base58()

Decodes a private key from a string encoded in Base58.

- **Parameters:**
  **contents** (_str_) – A base58 string.
- **Return type:**
  [NodeKey](#py_nillion_client.NodeKey)

#### Example

```py3
from py_nillion_client import NodeKey
node_key = NodeKey.from_base58(<base 58 encoded data>)
```

<a id="py_nillion_client.NodeKey.from_file"></a>

#### from_file()

Loads a file containing a private key.

- **Parameters:**
  **path** (_str_) – The filesystem path to the file containing
  a base58 string.
- **Return type:**
  [NodeKey](#py_nillion_client.NodeKey)

#### Example

```py3
from py_nillion_client import NodeKey
node_key = NodeKey.from_file('/path/to/nodekey.base58')
```

<a id="py_nillion_client.NodeKey.from_seed"></a>

#### from_seed()

Generates a private key using a seed.

- **Parameters:**
  **path** (_str_) – A seed string.
- **Return type:**
  [NodeKey](#py_nillion_client.NodeKey)

#### Example

```py3
from py_nillion_client import NodeKey
node_key = NodeKey.from_seed('my_seed')
```

<a id="py_nillion_client.PaymentError"></a>

### _exception_ py_nillion_client.PaymentError

Payment-related errors: missing funds or other errors

<a id="py_nillion_client.PaymentError.args"></a>

#### args

<a id="py_nillion_client.PaymentError.with_traceback"></a>

#### with_traceback()

Exception.with*traceback(tb) –
set self.*\_traceback\_\_ to tb and return self.

<a id="py_nillion_client.PaymentsConfig"></a>

### _class_ py_nillion_client.PaymentsConfig(rpc_endpoint, private_key, chain_id, payments_address, blinding_factor_manager_address)

This is a [`PaymentsConfig`](#py_nillion_client.PaymentsConfig) class used to
specify connection parameters for working with the
payments network to the nillion client constructor
([`NillionClient`](#py_nillion_client.NillionClient)).

- **Parameters:**
  - **rpc_endpoint** (_str_) – The endpoint to the Optimism node to use.
  - **wallet_private_key** (_str_) – The wallet private key to use.
  - **chain_id** (_str_) – The chain id.
  - **payments_address** (_str_) – The address of the payments smart contract.
  - **blinding_factor_manager_address** (_str_) – The address of the blinding factors manager smart contract.
- **Returns:**
  The configuration object.
- **Return type:**
  [PaymentsConfig](#py_nillion_client.PaymentsConfig)

#### Example

```py3
import py_nillion_client as nillion

rpc_endpoint = os.getenv("NILLION_BLOCKCHAIN_RPC_ENDPOINT")
wallet_private_key = os.getenv("NILLION_WALLET_PRIVATE_KEY")
chain_id = int(os.getenv("NILLION_CHAIN_ID"))
payments_address = os.getenv("NILLION_PAYMENTS_SC_ADDRESS")
blinding_factor_manager_address = os.getenv("NILLION_BLINDING_FACTORS_MANAGER_SC_ADDRESS")
payments_config = nillion.PaymentsConfig(
          rpc_endpoint,
          wallet_private_key,
          chain_id,
          payments_address,
          blinding_factor_manager_address,
      )
```

<a id="py_nillion_client.PermissionError"></a>

### _exception_ py_nillion_client.PermissionError

Missing permission errors

<a id="py_nillion_client.PermissionError.args"></a>

#### args

<a id="py_nillion_client.PermissionError.with_traceback"></a>

#### with_traceback()

Exception.with*traceback(tb) –
set self.*\_traceback\_\_ to tb and return self.

<a id="py_nillion_client.Permissions"></a>

### _class_ py_nillion_client.Permissions

This is a [`Permissions`](#py_nillion_client.Permissions) class used to
manage permissions of stored secrets and compute.
Permissions need to be set to allow users other
than the secret creator to use the secret. This
class is used either by [`NillionClient.store_secrets()`](#py_nillion_client.NillionClient.store_secrets)
or by [`NillionClient.update_permissions()`](#py_nillion_client.NillionClient.update_permissions).

The default instantiation of this class is given by
the method [`default_for_user()`](#py_nillion_client.Permissions.default_for_user).

#### Example

```py3
import py_nillion_client as nillion

# Example 1 - Storing a secret
permissions = nillion.Permissions.default_for_user(client.user_id())
permissions.add_retrieve_permissions(set([args.new_user_id]))
secrets = nillion.Secrets({"fortytwo": nillion.SecretInteger(42)})
# new_user_id is able to retrieve "fortytwo"
store_id = await user_client.store_secrets(
  cluster_id, None, secrets, permissions
)

# Example 2 - Updating permissions
permissions.add_update_permissions(set([args.new_user_id]))
# new_user_id is able to update "fortytwo" secret
updated_store_id = await client.update_permissions(args.cluster_id, store_id, permissions)
```

<a id="py_nillion_client.Permissions.add_compute_permissions"></a>

#### add_compute_permissions(compute)

Add compute permissions to the [`Permissions`](#py_nillion_client.Permissions) instance for the
user IDs provided.

- **Parameters:**
  **compute** (_dict_ _of_ _set_ _of_ _str_) – Dict keyed by the user_id of the targets where the value is a set of str
  specifying which program IDs to permit compute for.

#### Example

```py3
import py_nillion_client as nillion

program_id = client.user_id() + "/" + "program_name"
permissions = nillion.Permissions.default_for_user(client.user_id())
permissions.add_compute_permissions({
    args.compute_user_id: {program_id},
})
```

<a id="py_nillion_client.Permissions.add_delete_permissions"></a>

#### add_delete_permissions(delete)

Add delete permissions to the [`Permissions`](#py_nillion_client.Permissions) instance for the
given set of user IDs

- **Parameters:**
  **delete** (_set_ _of_ _str_) – Desired targets to permit delete [`Secrets`](#py_nillion_client.Secrets).

#### Example

```py3
import py_nillion_client as nillion

permissions = nillion.Permissions.default_for_user(client.user_id())
permissions.add_delete_permissions(set([args.delete_user_id]))
```

<a id="py_nillion_client.Permissions.add_retrieve_permissions"></a>

#### add_retrieve_permissions(retrieve)

Add retrieve permissions to the [`Permissions`](#py_nillion_client.Permissions) instance for the
given set of user IDs.

- **Parameters:**
  **retrieve** (_set_ _of_ _str_) – Desired targets to permit read of stored programs or retrieve [`Secrets`](#py_nillion_client.Secrets)

#### Example

```py3
import py_nillion_client as nillion

permissions = nillion.Permissions.default_for_user(client.user_id())
permissions.add_retrieve_permissions(set([args.retriever_user_id]))
```

<a id="py_nillion_client.Permissions.add_update_permissions"></a>

#### add_update_permissions(update)

Add update permissions to the [`Permissions`](#py_nillion_client.Permissions) instance for the
given set of user IDs.

- **Parameters:**
  **update** (_set_ _of_ _str_) – Desired targets to permit update [`Secrets`](#py_nillion_client.Secrets).

#### Example

```py3
import py_nillion_client as nillion

permissions = nillion.Permissions.default_for_user(client.user_id())
permissions.add_update_permissions(set([args.update_user_id]))
```

<a id="py_nillion_client.Permissions.default_for_user"></a>

#### _static_ default_for_user(user_id, program=None)

Returns the default permission set for the given user ID.

Note: this method can be used to clear/revoke permissions
previously granted by the user.

- **Parameters:**
  - **user_id** (_str_) – Desired target user ID.
  - **program** (_str_ _,_ _optional_) – Specify a Program ID to apply permission to.
- **Return type:**
  [Permissions](#py_nillion_client.Permissions)

#### Example

```py3
import py_nillion_client as nillion

permissions = nillion.Permissions.default_for_user(client.user_id())
```

<a id="py_nillion_client.Permissions.is_compute_allowed"></a>

#### is_compute_allowed(user_id, program)

Returns true if user has compute permissions for every single program.

- **Return type:**
  bool

#### Example

```py3
program_id = client.user_id() + "/" + "program_name"
compute_allowed = permissions.is_compute_allowed(user_client.user_id(), program_id)
```

<a id="py_nillion_client.Permissions.is_delete_allowed"></a>

#### is_delete_allowed(user_id)

Returns true if user has delete permissions.

- **Return type:**
  bool

#### Example

```py3
import py_nillion_client as nillion

permissions = nillion.Permissions.default_for_user(client.user_id())
delete_allowed = permissions.is_delete_allowed(user_client.user_id())
print("Default user is always allowed: ", delete_allowed)
```

```text
>>> Default user is always allowed: True
```

<a id="py_nillion_client.Permissions.is_retrieve_allowed"></a>

#### is_retrieve_allowed(user_id)

Returns true if user has retrieve permissions.

- **Return type:**
  bool

#### Example

```py3
import py_nillion_client as nillion

permissions = nillion.Permissions.default_for_user(client.user_id())
retrieve_allowed = permissions.is_retrieve_allowed(user_client.user_id())
print("Default user is always allowed: ", retrieve_allowed)
```

```text
>>> Default user is always allowed: True
```

<a id="py_nillion_client.Permissions.is_retrieve_permissions_allowed"></a>

#### is_retrieve_permissions_allowed(user_id)

Checks if user is allowed to retrieve the permissions.

- **Return type:**
  bool

#### Example

```py3
retrieve_permissions_allowed = permissions.is_retrieve_permissions_allowed(user_client.user_id())
```

<a id="py_nillion_client.Permissions.is_update_allowed"></a>

#### is_update_allowed(user_id)

Returns true if user has update permissions.

- **Return type:**
  bool

#### Example

```py3
import py_nillion_client as nillion

permissions = nillion.Permissions.default_for_user(client.user_id())
update_allowed = permissions.is_update_allowed(user_client.user_id())
print("Default user is always allowed: ", update_allowed)
```

```text
>>> Default user is always allowed: True
```

<a id="py_nillion_client.Permissions.is_update_permissions_allowed"></a>

#### is_update_permissions_allowed(user_id)

Checks if user is allowed to update the permissions.

- **Return type:**
  bool

#### Example

```py3
update_permissions_allowed = permissions.is_update_permissions_allowed(user_client.user_id())
```

<a id="py_nillion_client.PreprocessingConfig"></a>

### _class_ py_nillion_client.PreprocessingConfig

The [`PreprocessingConfig`](#py_nillion_client.PreprocessingConfig) class, which contains
the configuration of each pre-processing protocol. Currently,
it contains:

1. Alpha;
2. Lambda;
3. Comparison;
4. Division;
5. Modulo;
6. Public output equality.

Each protocol returns its instance of [`PreprocessingProtocolConfig`](#py_nillion_client.PreprocessingProtocolConfig) class.

- **Returns:**
  Instance of the PreprocessingConfig class of a cluster.
- **Return type:**
  [PreprocessingConfig](#py_nillion_client.PreprocessingConfig)

#### Example

```py3
cinfo = await client.cluster_information(args.cluster_id)
cluster_preprocessing_info = cinfo.preprocessing
```

<a id="py_nillion_client.PreprocessingConfig.alpha"></a>

#### alpha

The ALPHA generation protocol configuration.

- **Returns:**
  Instance of the [`PreprocessingProtocolConfig`](#py_nillion_client.PreprocessingProtocolConfig) class of a cluster for ALPHA protocol.
- **Return type:**
  [PreprocessingProtocolConfig](#py_nillion_client.PreprocessingProtocolConfig)

#### Example

```py3
cinfo = await client.cluster_information(args.cluster_id)
cinfo.preprocessing.alpha
```

<a id="py_nillion_client.PreprocessingConfig.compare"></a>

#### compare

The PREP-COMPARE generation protocol configuration.

- **Returns:**
  Instance of the [`PreprocessingProtocolConfig`](#py_nillion_client.PreprocessingProtocolConfig) class of a cluster for PREP-COMPARE protocol.
- **Return type:**
  [PreprocessingProtocolConfig](#py_nillion_client.PreprocessingProtocolConfig)

#### Example

```py3
cinfo = await client.cluster_information(args.cluster_id)
cinfo.preprocessing.compare
```

<a id="py_nillion_client.PreprocessingConfig.division_integer_secret"></a>

#### division_integer_secret

The PREP-DIV-INT-SECRET generation protocol configuration.

- **Returns:**
  Instance of the [`PreprocessingProtocolConfig`](#py_nillion_client.PreprocessingProtocolConfig) class of a cluster for PREP-DIV-INT-SECRET protocol.
- **Return type:**
  [PreprocessingProtocolConfig](#py_nillion_client.PreprocessingProtocolConfig)

#### Example

```py3
cinfo = await client.cluster_information(args.cluster_id)
cinfo.preprocessing.division_integer_secret
```

<a id="py_nillion_client.PreprocessingConfig.lambda_protocol"></a>

#### lambda_protocol

The LAMBDA generation protocol configuration.

- **Returns:**
  Instance of the [`PreprocessingProtocolConfig`](#py_nillion_client.PreprocessingProtocolConfig) class of a cluster for LAMBDA protocol.
- **Return type:**
  [PreprocessingProtocolConfig](#py_nillion_client.PreprocessingProtocolConfig)

#### Example

```py3
cinfo = await client.cluster_information(args.cluster_id)
cinfo.preprocessing.lambda_protocol
```

<a id="py_nillion_client.PreprocessingConfig.modulo"></a>

#### modulo

The PREP-MODULO generation protocol configuration.

- **Returns:**
  Instance of the [`PreprocessingProtocolConfig`](#py_nillion_client.PreprocessingProtocolConfig) class of a cluster for PREP-MODULO protocol.
- **Return type:**
  [PreprocessingProtocolConfig](#py_nillion_client.PreprocessingProtocolConfig)

#### Example

```py3
cinfo = await client.cluster_information(args.cluster_id)
cinfo.preprocessing.modulo
```

<a id="py_nillion_client.PreprocessingConfig.public_output_equality"></a>

#### public_output_equality

The PREP-PUBLIC-OUTPUT-EQUALITY generation protocol configuration.

- **Returns:**
  Instance of the [`PreprocessingProtocolConfig`](#py_nillion_client.PreprocessingProtocolConfig) class of a cluster for PREP-PUBLIC-OUTPUT-EQUALITY protocol.
- **Return type:**
  [PreprocessingProtocolConfig](#py_nillion_client.PreprocessingProtocolConfig)

#### Example

```py3
cinfo = await client.cluster_information(args.cluster_id)
cinfo.preprocessing.public_output_equality
```

<a id="py_nillion_client.PreprocessingConfig.share_to_particle"></a>

#### share_to_particle

The PREP-SHARE-TO-PARTICLE generation protocol configuration.

<a id="py_nillion_client.PreprocessingConfig.truncpr"></a>

#### truncpr

The PREP-TRUNCPR generation protocol configuration

<a id="py_nillion_client.PreprocessingProtocolConfig"></a>

### _class_ py_nillion_client.PreprocessingProtocolConfig

The [`PreprocessingProtocolConfig`](#py_nillion_client.PreprocessingProtocolConfig) class, which contains
the configuration of a particular protocol.

- **Returns:**
  Instance of the PreprocessingProtocolConfig class of a protocol.
- **Return type:**
  [PreprocessingProtocolConfig](#py_nillion_client.PreprocessingProtocolConfig)

<a id="py_nillion_client.PreprocessingProtocolConfig.batch_size"></a>

#### batch_size

The number of elements generated on every run.

- **Return type:**
  The number of elements generated on every run of the pre-processing protocol.

#### Example

```py3
cinfo = await client.cluster_information(args.cluster_id)

print("Batch size for alpha protocol:", cinfo.cinfo.preprocessing.alpha.batch_size)
```

```text
>>> Batch size for alpha protocol: 1024
```

<a id="py_nillion_client.ProgramBindings"></a>

### _class_ py_nillion_client.ProgramBindings(program_id)

This is a [`ProgramBindings`](#py_nillion_client.ProgramBindings) class used to
bind compute parties to explicit peer IDs (provided
by the [`NillionClient.party_id()`](#py_nillion_client.NillionClient.party_id)). Bindings
need to be set to use secrets in programs

This class is used by the [`NillionClient.store_secrets()`](#py_nillion_client.NillionClient.store_secrets)
and [`NillionClient.compute()`](#py_nillion_client.NillionClient.compute) methods.

- **Parameters:**
  **program_id** (_str_) – The identifier of the program to bind to.
- **Returns:**
  An instance of [`ProgramBindings`](#py_nillion_client.ProgramBindings).
- **Return type:**
  [ProgramBindings](#py_nillion_client.ProgramBindings)

#### Example

```py3
import py_nillion_client as nillion

bindings = nillion.ProgramBindings(args.program_id)

# Add bindings when storing a secret
bindings.add_input_party("InputPartyName", client.party_id())
secrets = nillion.Secrets({"fortytwo": nillion.SecretInteger(42)})
store_id = await client.store_secrets(
    cluster_id, bindings, secrets, None
)

# Add bindings for compute action
bindings = nillion.ProgramBindings(args.program_id)
bindings.add_input_party("InputPartyName" client.party_id())
bindings.add_output_party("OutputPartyName", client.party_id())
uuid = await client.compute(
    args.cluster_id,
    bindings,
    [store_id],
    args.compute_secrets,
    args.compute_public_variables,
)
```

<a id="py_nillion_client.ProgramBindings.add_input_party"></a>

#### add_input_party(name, id)

Bind an input party with a name to a specific program.

- **Parameters:**
  - **name** (_str_) – The logical name of the input party in the Nada program.
  - **id** (_str_) – The party identifier.

#### Example

```py3
bindings = nillion.ProgramBindings(args.program_id)
bindings.add_input_party("InputPartyName" client.party_id())
```

<a id="py_nillion_client.ProgramBindings.add_output_party"></a>

#### add_output_party(name, id)

Bind an output party with a name to a specific program.

- **Parameters:**
  - **name** (_str_) – The logical name of the output party in the Nada program.
  - **id** (_str_) – The party identifier.

#### Example

```py3
bindings = nillion.ProgramBindings(args.program_id)
bindings.add_output_party("OutputPartyName", client.party_id())
```

<a id="py_nillion_client.ProgramError"></a>

### _exception_ py_nillion_client.ProgramError

Program not found or invalid

<a id="py_nillion_client.ProgramError.args"></a>

#### args

<a id="py_nillion_client.ProgramError.with_traceback"></a>

#### with_traceback()

Exception.with*traceback(tb) –
set self.*\_traceback\_\_ to tb and return self.

<a id="py_nillion_client.PublicArray"></a>

### _class_ py_nillion_client.PublicArray(value)

This is a [`PublicArray`](#py_nillion_client.PublicArray) class used to
encode a public array of elements.

Note: \_\_len\_\_ method is implemented to allow
getting the length of the array.

- **Parameters:**
  **value** (_list_) – List of public encoded elements.
- **Returns:**
  Instance of the [`PublicArray`](#py_nillion_client.PublicArray) class.
- **Return type:**
  [PublicArray](#py_nillion_client.PublicArray)
- **Raises:**
  **ValueError** – invalid public variable type: Raises an error when a secret encoded element is included inside a
  public array.

#### Example

```py3
import py_nillion_client as nillion

public_array = nillion.PublicArray([
    py_nillion_client.PublicVariableInteger(1),
    py_nillion_client.PublicVariableInteger(2),
])

print("The length of the array is: ", len(public_array))
```

```text
>>> The length of the array is: 2
```

<a id="py_nillion_client.PublicArray.value"></a>

#### value

Getter method for the value inside a
[`PublicArray`](#py_nillion_client.PublicArray) instance.

- **Returns:**
  List of public encoded elements.
- **Return type:**
  list

#### Example

```py3
print("My public array: \n", public_array.value)
```

```text
>>> My public array:
>>>  [<builtins.PublicVariableInteger object at 0x7f8c461ce0b0>, <builtins.PublicVariableInteger object at 0x7f8c461ce370>]
```

<a id="py_nillion_client.PublicVariableInteger"></a>

### _class_ py_nillion_client.PublicVariableInteger(value)

This is a [`PublicVariableInteger`](#py_nillion_client.PublicVariableInteger) class used to
encode a public variable value as an integer.

Note: \_\_eq\_\_ method is implemented to allow
to compare two integers.

- **Parameters:**
  **value** (_int_) – Value of the public encoded element.
- **Returns:**
  Instance of the [`PublicVariableInteger`](#py_nillion_client.PublicVariableInteger) class.
- **Return type:**
  [PublicVariableInteger](#py_nillion_client.PublicVariableInteger)

#### Example

```py3
import py_nillion_client as nillion

pub_integer_1 = nillion.PublicVariableInteger(1)
pub_integer_2 = nillion.PublicVariableInteger(2)

print("Are the public integers the same? ", pub_integer_1 == pub_integer_2)
```

```text
>>> Are the public integers the same?  False
```

<a id="py_nillion_client.PublicVariableInteger.value"></a>

#### value

Getter and setter for the value inside a
[`PublicVariableInteger`](#py_nillion_client.PublicVariableInteger) instance.

- **Returns:**
  The value of the public integer.
- **Return type:**
  int

#### Example

```py3
pub_integer = nillion.PublicVariableInteger(1)
print("Public integer is: ", pub_integer.value)
pub_integer.value = 2
print("Public integer is now: ", pub_integer.value)
```

```text
>>> Public integer is:  1
>>> Public integer is now:  2
```

<a id="py_nillion_client.PublicVariableUnsignedInteger"></a>

### _class_ py_nillion_client.PublicVariableUnsignedInteger(value)

This is a [`PublicVariableUnsignedInteger`](#py_nillion_client.PublicVariableUnsignedInteger) class used to
encode a public variable value as an unsigned integer.

Note: \_\_eq\_\_ method is implemented to allow
to compare two unsigned integers.

- **Parameters:**
  **value** (_int_) – Value of the public encoded element.
- **Returns:**
  Instance of the [`PublicVariableUnsignedInteger`](#py_nillion_client.PublicVariableUnsignedInteger) class.
- **Return type:**
  [PublicVariableUnsignedInteger](#py_nillion_client.PublicVariableUnsignedInteger)
- **Raises:**
  **OverflowError** – can’t convert negative int to unsigned: Raises an error when a negative integer value is used.

#### Example

```py3
import py_nillion_client as nillion

pub_uinteger_1 = nillion.PublicVariableUnsignedInteger(1)
pub_uinteger_2 = nillion.PublicVariableUnsignedInteger(2)

print("Are the public unsigned integers the same? ", pub_uinteger_1 == pub_uinteger_2)
```

```text
>>> Are the public unsigned integers the same?  False
```

<a id="py_nillion_client.PublicVariableUnsignedInteger.value"></a>

#### value

Getter and setter for the value inside a
[`PublicVariableUnsignedInteger`](#py_nillion_client.PublicVariableUnsignedInteger) instance.

- **Returns:**
  The value of the public unsigned integer.
- **Return type:**
  int

#### Example

```py3
pub_uinteger = nillion.PublicVariableUnsignedInteger(1)
print("Public unsigned integer is: ", pub_uinteger.value)
pub_uinteger.value = 2
print("Public unsigned integer is now: ", pub_uinteger.value)
```

```text
>>> Public unsigned integer is:  1
>>> Public unsigned integer is now:  2
```

<a id="py_nillion_client.PublicVariables"></a>

### _class_ py_nillion_client.PublicVariables(public_variables)

This is a [`PublicVariables`](#py_nillion_client.PublicVariables) class used as
a collection of public variables. It can contain:

1. Public integers ([`PublicVariableInteger`](#py_nillion_client.PublicVariableInteger));
2. Public unsigned integers ([`PublicVariableUnsignedInteger`](#py_nillion_client.PublicVariableUnsignedInteger));
3. Public arrays ([`PublicArray`](#py_nillion_client.PublicArray)).

This class is used by the [`NillionClient.compute()`](#py_nillion_client.NillionClient.compute) method to pass the
public variables used by the corresponding Nada program.

- **Parameters:**
  **public_variables** (_dict_) – Where the key is a named str and the value is an encoded value
  created from accompanying encoders.
- **Returns:**
  Instance of the [`PublicVariables`](#py_nillion_client.PublicVariables) class.
- **Return type:**
  [PublicVariables](#py_nillion_client.PublicVariables)
- **Raises:**
  **ValueError** – invalid public variable type: Raises an error when a secret variabel element is included inside
  the public_variables dictionary.

#### Example

```py3
import py_nillion_client as nillion

pub_uinteger = nillion.PublicVariableUnsignedInteger(1)
pub_integer = nillion.PublicVariableInteger(2)
public_array = nillion.PublicArray([
    nillion.PublicVariableInteger(3),
    nillion.PublicVariableInteger(4),
])

public_variables = nillion.PublicVariables({
    "pub_uinteger": pub_uinteger,
    "pub_integer": pub_integer,
    "public_array": public_array
})
```

<a id="py_nillion_client.PublicVariables.dict"></a>

#### dict()

Returns the stored public variables as a dictionary.

- **Returns:**
  Native python dictionary with mapped encoded values.
- **Return type:**
  dict

#### Example

```py3
public_variables = nillion.PublicVariables({
    "pub_uinteger": pub_uinteger,
    "pub_integer": pub_integer,
    "public_array": public_array
})

print("Public variables:\n", public_variables.dict())
```

```text
>>> Public variables:
>>> {'pub_uinteger': <builtins.PublicVariableUnsignedInteger object at 0x7f2c3a2a9b30>, 'pub_integer': <builtins.PublicVariableInteger object at 0x7f2c3a2b6db0>, 'public_array': <builtins.PublicArray object at 0x7f2c3a2b1d90>}
```

<a id="py_nillion_client.ResultError"></a>

### _exception_ py_nillion_client.ResultError

Errors related to fetching computation results

<a id="py_nillion_client.ResultError.args"></a>

#### args

<a id="py_nillion_client.ResultError.with_traceback"></a>

#### with_traceback()

Exception.with*traceback(tb) –
set self.*\_traceback\_\_ to tb and return self.

<a id="py_nillion_client.SecretArray"></a>

### _class_ py_nillion_client.SecretArray(value)

This is a [`SecretArray`](#py_nillion_client.SecretArray) class used to
encode a secret array of elements.

Note: \_\_len\_\_ method is implemented to allow
getting the length of the array.

- **Parameters:**
  **value** (_list_) – List of secret encoded elements.
- **Returns:**
  Instance of the [`SecretArray`](#py_nillion_client.SecretArray) class.
- **Return type:**
  [SecretArray](#py_nillion_client.SecretArray)
- **Raises:**
  **ValueError** – invalid secret type: Raises an error when a public encoded element is included inside a
  secret array.

#### Example

```py3
import py_nillion_client as nillion

secret_array = nillion.SecretArray([
    py_nillion_client.SecretInteger(1),
    py_nillion_client.SecretInteger(2),
)

print("The length of the array is: ", len(secret_array))
```

```text
>>> The length of the array is: 2
```

<a id="py_nillion_client.SecretArray.value"></a>

#### value

Getter method for the value inside a
[`SecretArray`](#py_nillion_client.SecretArray) instance.

- **Returns:**
  List of secret encoded elements.
- **Return type:**
  list

#### Example

```py3
print("My secret array: \n", secret_array.value)
```

```text
>>> My secret array:
>>>  [<builtins.SecretInteger object at 0x7f8c38e2a6f0>, <builtins.SecretInteger object at 0x7f8c38e29930>]
```

<a id="py_nillion_client.SecretBlob"></a>

### _class_ py_nillion_client.SecretBlob(value)

This is a [`SecretBlob`](#py_nillion_client.SecretBlob) class used to
encode a secret as a blob.

Note: \_\_eq\_\_ method is implemented to allow
to compare two blobs.

- **Parameters:**
  **value** (_bytearray_) – Value of the secret blob as a bytearray.
- **Returns:**
  Instance of the [`SecretBlob`](#py_nillion_client.SecretBlob) class.
- **Return type:**
  [SecretBlob](#py_nillion_client.SecretBlob)
- **Raises:**
  **VTypeError** – argument ‘value’: Raises an error when a non-bytearray object is provided.

#### Example

```py3
import py_nillion_client as nillion

gm_blob_ba = bytearray("gm, builder!", "utf-8")
gm_blob = py_nillion_client.SecretBlob(gm_blob_ba)
ready_blob_ba = bytearray("ready to build!", "utf-8")
ready_blob = py_nillion_client.SecretBlob(ready_blob_ba)

print("Are these blobs the same?", gm_blob == ready_blob)
```

```text
>>> Are these blobs the same?  False
```

<a id="py_nillion_client.SecretBlob.value"></a>

#### value

Getter and setter for the value inside a
[`SecretBlob`](#py_nillion_client.SecretBlob) instance.

- **Returns:**
  The value of the secret blob.
- **Return type:**
  int

#### Example

```py3
gm_blob_ba = bytearray("gm, builder!", "utf-8")
blob = nillion.SecretBlob(gm_blob_ba)
print("Blob is: ", blob.value)
ready_blob_ba = bytearray("ready to build!", "utf-8")
blob.value = ready_blob_ba
print("Blob is now: ", blob.value)
```

```text
>>> Blob is:  bytearray(b'gm, builder!')
>>> Blob is now:  bytearray(b'ready to build!')
```

<a id="py_nillion_client.SecretInteger"></a>

### _class_ py_nillion_client.SecretInteger(value)

This is a [`SecretInteger`](#py_nillion_client.SecretInteger) class used to
encode a secret as a integer.

Note: \_\_eq\_\_ method is implemented to allow
to compare two integers.

- **Parameters:**
  **value** (_int_) – Value of the secret encoded element.
- **Returns:**
  Instance of the [`SecretInteger`](#py_nillion_client.SecretInteger) class.
- **Return type:**
  [SecretInteger](#py_nillion_client.SecretInteger)

#### Example

```py3
import py_nillion_client as nillion

sec_integer_1 = nillion.SecretInteger(1)
sec_integer_2 = nillion.SecretInteger(2)

print("Are the secret integers the same? ", sec_integer_1 == sec_integer_2)
```

```text
>>> Are the secret integers the same?  False
```

<a id="py_nillion_client.SecretInteger.value"></a>

#### value

Getter and setter for the value inside a
[`SecretInteger`](#py_nillion_client.SecretInteger) instance.

- **Returns:**
  The value of the secret integer.
- **Return type:**
  int

#### Example

```py3
sec_integer = nillion.SecretInteger(1)
print("Secret integer is: ", sec_integer.value)
sec_integer.value = 2
print("Secret integer is now: ", sec_integer.value)
```

```text
>>> Secret integer is:  1
>>> Secret integer is now:  2
```

<a id="py_nillion_client.SecretUnsignedInteger"></a>

### _class_ py_nillion_client.SecretUnsignedInteger(value)

This is a [`SecretUnsignedInteger`](#py_nillion_client.SecretUnsignedInteger) class used to
encode a secret as an unsigned integer.

Note: \_\_eq\_\_ method is implemented to allow
to compare two unsigned integers.

- **Parameters:**
  **value** (_int_) – Value of the secret encoded element.
- **Returns:**
  Instance of the [`SecretUnsignedInteger`](#py_nillion_client.SecretUnsignedInteger) class.
- **Return type:**
  [SecretUnsignedInteger](#py_nillion_client.SecretUnsignedInteger)
- **Raises:**
  **OverflowError** – can’t convert negative int to unsigned: Raises an error when a negative integer value is used.

#### Example

```py3
import py_nillion_client as nillion

sec_uinteger_1 = nillion.SecretUnsignedInteger(1)
sec_uinteger_2 = nillion.SecretUnsignedInteger(2)

print("Are the public unsigned integers the same? ", sec_uinteger_1 == sec_uinteger_2)
```

```text
>>> Are the secret unsigned integers the same?  False
```

<a id="py_nillion_client.SecretUnsignedInteger.value"></a>

#### value

Getter and setter for the value inside a
[`SecretUnsignedInteger`](#py_nillion_client.SecretUnsignedInteger) instance.

- **Returns:**
  The value of the secret unsigned integer.
- **Return type:**
  int

#### Example

```py3
sec_uinteger = nillion.SecretUnsignedInteger(1)
print("Secret unsigned integer is: ", sec_uinteger.value)
sec_uinteger.value = 2
print("Secret unsigned integer is now: ", sec_uinteger.value)
```

```text
>>> Secret unsigned integer is:  1
>>> Secret unsigned integer is now:  2
```

<a id="py_nillion_client.Secrets"></a>

### _class_ py_nillion_client.Secrets(secrets)

This is a [`Secrets`](#py_nillion_client.Secrets) class used to
hold secrets. It can contain:

1. Secret integers ([`SecretInteger`](#py_nillion_client.SecretInteger));
2. Secret unsigned integers ([`SecretUnsignedInteger`](#py_nillion_client.SecretUnsignedInteger));
3. Secret arrays ([`SecretArray`](#py_nillion_client.SecretArray)).

This class is used by the [`NillionClient.compute()`](#py_nillion_client.NillionClient.compute) method to pass the
secrets used by the corresponding Nada program that are not stored.

- **Parameters:**
  **secrets** (_dict_) – A map of named encoded secret values to store
- **Returns:**
  Instance of the [`Secrets`](#py_nillion_client.Secrets) class.
- **Return type:**
  [Secrets](#py_nillion_client.Secrets)
- **Raises:**
  **ValueError** – invalid public variable type: Raises an error when a public variabel element is included inside
  the secrets dictionary.

#### Example

```py3
import py_nillion_client as nillion

sec_uinteger = nillion.SecretUnsignedInteger(1)
sec_integer = nillion.SecretInteger(1)
sec_array = nillion.SecretArray([
    nillion.SecretInteger(1),
    nillion.SecretInteger(2),
])

secrets = nillion.Secrets({
    "sec_uinteger": sec_uinteger,
    "sec_integer": sec_integer,
    "sec_array": sec_array
 })
```

<a id="py_nillion_client.Secrets.dict"></a>

#### dict()

Returns the stored secrets as a dictionary.

- **Returns:**
  Native python dictionary with mapped encoded values
- **Return type:**
  dict

#### Example

```py3
secrets = nillion.Secrets({
    "sec_uinteger": sec_uinteger,
    "sec_integer": sec_integer,
    "sec_array": sec_array
 })

print("Secrets:\n", secrets.dict())
```

```text
>>> Secrets:
>>>  {'sec_array': <builtins.SecretArray object at 0x7f2ede3d9e80>, 'sec_uinteger': <builtins.SecretUnsignedInteger object at 0x7f2ee201a850>, 'sec_integer': <builtins.SecretInteger object at 0x7f2ede3df3f0>}
```

<a id="py_nillion_client.TimeoutError"></a>

### _exception_ py_nillion_client.TimeoutError

Timed out

<a id="py_nillion_client.TimeoutError.args"></a>

#### args

<a id="py_nillion_client.TimeoutError.with_traceback"></a>

#### with_traceback()

Exception.with*traceback(tb) –
set self.*\_traceback\_\_ to tb and return self.

<a id="py_nillion_client.UserKey"></a>

### _class_ py_nillion_client.UserKey

This is a [`UserKey`](#py_nillion_client.UserKey) class that
contains the public and private keys for the user.
This class is used by [`NillionClient`](#py_nillion_client.NillionClient)
class to initialize a client.

This object’s constructors can be used via the following
class methods:

1. From string encoded in Base58 ([`from_base58()`](#py_nillion_client.UserKey.from_base58));
2. From a file ([`from_file()`](#py_nillion_client.UserKey.from_file));
3. From scratch ([`generate()`](#py_nillion_client.UserKey.generate));
4. From seed (`seed()`).

<a id="py_nillion_client.UserKey.from_base58"></a>

#### from_base58()

Loads public and private key from base 58 encoded data.

- **Parameters:**
  **contents** (_str_) – A base58 string.
- **Return type:**
  [UserKey](#py_nillion_client.UserKey)

#### Example

```py3
from py_nillion_client import UserKey
user_key = UserKey.from_base58(<base 58 encoded data>)
```

<a id="py_nillion_client.UserKey.from_file"></a>

#### from_file()

Loads public and private key from a file.

- **Parameters:**
  **path** (_str_) – The filesystem path to the file containing
  a base58 string.
- **Return type:**
  [UserKey](#py_nillion_client.UserKey)

#### Example

```py3
from py_nillion_client import UserKey
user_key = UserKey.from_file('/path/to/userkey.base58')
```

<a id="py_nillion_client.UserKey.from_seed"></a>

#### from_seed()

Generates a public and private key from a seed.

- **Parameters:**
  **seed** (_str_) – A seed string.
- **Return type:**
  [UserKey](#py_nillion_client.UserKey)

#### Example

```py3
from py_nillion_client import UserKey
user_key = UserKey.from_seed('my_seed')
```

<a id="py_nillion_client.UserKey.generate"></a>

#### generate()

Generates a random public and private key.

- **Return type:**
  [UserKey](#py_nillion_client.UserKey)

#### Example

```py3
from py_nillion_client import UserKey
user_key = UserKey.generate()
```

<a id="py_nillion_client.version"></a>

### py_nillion_client.version()

Return the version of this SDK client.

- **Returns:**
  The version of this build.
- **Return type:**
  str

#### Example

```py3
py_nillion_client.version()
```
