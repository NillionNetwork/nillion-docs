# Nillion Signatures (tECDSA)

Nillion's threshold ECDSA (tECDSA) feature enables secure message and transaction signing while keeping your private keys protected within Nillion's distributed network. Your keys stay split across nodes during signing operations, and you can even grant permissions to let others participate in the signing process without exposing the actual keys.

:::info
Note: Threshold ECDSA signing is currently only available in the Nillion Python client. Support for other client libraries is coming soon.
:::

## Key Features

- **Secure Key Storage**: Import your private keys into Nillion and have them securely split across the network. Your keys are never reconstructed, even during signing operations.
- **Flexible Permissions**: Granularly control who can do what with your signing keys. You can have one party manage the keys, another prepare messages, and a third receive the final signatures.
- **Message Privacy**: Only message hashes are sent over the network during signing, keeping the actual content of your messages private.
- **High Performance**: Nillion's tECDSA signing can complete in under 10 seconds, even for large messages.

## Required Identifiers

Nillion's threshold ECDSA (tECDSA) feature uses a "builtin" Nada program that streamlines the signing process. This program has a pre-configured set of identifiers that you'll need to use:

```python
# program id
tecdsa_program_id = "builtin/tecdsa_sign"`

# input names
tecdsa_key_name = "tecdsa_private_key"
tecdsa_digest_name = "tecdsa_digest_message"
tecdsa_signature_name = "tecdsa_signature"

# party names
tecdsa_key_party = "tecdsa_key_party"
tecdsa_digest_party = "tecdsa_digest_message_party"
tecdsa_output_party = "tecdsa_output_party"
```

These predefined identifiers allow you to quickly integrate with Nillion's built-in tECDSA signing functionality, without needing to configure or manage the underlying program details. By using these values, you can get up and running with threshold ECDSA signing faster.

## Implementation Guide

Check out a complete [tECDSA code example here](https://github.com/NillionNetwork/python-examples/blob/main/examples_and_tutorials/core_concept_single_party_compute/threshold_ecdsa_signature.py).

### Storing Your Key

Store your private key as a secret EcdsaPrivateKey value in Nillion:

```python
# Store an ECDSA private key in Nillion
my_ecdsa_key = {
    "tecdsa_private_key": EcdsaPrivateKey(private_key_bytes)
}
key_id = await client.store_values(
    my_ecdsa_key, ttl_days=5, permissions=permissions
).invoke()
```

### Signing Messages

Use the built-in "builtin/tecdsa_sign" nada program to sign a message with your stored private key:

```python
# Sign a message using your stored key
message = b"Your message here"

# Create the message hash
digest = hashes.Hash(hashes.SHA256())
digest.update(message)
hashed_message = digest.finalize()

# Get your signature
result = await client.compute(
    "builtin/tecdsa_sign", input_bindings, output_bindings,
    value_ids=[key_id, digest_id]
).invoke()
signature = result["tecdsa_signature"]
```

### Verifying Signatures

```python
# Get your signature components
(r, s) = signature.value
r_int = int.from_bytes(r, byteorder="big")
s_int = int.from_bytes(s, byteorder="big")

# Standard verification with any ECDSA library
public_key.verify(
    signature, message, ec.ECDSA(hashes.SHA256())
)
```

## Security and Privacy

- **Distributed Key Storage**: Your keys are split across nodes - no single point of failure
- **Message Privacy**: Only hashes touch the network, not your actual messages
- **Granular Access**: Control exactly who can use your keys and how
- **Key Expiration**: Set TTLs to automatically remove old keys
- **Industry Standard**: Uses the same curve (secp256k1) as Ethereum

## Resources and Demos

To help you get started with Nillion's tECDSA functionality, we provide the following resources:

- **[Nillion Signature Tools](https://nillion-signature-tools.streamlit.app/)**: An interactive web app and developer tool that allows you to experiment with key generation, storage, and signing on the Nillion platform.
- **[Complete Code Example](https://github.com/NillionNetwork/python-examples/blob/main/examples_and_tutorials/core_concept_single_party_compute/threshold_ecdsa_signature.py)**: A full, end-to-end implementation example demonstrating how to store a private key and use it for threshold ECDSA signing. This example is part of the Nillion Python examples repository.
- **[Python Client Reference](/python-client-reference)**: Detailed API documentation for the Nillion Python client, including the ECDSA-related features and functionality.
