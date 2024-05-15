import DocCardList from '@theme/DocCardList';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Python Client

[py-nillion-client](https://pypi.org/project/py-nillion-client/) is a Python client for building on top of the Nillion Network. It can be used to manage Nada programs, store and retrieve secrets, and run computations.

## Installation

Install the [py-nillion-client](https://pypi.org/project/py-nillion-client/) PyPi package in an existing Python application

```bash
pip install py-nillion-client
```

## Usage

### Import Python Client

```python3
import py_nillion_client as nillion
```

### Initialize a client

Initialize an instance of the NillionClient connected to the Nillion Network.

<Tabs>
<TabItem value="main" label="main.py" default>
```python 
async def main():
    cluster_id = os.getenv("NILLION_CLUSTER_ID")
    userkey = getUserKeyFromFile(os.getenv("NILLION_USERKEY_PATH_PARTY_1"))
    nodekey = getNodeKeyFromFile(os.getenv("NILLION_NODEKEY_PATH_PARTY_1"))
    client = create_nillion_client(userkey, nodekey)
```
</TabItem>

<TabItem value="client" label="nillion_client_helper.py">
```python reference showGithubLink
https://github.com/NillionNetwork/nillion-python-starter/blob/main/helpers/nillion_client_helper.py
```
</TabItem>
<TabItem value="payments" label="nillion_payments_helper.py">
```python reference showGithubLink
https://github.com/NillionNetwork/nillion-python-starter/blob/main/helpers/nillion_payments_helper.py
```
</TabItem>

<TabItem value="env" label=".env">
```python reference showGithubLink
https://github.com/NillionNetwork/nillion-python-starter/blob/main/.env.sample
```
</TabItem>
</Tabs>
## Resources

<DocCardList/>
