# Retrieve Secret

Use `retrieve_secret` to retrieve and read the value of a secret in the network. `retrieve_secret` returns a tuple containing two elements: the first element is the name of the secret represented as a UUID (Universally Unique Identifier), and the second element is the actual secret value.

[retrieve_secret Python Client Reference](https://docs.nillion.com/pydocs/client#py_nillion_client.NillionClient.retrieve_secret)

## Retrieve a SecretInteger

Retrieve a stored secret integer

```python reference showGithubLink
https://github.com/nillion-oss/nillion-python-starter/blob/main/store_and_retrieve_secrets/store_and_retrieve_integer.py#L36-L40
```

## Retrieve a SecretArray

Retrieve a stored secret array of integers

```python reference showGithubLink
https://github.com/nillion-oss/nillion-python-starter/blob/main/store_and_retrieve_secrets/store_and_retrieve_array.py#L44-L59
```
