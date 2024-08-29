import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import IframeVideo from '@site/src/components/IframeVideo/index';
import SdkInstallation from './\_sdk-installation.mdx';

# Python Developer Quickstart

Welcome to the Python Quickstart. By the end of this guide, you will have:

1. Installed the [Nillion SDK](https://docs.nillion.com/nillion-sdk-and-tools) and set up your dev environment
2. Written, compiled, and tested your first nada program using the `nada` tool
3. Connected to the local devnet and run your program using the Python client

Once you have finished, explore more examples and tutorials in the [Python examples repo](https://github.com/NillionNetwork/python-examples) to continue your Nillion developer journey!

## Install the Nillion SDK tools

<SdkInstallation/>

## Fork & clone the QuickStart repo and set up environment

The [Nillion Python Starter repo](https://github.com/NillionNetwork/nillion-python-starter) has everything you need to start building.

1. Fork the repo on GitHub - it will be forked into a repo called `your-github-username/nillion-python-starter`
2. Clone the forked repo
   ```bash
   git clone https://github.com/<your-github-username>/nillion-python-starter.git
   cd nillion-python-starter
   ```
3. Ensure you have python3.11 or above:

   :::tip
   
   Use these commands to confirm that you have python3 (version >=3.11) and pip installed:
   
   ```bash
   python3 --version
   python3 -m pip --version
   ```

4. Create and activate a virtual environment
   ```bash
   python3 -m venv .venv
   source .venv/bin/activate
   ```

5. Intall the requirements
   ```bash
   pip install --upgrade -r requirements.txt
   ```

You now have everything we need to start your Nillion developer journey. We will work in the `quickstart` directory, however, if you ever get stuck, you can see a fully completed version of the quickstart in the `quickstart_complete` directory.

## Write your first nada program

The Nillion Network uses [Nada](https://docs.nillion.com/nada-lang), our MPC language, to define MPC programs. The first implementation of Nada is a Python DSL (Domain Specific Language), called Nada. In this section we will write a simple program that adds two numbers together.

### Setup your project with the nada tool

Before we start writing your first nada program, we will use the `nada` tool to create our nada project which we will call `nada_quickstart_programs`.

```bash
cd quickstart
nada init nada_quickstart_programs
```

This will create a directory called `nada_quickstart_programs`.

### Your first program
The code for the finished program is below - it is a simple program that has one party and adds two secret integer inputs together.

```python
from nada_dsl import *

def nada_main():

    party1 = Party(name="Party1")

    my_int1 = SecretInteger(Input(name="my_int1", party=party1))

    my_int2 = SecretInteger(Input(name="my_int2", party=party1))

    new_int = my_int1 + my_int2

    return [Output(new_int, "my_output", party1)]
```

Now we will write it from scratch, explaining how it works as we go. Once we have written the program, we will use the `nada` tool to run and test it.

1. Create a program file:
   ```bash
   cd quickstart/nada_quickstart_programs/src
   touch secret_addition.py
   ```
2. Write or copy the program above into this file

### Understanding the program you have just written

We will now go through the program slowly, and explain what is each part is doing. 

1. First we must import nada_dsl and create a function nada_main() - this function will contain our programs code.
   ```python
   from nada_dsl import *
   
   def nada_main():
   ```
2. Add a party
   ```python
   from nada_dsl import *
   
   def nada_main():
   
       party1 = Party(name="Party1")
   ```

   This is a one party program, however you can add multiple parties analogously, for example we could define `party2 = Party(name="Party2")`.
3. Add inputs to the program
   ```python
   from nada_dsl import *
   
   def nada_main():
   
       party1 = Party(name="Party1")
   
       my_int1 = SecretInteger(Input(name="my_int1", party=party1))
   
       my_int2 = SecretInteger(Input(name="my_int2", party=party1))
   ```
   
   This program has two inputs, both secret integers. Each input must have a `name` and a `party` associated to it. Currently in nada you can only compute on secret or public integers (and rationals by using the `nada-algebra` library).

4. Compute on the inputs
   ```python
   from nada_dsl import *
   
   def nada_main():
   
       party1 = Party(name="Party1")
   
       my_int1 = SecretInteger(Input(name="my_int1", party=party1))
   
       my_int2 = SecretInteger(Input(name="my_int2", party=party1))
   
       new_int = my_int1 + my_int2
   ```
   This performs a simple addition on the inputs. For all other built in operations available in nada, [see here](https://docs.nillion.com/nada-lang-operators).

5. Return the output of the program
   ```python
   from nada_dsl import *
   
   def nada_main():
   
       party1 = Party(name="Party1")
   
       my_int1 = SecretInteger(Input(name="my_int1", party=party1))
   
       my_int2 = SecretInteger(Input(name="my_int2", party=party1))
   
       new_int = my_int1 + my_int2
   
       return [Output(new_int, "my_output", party1)]
   ```
   To output the result of a program, we must provide a name - in this case my_output - and a party to whom the output is provided - in this case party1.

## Compile, run and test your program

Make sure you are in the `quickstart/nada_quickstart_programs` directory.

Now we will use the `nada` tool to compile, run and test the program we have just written. More information about the nada tool can be found [here](https://docs.nillion.com/nada).

1. Add your program to nada-project.toml

   For the nada tool to know about our program, we need to add the following to the to the nada-project.toml file.
   ```bash
   [[programs]]
   path = "src/secret_addition.py"
   name = "secret_addition"
   prime_size = 128
   ```

2. Build (compile) our program
   ```bash
   nada build
   ```

   This will compile all programs listed in the nada-project.toml file. You will see the binary files outputted in the nada-programs/target directory.

3. Generate test
   ```bash
   nada generate-test --test-name secret_addition_test secret_addition
   ```

   This uses the nada tool to generate a test, that will be stored in tests. Here secret_addition_test is the name of the test, and secret_addition is the name of the program we want to test. You will notice that the test file (`tests/secret_addition_test.yaml`) is automatically populated with `3`s everywhere by default. Later, for the test to pass, we will have to change the output from `3` to the correct output.

4. Run the program
   ```bash
   nada run secret_addition_test
   ```
   
   Now we run the program. This uses the inputs defined in the test file (tests/secret_addition_test.yaml) and runs the program and prints the result. Make note of the result, we will need it next.

5. Test the program
   ```bash
   nada test secret_addition_test
   ```
   
   Finally, we test the program. If you run the above command without altering the default values (`3`s) in the test file (`tests/secret_addition_test.yaml`), the test will fail.

## Connect to the devnet and run your program
We have written and tested our nada program, now we need to run it against the local devnet. In this section we will:

1. Spin up a local Nillion devnet.
2. Use the Nillion python client to interact with the local devnet and compute the program we have just written.

### Spinning up a local Nillion devnet
Spinning up a local Nillion devnet is easy, simply run the following command:

```bash
nillion-devnet
```

All configurations of the devnet you will need are written to the following environment file `/Users/<user>/.config/nillion/nillion-devnet.env`
You need to leave the devnet running in the background while you run your program in the next section.

### Using the Python client to run your program

In this section, we will use the python client run a computation on the local devnet. 

We will write the following code within the `quickstart/client_code` directory in the `run_my_first_program.py` [file here](https://github.com/NillionNetwork/nillion-python-starter/blob/main/quickstart/client_code/run_my_first_program.py). You can [view the completed client code here](https://github.com/NillionNetwork/nillion-python-starter/blob/main/quickstart_complete/client_code/secret_addition_complete.py), feel free to refer back to it whenever you need.

1. Import the packages and helper functions we will be using
    
   ```python
   import asyncio
   import py_nillion_client as nillion
   import os
   
   from py_nillion_client import NodeKey, UserKey
   from dotenv import load_dotenv
   from nillion_python_helpers import get_quote_and_pay, create_nillion_client, create_payments_config
   
   from cosmpy.aerial.client import LedgerClient
   from cosmpy.aerial.wallet import LocalWallet
   from cosmpy.crypto.keypairs import PrivateKey
   
   home = os.getenv("HOME")
   load_dotenv(f"{home}/.config/nillion/nillion-devnet.env")
   
   async def main():
   ```
    
    Here the `cosmpy` imports will help us interact with the local chain, the helper functions help abstract away some of the technical details when using the python client, and finally we load the `.env` file containing the configs of the local devnet.
    
2. Obtain the local devnet configs and create a user & node key from a seed
    
    ```python
    # 1. Initial setup
    # 1.1. Get cluster_id, grpc_endpoint, & chain_id from the .env file
    cluster_id = os.getenv("NILLION_CLUSTER_ID")
    grpc_endpoint = os.getenv("NILLION_NILCHAIN_GRPC")
    chain_id = os.getenv("NILLION_NILCHAIN_CHAIN_ID")
    # 1.2 pick a seed and generate user and node keys
    seed = "my_seed"
    userkey = UserKey.from_seed(seed)
    nodekey = NodeKey.from_seed(seed)
    ```
    
    Here we first obtain the `cluster_id`, `grpc_endpoint` & `chain_id` from the local environment. Then we choose a seed and obtain a user and node key using the `from_seed` method.
    
3. Initialise a Nillion client & obtain user and party ids
    
    ```python
    # 2. Initialize NillionClient against nillion-devnet
    # Create Nillion Client for user
    client = create_nillion_client(userkey, nodekey)
    
    party_id = client.party_id
    user_id = client.user_id
    ```
    
    Here we use the `create_nillion_client` helper to create the client that will act on behalf of the party and obtain the party and user ids which identify the party.
    
4. Pay for and store a program
    
    ```python
    # 3. Pay for and store the program
    # Set the program name and path to the compiled program
    program_name = "secret_addition"
    program_mir_path = f"../nada_quickstart_programs/target/{program_name}.nada.bin"

    # Create payments config, client and wallet
    payments_config = create_payments_config(chain_id, grpc_endpoint)
    payments_client = LedgerClient(payments_config)
    payments_wallet = LocalWallet(
        PrivateKey(bytes.fromhex(os.getenv("NILLION_NILCHAIN_PRIVATE_KEY_0"))),
        prefix="nillion",
    )

    # Pay to store the program and obtain a receipt of the payment
    receipt_store_program = await get_quote_and_pay(
        client,
        nillion.Operation.store_program(program_mir_path),
        payments_wallet,
        payments_client,
        cluster_id,
    )

    # Store the program
    action_id = await client.store_program(
        cluster_id, program_name, program_mir_path, receipt_store_program
    )

    # Create a variable for the program_id, which is the {user_id}/{program_name}. We will need this later
    program_id = f"{user_id}/{program_name}"
    print("Stored program. action_id:", action_id)
    print("Stored program_id:", program_id)
    ```
    
    We first construct the path to the compiled program. Then we create the payments config, client and wallet - we use `cosmpy` to do this along with a number of parameters of the devnet. Next we use the `pay` helper function to pay for storing the program - you will see the operation (`store_program`) is an input parameter. When this function is called, a quote for storing the program is asked for and received before the payment is made. Look at the `pay` function here to understand the precise flow in more detail. Finally we store the program (ensuring we provide a valid receipt) and then construct the `program_id` as we will need this later. Note: program ids always follow the same structure.
    
5. Pay for and store a secret
    
    ```python
    # 4. Create the 1st secret, add permissions, pay for and store it in the network
    # Create a secret named "my_int1" with any value, ex: 500
    new_secret = nillion.NadaValues(
        {
            "my_int1": nillion.SecretInteger(500),
        }
    )

    # Set the input party for the secret
    # The party name needs to match the party name that is storing "my_int1" in the program
    party_name = "Party1"

    # Set permissions for the client to compute on the program
    permissions = nillion.Permissions.default_for_user(client.user_id)
    permissions.add_compute_permissions({client.user_id: {program_id}})

    # Pay for and store the secret in the network and print the returned store_id
    receipt_store = await get_quote_and_pay(
        client,
        nillion.Operation.store_values(new_secret, ttl_days=5),
        payments_wallet,
        payments_client,
        cluster_id,
    )
    # Store a secret
    store_id = await client.store_values(
        cluster_id, new_secret, permissions, receipt_store
    )
    print(f"Computing using program {program_id}")
    print(f"Use secret store_id: {store_id}")
    ```
    
    First we create a secret object, making sure the name of the secret (`my_int1`) matches the name of the secret in the program. Then we create compute permissions; even if a party is computing on its own secret it still needs to grant permissions. Finally we pay for the storage and obtain a receipt, and finally we pass the receipt and permissions to the `store_values` method which stores the secret in the network.
    
6. Pay for and action the computation
    
    ```python
    # 5. Create compute bindings to set input and output parties, add a computation time secret and pay for & run the computation
    compute_bindings = nillion.ProgramBindings(program_id)
    compute_bindings.add_input_party(party_name, party_id)
    compute_bindings.add_output_party(party_name, party_id)

    # Add my_int2, the 2nd secret at computation time
    computation_time_secrets = nillion.NadaValues({"my_int2": nillion.SecretInteger(10)})

    # Pay for the compute
    receipt_compute = await get_quote_and_pay(
        client,
        nillion.Operation.compute(program_id, computation_time_secrets),
        payments_wallet,
        payments_client,
        cluster_id,
    )

    # Compute on the secret
    compute_id = await client.compute(
        cluster_id,
        compute_bindings,
        [store_id],
        computation_time_secrets,
        receipt_compute,
    )
    ```
    
    Before running a computation, we have to create bindings which set the input and output parties for the program - in this case, this is all the same party, `Party1`. We then add a computation time secret which will act as the second input to the program (`my_int2`). As above we then pay for an run the computation. Note that we must provide the `program_id` and `computation_time_secrets` to the `pay` function, this is so a quote can be correctly generated. When running the computation, the receipt is checked to ensure it is valid for that particular computation and the provided inputs.
    
7. Return the result of the computation
    
    ```python
    # 6. Return the computation result
    print(f"The computation was sent to the network. compute_id: {compute_id}")
    while True:
        compute_event = await client.next_compute_event()
        if isinstance(compute_event, nillion.ComputeFinishedEvent):
            print(f"✅  Compute complete for compute_id {compute_event.uuid}")
            print(f"🖥️  The result is {compute_event.result.value}")
            return compute_event.result.value
    ```
    
    Finally we return the result of the computation. Here we await for the next event to be available in the network, and then print the result.

8. Run the completed python script

   Ensure you can run the script by putting the following at the end:
   
   ```python
   if __name__ == "__main__":
       asyncio.run(main())
   ```
   
   Run the script to store the program, store secrets and compute on the program.
   
   ```bash
   cd client_code
   python3 secret_addition.py
   ```
   
   You will now see the program executing and the result printed.

## Keep exploring

Congratulations, you've successfully written your first single party Nada program and run it on the local devnet. Checkout the resources below to continue your Nillion developer journey. 

- Python examples repo:
  - Examples:
    - [single party examples](https://github.com/NillionNetwork/python-examples/tree/main/examples_and_tutorials/core_concept_single_party_compute)
    - [multi-party examples](https://github.com/NillionNetwork/python-examples/tree/main/examples_and_tutorials/core_concept_multi_party_compute)
    - [storing and retrieving intergers and blobs](https://github.com/NillionNetwork/python-examples/tree/main/examples_and_tutorials/core_concept_store_and_retrieve_secrets)
    - [using permissions](https://github.com/NillionNetwork/python-examples/tree/main/examples_and_tutorials/core_concept_permissions)
  - Tutorials:
    - [Voting schemes](https://github.com/NillionNetwork/python-examples/tree/main/examples_and_tutorials/voting_tutorial)
    - [Millionaire's tutorial](https://github.com/NillionNetwork/python-examples/tree/main/examples_and_tutorials/millionaires_problem_example)
      <IframeVideo videoSrc="https://www.loom.com/embed/d77604f001be4293b1b0c72c67620071?sid=d8dba7d7-0643-47cf-bf44-8b8b33c18cd6"/>
