Imagine a scenario where you're developing a healthcare application that interfaces with multiple third-party services to retrieve patient records, process insurance claims, and manage sensitive health data. These services require secure API keys and credentials to access their endpoints. Traditionally, secrets might be stored in environment variables or encrypted databases, but as the infrastructure scales and the number of services increases, retrieving them efficiently and securely becomes increasingly challenging.

In this guide, you will learn how to ensure secure and scalable retrieval of these secrets using [Nillion Network](https://nillion.com/).

## Pre-requisites

Before getting started with the implementation, here are the prerequisites:

- Working knowledge on Python
- [Nillion Python client installed](https://docs.nillion.com/python-client)
- An IDE with Python installed
- [Pip](https://pypi.org/project/pip/) - Python package installer
- Basic cryptography understanding

## Introduction to Nillion

Nillion is a secure computation network that decentralizes the handling of high-value data, much like how blockchains have revolutionized transaction trust. It allows developers use its proprietary language, Nada, to create and manage "blind computation" programs. These programs can be compiled, uploaded, and run on the Nillion Network, enabling secure storage and processing of sensitive data without the need for decryption, thus maintaining data integrity and security.

<aside>
💡 Can we add a nice picture here?

</aside>

Nillion addresses common challenges in high-value data management such as secure storage, secure computations on encrypted data, and decentralization. By leveraging privacy-enhancing technologies such as Multi-Party Computation (MPC), Nillion allows for data to be stored and computed on directly within its distributed network. This approach eliminates vulnerabilities associated with traditional decrypt-compute-re-encrypt cycles and facilitates secure, efficient, and decentralized data management.

## Retrieving secrets with Python client

Before we get started with retrieving secrets with the Python client, we need to:

### Install the Nillion SDK

1. **Install nilup:**
    
    ```bash
    curl https://nilup.nilogy.xyz/install.sh | bash
    ```
    
2. **Confirm nilup installation:**
    
    ```bash
    nilup -V
    ```
    
3. **Install the latest Nillion SDK version:**
    
    ```bash
    nilup install latest
    nilup use latest
    nilup init
    ```
    
4. **Enable nilup telemetry to understand how the software is used (optional):**
    
    ```bash
    nilup instrumentation enable --wallet quest-<your-eth-wallet-address>
    ```
    
5. **Confirm Nillion tool installation:**
    
    ```bash
    nillion -V
    ```
    

### Clone the Nillion Python starter repo

1. **Clone the repo:**
    
    ```bash
    git clone https://github.com/NillionNetwork/nillion-python-starter.git
    cd nillion-python-starter
    ```
    

### Install script dependencies

1. **Ensure prerequisites (Python 3.11+, pip, foundry, pidof, grep):**
    
    ```bash
    python3 --version
    python3 -m pip --version
    curl -L https://foundry.paradigm.xyz | bash
    foundryup
    ```
    

### Setup environment

1. **Create a .env file:**
    
    ```bash
    cp .env.sample .env
    ```
    
2. **Activate the virtual environment:**

### Retrieving secrets

With the initial setup being done, we will use Nillion’s python client to retrieve a `SecretBlob` and `SecretInteger` .

**Step 1: Install the Python client**

```bash
pip install py-nillion-client
```

**Step 2:** Set the following environment variables and add them to the `.env` file created in the previous steps:

- `NILLION_CLUSTER_ID`
- `NILLION_USERKEY_PATH_PARTY_1`
- `NILLION_NODEKEY_PATH_PARTY_1`

**Step 3:** Import necessary modules and components from the Nillion client library.

```python

import os  # For accessing environment variables
import asyncio  # For asynchronous operations
from dotenv import load_dotenv  # Import the load_dotenv function
import py_nillion_client as nillion
```

**Step 4:  Define utility functions**

- `getUserKeyFromFile(path)`: Reads the user key from a specified file path.
- `getNodeKeyFromFile(path)`: Reads the node key from a specified file path.
- Both functions handle `FileNotFoundError` and raise a custom error message if the file is not found.

and load environment variables from `.env` file.

```python
def getUserKeyFromFile(path):
    try:
        with open(path, 'r') as file:
            return file.read().strip()
    except FileNotFoundError:
        raise FileNotFoundError(f"User key file not found at path: {path}")

def getNodeKeyFromFile(path):
    try:
        with open(path, 'r') as file:
            return file.read().strip()
    except FileNotFoundError:
        raise FileNotFoundError(f"Node key file not found at path: {path}")
        
 load_dotenv()
```

**Step 5**: **Retrieve environment variables**:

- `cluster_id`: Fetches the Nillion cluster ID from the environment variables.
- `userkey_path`: Fetches the path to the user key file from the environment variables.
- `nodekey_path`: Fetches the path to the node key file from the environment variables.

```python
async def retrieve_secrets():
    cluster_id = os.getenv("NILLION_CLUSTER_ID")
    userkey_path = os.getenv("NILLION_USERKEY_PATH_PARTY_1")
    nodekey_path = os.getenv("NILLION_NODEKEY_PATH_PARTY_1")
```

**Step 6: Check for missing environment variables**:

- If any of the required environment variables are missing, a `ValueError` is raised with a custom error message.

```python
    if not cluster_id or not userkey_path or not nodekey_path:
        raise ValueError("One or more required environment variables are missing.")
```

**Step 7:**  **Initialize Nillion client**:

- `userkey`: Retrieves the user key from the specified file path.
- `nodekey`: Retrieves the node key from the specified file path.
- `client`: Creates an instance of the Nillion client using the retrieved user and node keys.

```python
    userkey = getUserKeyFromFile(userkey_path)
    nodekey = getNodeKeyFromFile(nodekey_path)
    client = nillion.create_nillion_client(userkey, nodekey)
```

**Step 8:  Retrieve a SecretBlob:**

- `store_id_blob`: The store ID where the SecretBlob is stored.
- `secret_name_blob`: The name of the secret to retrieve.
- `result_tuple_blob`: Calls `client.retrieve_secret` asynchronously to fetch the secret from the Nillion network.
- If successful, prints the secret name (UUID) and decodes the secret value from bytes to a string.
- If an error occurs, catches the exception and prints an error message.

```python
    # Retrieve the SecretBlob
    store_id_blob = "your_store_id_for_blob"
    secret_name_blob = "my_blob"
    try:
        result_tuple_blob = await client.retrieve_secret(cluster_id, store_id_blob, secret_name_blob)
        print(f"The secret blob name as a uuid is {result_tuple_blob[0]}")
        decoded_secret_value_blob = result_tuple_blob[1].value.decode('utf-8')
        print(f"The secret blob value is '{decoded_secret_value_blob}'")
    except Exception as e:
        print(f"Error retrieving SecretBlob: {e}")

```

**Step 9**: **Run the asynchronous function**:

- Checks if the script is being run as the main program.
- If so, it executes the `retrieve_secrets` function using `asyncio.run()` to handle the asynchronous operations.

```python
if __name__ == "__main__":
    asyncio.run(retrieve_secrets())

```

## Conclusion

In this guide, you learnt about the importance of retrieving a secret securely especially in sensitive sectors like healthcare.  Through the code example, you discovered the potential of the Nillion Network to transform how developers handle and secure sensitive data, such as API keys, using decentralized computation methods like Multi-Party Computation (MPC).

If you wish to learn more about Nillion Network, here are some resources:

- [Nillion documentation](https://docs.nillion.com/)
- [Nillion Python client](https://docs.nillion.com/python-client)
- [Retrieving a secret with Nillion’s python client](https://docs.nillion.com/retrieve-secret)
- [Nillion forum](https://www.nillhub.com/)
- [Nillion GitHub repository](https://github.com/NillionNetwork)