# JavaScript Client Reference

# @nillion/client-web

> Javascript Nillion Client

## add_compute_permissions(compute)

Add compute permissions to the :py:class:`Permissions` instance for the
given list of user IDs

## Arguments

compute : dict of list of str
Dict keyed by the user_id of the targets where the value is a list of str
specifying which program IDs to permit compute for

## Example

    # TODO

### Parameters

| Name    | Types | Description |
| ------- | ----- | ----------- |
| compute | any   |             |

## add_delete_permissions(permissions)

Add delete permissions to the Permissions instance for the
given list of user IDs

## Example

    # TODO

### Parameters

| Name        | Types | Description |
| ----------- | ----- | ----------- |
| permissions | any   |             |

## add_input_party(name, id)

Bind an input party with a name

### Parameters

| Name | Types  | Description |
| ---- | ------ | ----------- |
| name | string |             |
| id   | string |             |

## add_output_party(name, id)

Bind an output party with a name

### Parameters

| Name | Types  | Description |
| ---- | ------ | ----------- |
| name | string |             |
| id   | string |             |

## add_retrieve_permissions(permissions)

Add retrieve permissions to the Permissions instance for the
given list of user IDs

## Example

    # TODO

### Parameters

| Name        | Types | Description |
| ----------- | ----- | ----------- |
| permissions | any   |             |

## add_update_permissions(permissions)

Add update permissions to the Permissions instance for the
given list of user IDs

## Example

    # TODO

### Parameters

| Name        | Types | Description |
| ----------- | ----- | ----------- |
| permissions | any   |             |

## cluster_information(cluster_id)

Returns information about a Nillion cluster

# Arguments

- `cluster_id` - UUID of the targeted preprocessing cluster

# Returns

The cluster descriptor for the given cluster

### Parameters

| Name       | Types  | Description |
| ---------- | ------ | ----------- |
| cluster_id | string |             |

### Returns

Promise.&lt;ClusterDescriptor&gt;

## compute(cluster_id, bindings, store_ids, secrets, public_variables)

Compute in the Nillion Network

This method invokes the compute operation in Nillion.
It returns a compute ID that can be used by `compute_result` to fetch
the results of this computation.

### Parameters

| Name             | Types                | Description                                             |
| ---------------- | -------------------- | ------------------------------------------------------- |
| cluster_id       | string               | UUID of the targeted preprocessing cluster              |
| bindings         | ProgramBindings      | The program bindings for the computation                |
| store_ids        | Array.&lt;string&gt; | The store IDs of the secrets to use for the computation |
| secrets          | Secrets              | Additional secrets to use for the computation           |
| public_variables | PublicVariables      | Public variables that are used in the computation.      |

### Returns

Object
A computation UUID.

## compute_result(result_id)

Fetch the result of the compute in the Nillion Network

# Arguments

- `result_id` - computation UUID

# Returns

A computed JsValue

### Parameters

| Name      | Types  | Description |
| --------- | ------ | ----------- |
| result_id | string |             |

### Returns

Promise.&lt;any&gt;

## default_for_user(user_id, program)

Returns the default permission set for the given user ID

## Arguments

user_id : str
Desired target peer ID
program : str, optional
Specify a Program ID to apply permission to.

## Returns

Permissions

## Example

    permissions = nillion.Permissions.default_for_user(client.user_id)

### Parameters

| Name    | Types  | Description |
| ------- | ------ | ----------- |
| user_id | string |             |
| program | string |             |

### Returns

Permissions

## delete_secrets(cluster_id, store_id)

Delete secrets collection from the network

# Arguments

- `cluster_id` - The cluster identifier
- `store_id` - The store operation identifier for the secret collection

# Returns

The unique identifier of the delete operation

### Parameters

| Name       | Types  | Description |
| ---------- | ------ | ----------- |
| cluster_id | string |             |
| store_id   | string |             |

### Returns

Promise.&lt;void&gt;

## enable_tracking(wallet_addr)

Enables tracking for the user

# Arguments

# Returns

Enables tracking of client actions (store, retrieve, compute ...)

### Parameters

| Name        | Types             | Description |
| ----------- | ----------------- | ----------- |
| wallet_addr | string, undefined |             |

## from_base58(contents)

Decodes a private key from a string encoded in Base58.

# Arguments

- `contents` - A base58 string

# Returns

An instance of NodeKey matching the string provided

### Parameters

| Name     | Types  | Description |
| -------- | ------ | ----------- |
| contents | string |             |

### Returns

NodeKey

## from_base58(contents)

Loads a [`UserKey] from a Base58 String

# Arguments

- `contents` - The private key encoded in Base58 format

### Parameters

| Name     | Types  | Description |
| -------- | ------ | ----------- |
| contents | string |             |

### Returns

UserKey

## from_seed(seed)

Generates a private key using a seed.

# Returns

A NodeKey

### Parameters

| Name | Types  | Description |
| ---- | ------ | ----------- |
| seed | string |             |

### Returns

NodeKey

## from_seed(seed)

Generate a new public/private key.
Uses a seed to generate the keys.

# Arguments

- `seed` - The seed as a [`&str`]

# Returns

A [`Result`] whose `Ok` value is the [`UserKey`] generated using the seed provided

### Parameters

| Name | Types  | Description |
| ---- | ------ | ----------- |
| seed | string |             |

### Returns

UserKey

## generate()

Generate a new random public/private key.
Uses a cryptographically secure pseudo-random number generator.

### Returns

UserKey

## insert(name, input)

Add encoded public variable to the PublicVariables collection.

### Parameters

| Name  | Types          | Description |
| ----- | -------------- | ----------- |
| name  | string         |             |
| input | PublicVariable |             |

## insert(name, input)

Add encoded secret to Secrets collection.

### Parameters

| Name  | Types  | Description |
| ----- | ------ | ----------- |
| name  | string |             |
| input | Secret |             |

## is_compute_allowed(user_id, program)

Returns true if user has compute permissions for every single program

## Returns

bool

## Example

    # TODO

### Parameters

| Name    | Types  | Description |
| ------- | ------ | ----------- |
| user_id | string |             |
| program | string |             |

### Returns

boolean

## is_delete_allowed(user_id)

Returns true if user has delete permissions

## Returns

bool

## Example

    # TODO

### Parameters

| Name    | Types  | Description |
| ------- | ------ | ----------- |
| user_id | string |             |

### Returns

boolean

## is_retrieve_allowed(user_id)

Returns true if user has retrieve permissions

## Returns

bool

## Example

    # TODO

### Parameters

| Name    | Types  | Description |
| ------- | ------ | ----------- |
| user_id | string |             |

### Returns

boolean

## is_retrieve_permissions_allowed(user_id)

Checks if user is allowed to retrieve the permissions

## Returns

bool

## Example

.. code-block:: py3

    # TODO

### Parameters

| Name    | Types  | Description |
| ------- | ------ | ----------- |
| user_id | string |             |

### Returns

boolean

## is_update_allowed(user_id)

Returns true if user has update permissions

## Returns

bool

## Example

    # TODO

### Parameters

| Name    | Types  | Description |
| ------- | ------ | ----------- |
| user_id | string |             |

### Returns

boolean

## is_update_permissions_allowed(user_id)

Checks if user is allowed to update the permissions

## Returns

bool

## Example

    # TODO

### Parameters

| Name    | Types  | Description |
| ------- | ------ | ----------- |
| user_id | string |             |

### Returns

boolean

## mainJS()

null

### Returns

string

## new_blob(value)

Create a new secret blob with the provided value.

### Parameters

| Name  | Types      | Description |
| ----- | ---------- | ----------- |
| value | Uint8Array |             |

### Returns

Secret

## new_integer(value)

Create a new public integer with the provided value.

The value must be a valid string representation of an integer.

### Parameters

| Name  | Types  | Description |
| ----- | ------ | ----------- |
| value | string |             |

### Returns

PublicVariable

## new_integer(value)

Create a new secret integer with the provided value.

The value must be a valid string representation of an integer.

### Parameters

| Name  | Types  | Description |
| ----- | ------ | ----------- |
| value | string |             |

### Returns

Secret

## new_unsigned_integer(value)

Create a new public unsigned integer with the provided value.

The value must be a valid string representation of an unsigned integer.

### Parameters

| Name  | Types  | Description |
| ----- | ------ | ----------- |
| value | string |             |

### Returns

PublicVariable

## new_unsigned_integer(value)

Create a new secret unsigned integer with the provided value.

The value must be a valid string representation of an unsigned integer.

### Parameters

| Name  | Types  | Description |
| ----- | ------ | ----------- |
| value | string |             |

### Returns

Secret

## party_id

Get party_id property

# Arguments

# Returns

A party id

### Returns

string

## public_key()

Returns the public key corresponding to this key.

# Returns

The public key as an UTF-8 encoded string.

### Returns

string

## retrieve_permissions(cluster_id, store_id, secret_id)

Retrieve permissions from nillion

# Arguments

- `cluster_id` - The cluster identifier
- `store_id` - The store operation identifier for the secret
- `secret_id` - The identifier of the secret

# Returns

The permissions as [`NilPermissions`]

### Parameters

| Name       | Types  | Description |
| ---------- | ------ | ----------- |
| cluster_id | string |             |
| store_id   | string |             |
| secret_id  | string |             |

### Returns

Promise.&lt;Permissions&gt;

## retrieve_secret(cluster_id, store_id, secret_id)

Retrieve a secret on the network with javascript

# Arguments

- `cluster_id` - UUID of the targeted preprocessing cluster
- `store_id` - The secret's store ID (returned when calling `store_secrets`)
- `secret_id` - The secret's ID

# Returns

The secret ID as a UUID as well as the secret itself as Secret

### Parameters

| Name       | Types  | Description |
| ---------- | ------ | ----------- |
| cluster_id | string |             |
| store_id   | string |             |
| secret_id  | string |             |

### Returns

Promise.&lt;Secret&gt;

## store_program(cluster_id, program_name, program)

Store a program in the Nillion Network

# Arguments

- `cluster_id` - UUID of the targeted preprocessing cluster
- `program_name` - The name of the program
- `program` - The compiled program

# Returns

The action ID associated with the action of storing a program

### Parameters

| Name         | Types      | Description |
| ------------ | ---------- | ----------- |
| cluster_id   | string     |             |
| program_name | string     |             |
| program      | Uint8Array |             |

### Returns

Promise.&lt;string&gt;

## store_secrets(cluster_id, secrets, bindings, permissions)

Store a secret on the network from javascript; clear envelope

# Arguments

- `cluster_id` - UUID of the targeted preprocessing cluster
- `secrets` - The `NilSecrets` collection of secrets to store
- `bindings` - Optional bindings between network parties and the parties are defined by the program

# Returns

A store ID that can be used to retrieve the secret.

### Parameters

| Name        | Types                      | Description |
| ----------- | -------------------------- | ----------- |
| cluster_id  | string                     |             |
| secrets     | Secrets                    |             |
| bindings    | ProgramBindings, undefined |             |
| permissions | Permissions, undefined     |             |

### Returns

Promise.&lt;string&gt;

## to_base58()

Returns the key in Base58 encoded form.

### Returns

string

## to_byte_array()

Convert this secret into a byte array.

This is only valid for blob secrets.

### Returns

Uint8Array

## to_integer()

Convert this public variable into a string representation of the underlying numeric value.

This only works for numeric public variables, such as integers and unsigned integers.

### Returns

string

## to_integer()

Convert this secret into a string representation of the underlying numeric value.

This only works for numeric secrets, such as integers and unsigned integers.

### Returns

string

## update_permissions(cluster_id, store_id, secret_id, permissions)

Update permissions from nillion

# Arguments

- `cluster_id` - The cluster identifier
- `store_id` - The store operation identifier for the secret
- `secret_id` - The identifier of the secret
- `permissions` - The permissions that will replace the existing permissions for the secret

# Returns

The Update Permissions action ID

### Parameters

| Name        | Types       | Description |
| ----------- | ----------- | ----------- |
| cluster_id  | string      |             |
| store_id    | string      |             |
| secret_id   | string      |             |
| permissions | Permissions |             |

### Returns

Promise.&lt;string&gt;

## update_secrets(cluster_id, store_id, secrets, bindings)

Update a secret stored in nillion

# Arguments

- `cluster_id` - The cluster identifier
- `store_id` - The store operation identifier for the secret
- `secrets` - The secrets to be updated

# Returns

The unique identifier of the update operation

### Parameters

| Name       | Types                      | Description |
| ---------- | -------------------------- | ----------- |
| cluster_id | string                     |             |
| store_id   | string                     |             |
| secrets    | Secrets                    |             |
| bindings   | ProgramBindings, undefined |             |

### Returns

Promise.&lt;string&gt;

## user_id

Get the user ID of the Client instance.

# Arguments

# Returns

An user identifier

### Returns

string

## worker_entry_point(shared_state_ptr)

Entry point invoked by the web worker. The passed pointer will be unconditionally interpreted
as an `Box::<(WorkerExecutor, Worker)>`.

### Parameters

| Name             | Types  | Description |
| ---------------- | ------ | ----------- |
| shared_state_ptr | number |             |
