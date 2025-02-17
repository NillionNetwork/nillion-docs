# Signature Programs

## Supported Keys and Signatures

| Key Type          | Signature Scheme | Signing Program                                                                                       | Use Cases                                                                                                                                     |
| ----------------- | ---------------- | ----------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| ECDSA Private Key | Threshold ECDSA  | [tecdsa_sign](https://github.com/NillionNetwork/nilvm/blob/main/node/builtin-programs/tecdsa_sign.py) | • Ethereum transaction signing<br/>• Digital signatures for Web3 dapps, [SIWE](https://docs.login.xyz/)<br/>• General-purpose message signing |

## Threshold ECDSA

### Signer Program: tecdsa_sign

Nillion's threshold ECDSA (tECDSA) signer uses a "builtin" Nada program that streamlines the signing process.

```python reference showGithubLink
https://github.com/NillionNetwork/nilvm/blob/main/node/builtin-programs/tecdsa_sign.py
```

### Required Identifiers

The `tecdsa_sign` program has a pre-configured set of identifiers that you'll need to use when storing a tECDSA private key or signing a message:

```
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
