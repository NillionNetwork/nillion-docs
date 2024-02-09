# Python Client Examples

## Nillion Python Starter Repo

The [Nillion Python Starter Repo](https://github.com/NillionNetwork/examples/tree/storage) used in the [Developer Quickstart](quickstart) contains single party compute examples, multi party compute examples, and examples involving secret permissions.

## Single Party Compute

Single party compute involves only one Party that provides inputs and receives outputs of a program. Single party compute examples are available in the Python Starter Repo [client_single_party_compute folder](https://github.com/NillionNetwork/examples/tree/storage/client_single_party_compute).

### Example: addition_simple.py

Check out [addition_simple.py](https://github.com/NillionNetwork/examples/blob/storage/client_single_party_compute/addition_simple.py), a single party compute example, on Github

```python title="/client_single_party_compute/addition_simple.py"
# 1 Party running simple addition on 1 stored secret and 1 compute time secret
async def main():
    cluster_id = os.getenv("NILLION_CLUSTER_ID")
    userkey_path = os.getenv("NILLION_WRITERKEY_PATH")
    userkey = nillion.UserKey.from_file(userkey_path)
    client = create_nillion_client(userkey)
    party_id = client.party_id()
    user_id = client.user_id()

    program_id=f"{user_id}/addition_simple"
    party_name="Party1"

    # Create a secret
    stored_secret = nillion.Secrets({
        "my_int1": nillion.SecretInteger(500),
    })
    secret_bindings = nillion.ProgramBindings(program_id)
    secret_bindings.add_input_party(party_name, party_id)

    # Store a secret
    store_id = await client.store_secrets(
        cluster_id, secret_bindings, stored_secret, None
    )

    # Bind the parties in the computation to the client to set input and output parties
    compute_bindings = nillion.ProgramBindings(program_id)
    compute_bindings.add_input_party(party_name, party_id)
    compute_bindings.add_output_party(party_name, party_id)

    print(f"Computing using program {program_id}")
    print(f"Use secret store_id: {store_id}")

    computation_time_secrets = nillion.Secrets({"my_int2": nillion.SecretInteger(10)})

    # Compute on the secret
    compute_id = await client.compute(
        cluster_id,
        compute_bindings,
        [store_id],
        computation_time_secrets,
        nillion.PublicVariables({}),
    )

    # Print compute result
    print(f"The computation was sent to the network. compute_id: {compute_id}")
    while True:
        compute_event = await client.next_compute_event()
        if isinstance(compute_event, nillion.ComputeFinishedEvent):
            print(f"✅  Compute complete for compute_id {compute_event.uuid}")
            print(f"🖥️  The result is {compute_event.result.value}")
            break

```

## Multi Party Compute

Multi party compute involves more than one Party. These Parties collaborate to provide secret inputs and one Party receives outputs of the program.

Check out the [client_multi_party_compute](https://github.com/NillionNetwork/examples/blob/storage/client_multi_party_compute) folder, a 3-step multi party compute example, on Github.

### Step 1: 1st Party Stores a Secret

```python title="/client_multi_party_compute/01_store_secret_party1.py"
async def main():
    cluster_id = os.getenv("NILLION_CLUSTER_ID")
    userkey_path_1 = os.getenv("NILLION_WRITERKEY_PATH")
    userkey_1 = nillion.UserKey.from_file(userkey_path_1)
    client_1 = create_nillion_client(userkey_1)
    party_id_1 = client_1.party_id()
    user_id_1 = client_1.user_id()

    # 1st Party creates a secret
    stored_secret_1 = nillion.Secrets({
        key: nillion.SecretInteger(value)
        for key, value in CONFIG_SECRETS_1.items()
    })

    # 1st Party creates input bindings for the program
    secret_bindings_1 = nillion.ProgramBindings(CONFIG_PROGRAM_ID)
    secret_bindings_1.add_input_party(CONFIG_PARTY_NAME_1, party_id_1)

    # 1st Party stores a secret
    store_id_1 = await client_1.store_secrets(
        cluster_id, secret_bindings_1, stored_secret_1, None
    )
    secrets_string = ", ".join(f"{key}: {value}" for key, value in CONFIG_SECRETS_1.items())
    print(f"\n🎉1️⃣ Party {CONFIG_PARTY_NAME_1} stored {secrets_string} at store id: {store_id_1}")
    print("\n📋⬇️ Copy and run the following command to store the 2nd Party's secret")
    print(f"\npython3 02_store_secret_party2.py --user_id_1 {user_id_1} --store_id_1 {store_id_1}")

```

### Step 2: The 2nd Party stores a permissioned secret

```python title="/client_multi_party_compute/02_store_secret_party2.py"
async def main():
    user_id_1=args.user_id_1
    cluster_id = os.getenv("NILLION_CLUSTER_ID")
    userkey_path_2 = os.getenv("NILLION_READERKEY_PATH")
    userkey_2 = nillion.UserKey.from_file(userkey_path_2)
    client_2 = create_nillion_client(userkey_2)
    party_id_2 = client_2.party_id()
    user_id_2 = client_2.user_id()

    # 2nd Party creates a secret
    stored_secret_2 = nillion.Secrets({
        key: nillion.SecretInteger(value)
        for key, value in CONFIG_SECRETS_2.items()
    })

    # 2nd Party creates input bindings for the program
    secret_bindings_2 = nillion.ProgramBindings(CONFIG_PROGRAM_ID)
    secret_bindings_2.add_input_party(CONFIG_PARTY_NAME_2, party_id_2)

    # 2nd Party creates a permissions object and gives themself default permissions
    permissions = nillion.Permissions.default_for_user(user_id_2)

    # 2nd Party gives 1st Party (by user id) compute permissions to use the secret in a specific program id
    compute_permissions = {
        user_id_1: {CONFIG_PROGRAM_ID},
    }
    permissions.add_compute_permissions(compute_permissions)

    # 2nd party stores the permissioned secret
    store_id_2 = await client_2.store_secrets(
        cluster_id, secret_bindings_2, stored_secret_2, permissions
    )

    secrets_string = ", ".join(f"{key}: {value}" for key, value in CONFIG_SECRETS_2.items())
    print(f"\n🎉2️⃣ Party {CONFIG_PARTY_NAME_2} stored {secrets_string} at store id: {store_id_2}")
    print("\n📋⬇️ Copy and run the following command to run multi party computation using the secrets")
    print(f"\npython3 03_multi_party_compute.py --party_id_2 {party_id_2} --store_id_1 {args.store_id_1} --store_id_2 {store_id_2}")


```

### Step 3: The 1st Party computes with both secrets

```python title="/client_multi_party_compute/03_multi_party_compute.py"
async def main():
    cluster_id = os.getenv("NILLION_CLUSTER_ID")

    # 1st party computes on secrets
    userkey_path_1 = os.getenv("NILLION_WRITERKEY_PATH")
    userkey_1 = nillion.UserKey.from_file(userkey_path_1)
    client_1 = create_nillion_client(userkey_1)
    party_id_1 = client_1.party_id()


    # Bind the parties in the computation to the client to set inputs and output parties
    compute_bindings = nillion.ProgramBindings(CONFIG_PROGRAM_ID)
    compute_bindings.add_input_party(CONFIG_PARTY_NAME_1, party_id_1)
    compute_bindings.add_input_party(CONFIG_PARTY_NAME_2, args.party_id_2)
    compute_bindings.add_output_party(CONFIG_PARTY_NAME_1, party_id_1)

    store_id_1 = args.store_id_1
    store_id_2 = args.store_id_2

    print(f"Computing using program {CONFIG_PROGRAM_ID}")
    print(f"Party 1 secret store_id: {store_id_1}")
    print(f"Party 2 secret store_id: {store_id_2}")

    # Compute on the secret with 2 store ids. Note that there are no compute time secrets or public variables
    compute_id = await client_1.compute(
        cluster_id,
        compute_bindings,
        [store_id_1, store_id_2],
        nillion.Secrets({}),
        nillion.PublicVariables({}),
    )

    # Print compute result
    print(f"The computation was sent to the network. compute_id: {compute_id}")
    while True:
        compute_event = await client_1.next_compute_event()
        if isinstance(compute_event, nillion.ComputeFinishedEvent):
            print(f"✅  Compute complete for compute_id {compute_event.uuid}")
            print(f"🖥️  The result is {compute_event.result.value}")
            break
```

## Permissions Examples

Permissions examples demonstrated modifying the permissions of secrets. Check out the [permissions](https://github.com/NillionNetwork/examples/blob/storage/permissions) folder on Github for examples of

- storing a permissioned secret
- retrieving a secret
- revoking permissions to read a secret
- checking that permissions were revoked
