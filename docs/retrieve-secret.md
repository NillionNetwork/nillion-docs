# Retrieve Secret

Retrieve secret strings, integers, and arrays from the network.

`retrieve_secret` returns a tuple containing two elements: the first element is the name of the secret represented as a UUID (Universally Unique Identifier), and the second element is the actual secret value.

[retrieve_secret Python Client Reference](https://docs.nillion.com/pydocs/client#py_nillion_client.NillionClient.retrieve_secret)

## Retrieve a SecretBlob

Retrieve and decode a stored secret string

```python reference showGithubLink
https://github.com/nillion-oss/nillion-python-starter/blob/main/store_and_retrieve_secrets/store_and_retrieve_blob.py#L39-L45
```

## Retrieve a SecretInteger

Retrieve a stored secret integer

```python reference showGithubLink
https://github.com/nillion-oss/nillion-python-starter/blob/main/store_and_retrieve_secrets/store_and_retrieve_integer.py#L37-L41
```

## Retrieve a SecretArray

Retrieve a stored secret array of integers

```python reference showGithubLink
https://github.com/nillion-oss/nillion-python-starter/blob/main/store_and_retrieve_secrets/store_and_retrieve_array.py#L45-L60
```
