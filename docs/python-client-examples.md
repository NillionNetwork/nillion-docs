import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Python Client Examples

## Nillion Python Starter Repo

The [Nillion Python Starter Repo](https://github.com/nillion-oss/nillion-python-starter) used in the [Developer Quickstart](quickstart) contains single party compute examples, multi party compute examples, and examples involving secret permissions.

## Single Party Compute

Single party compute involves only one Party that provides inputs and receives outputs of a program. Single party compute examples are available in the Python Starter Repo [client_single_party_compute folder](https://github.com/nillion-oss/nillion-python-starter/client_single_party_compute).

### Example: addition_simple.py

The addition_simple example is a single party compute example that adds two secret integers. In the client code, the first secret integer is stored in the network ahead of time, and the second secret integer is provided at computation time.

<Tabs>
  <TabItem value="client" label="Client code" default>

```python reference showGithubLink
https://github.com/nillion-oss/nillion-python-starter/blob/main/client_single_party_compute/addition_simple.py#L14-L100
```

  </TabItem>
  <TabItem value="readme" label="Nada program" default>

```python reference showGithubLink
https://github.com/nillion-oss/nillion-python-starter/blob/main/programs/addition_simple.py

```

  </TabItem>
</Tabs>

## Multi Party Compute

Multi party compute involves more than one Party. These Parties collaborate to provide secret inputs and one Party receives outputs of the program.

The [client_multi_party_compute](https://github.com/nillion-oss/nillion-python-starter/blob/main/client_multi_party_compute) folder has a 3-step multi party compute example involving multiple parties providing secret inputs for computation of a program. The first party stores a secret, then N other parties store permissioned secrets giving the first party compute access. The first party computes with all secrets.

<Tabs>
  <TabItem value="readme" label="README" default>

```python reference showGithubLink
https://github.com/nillion-oss/nillion-python-starter/blob/main/client_multi_party_compute/README.md

```

  </TabItem>
  <TabItem value="config" label="Config file" default>

```python reference showGithubLink
https://github.com/nillion-oss/nillion-python-starter/blob/main/client_multi_party_compute/config.py
```

  </TabItem>
  <TabItem value="apple" label="Step 1" default>
    ### Step 1: 1st Party Stores a Secret

```python reference showGithubLink
https://github.com/nillion-oss/nillion-python-starter/blob/main/client_multi_party_compute/01_store_secret_party1.py#L19-L100
```

  </TabItem>
  <TabItem value="orange" label="Step 2">
    ### Step 2: The 2nd Party stores a permissioned secret

```python reference showGithubLink
https://github.com/nillion-oss/nillion-python-starter/blob/main/client_multi_party_compute/02_store_secret_party2.py#L37-L100
```

  </TabItem>
  <TabItem value="banana" label="Step 3">
    ### Step 3: The 1st Party computes with both secrets

```python reference showGithubLink
https://github.com/nillion-oss/nillion-python-starter/blob/main/client_multi_party_compute/03_multi_party_compute.py#L45-L100
```

  </TabItem>
</Tabs>

## Setting permissions

Permissions examples demonstrated modifying the permissions of secrets. Check out the [permissions](https://github.com/nillion-oss/nillion-python-starter/blob/main/permissions) folder on Github for examples of

- storing a permissioned secret
- retrieving a secret
- revoking permissions to read a secret
- checking that permissions were revoked
