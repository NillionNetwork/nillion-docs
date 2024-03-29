import DocCardList from '@theme/DocCardList';

# Nillion Client

There are 3 Nillion Clients - a Python, JavaScript, and CLI Client. Each Nillion Client provides APIs that you can use for generating user and node keys, and managing programs, secrets, and permissions on the Nillion Network.

<DocCardList/>

### NillionClient

#### Create an instance of NillionClient

`NillionClient` creates an instance of the Nillion Client library with node key, bootnodes, connection mode, user key, and payments parameters. This client instance interacts with programs, secrets, and permissions on the network as the user via their [user key](concepts.md#user-key).

### Programs

#### **Store a program**

`store_program` uploads a compiled Nada program to the Nillion Network.&#x20;

`store_program` returns the stored program's `program_id` from the network

#### **Run a stored program**

`compute` runs a stored Nada program by `program_id` against stored secrets by `store_id` and `secret_name` and/or secrets provided by the user when running `compute`. A user needs permissions to compute on stored secrets for a specific program.

`compute` returns the program result from the network

#### Program permissions

<table><thead><tr><th width="190">Operation</th><th width="235">Permission needed</th><th>Description</th></tr></thead><tbody><tr><td><code>store_program</code></td><td>-</td><td>Any user with an allowlisted peer id can store a program on the Nillion Network</td></tr><tr><td><code>compute</code></td><td>add_compute_permissions</td><td>Allows a user to compute on the secret for a specific program</td></tr></tbody></table>

### Secrets

#### **Store secrets**

`store_secrets` uploads permissioned secrets to the Nillion Network. Each secret value is uploaded with a `secret_name` that is set by the user. Every node in the network stores a particle of these secrets.

`store_secrets` returns the secret's `store_id` from the network

#### Set permissions while storing secrets

The user storing the secrets can give "default permissions" of the secrets with `default_for_user(user_id)`. Any `user_id` with these "default permissions" will have permission to retrieve and update secret permissions.

The user storing the secret can give other `user_id`s limited permissions to the secrets by specifying the `user_id` to allowlist and the intended secret permissions (retrieve / update / delete / compute) to grant that user.

<table><thead><tr><th width="242">Permission</th><th>Operation unlocked</th><th>Description</th></tr></thead><tbody><tr><td>default_for_user</td><td><code>permissions</code></td><td>Allows a user to update permissions for a secret</td></tr><tr><td>add_retrieve_permissions</td><td><code>retrieve_secret</code></td><td>Allows a user to read or retrieve a secret</td></tr><tr><td>add_update_permissions</td><td><code>update_secret</code></td><td>Allows a user to update a secret</td></tr><tr><td>add_delete_permissions</td><td><code>delete_secret</code></td><td>Allows a user to delete a secret</td></tr><tr><td>add_compute_permissions</td><td><code>compute</code></td><td>Allows a user to compute on a secret as an input to a specific program id</td></tr></tbody></table>

#### **Retrieve a secret**

`retrieve_secret` retrieves a secret by `store_id` and `secret_name`. A user needs to have secret retrieve permissions (`add_retrieve_permissions`) to retrieve a stored secret.

`retrieve_secret` returns the secret from the network

#### Update a secret

`update_secret` updates a secret value by `store_id`. A user needs to have secret update permissions (`add_update_permissions`) to update a stored secret.

#### Delete a secret

`delete_secret` deletes a secret value by `store_id`. A user needs to have secret delete permissions (`add_delete_permissions`) to delete a stored secret.

### Permissions

#### Update permissions

update_permissions replaces the permissions of a secret by `store_id`. A user needs to have `default_for_user` permissions (grants the ability to retrieve and update secret permissions) to update permissions of a stored secret.&#x20;

The user updating permissions for the secrets can give other `user_id`s limited permissions to the secrets by specifying the `user_id` to allowlist and the intended secret permissions to grant that user.
