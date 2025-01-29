# Register an Organization

:::info
When using the [SecretVault Registration Portal](https://sv-sda-registration.replit.app/) to create your org, it will use the public demo node cluster. you'll be using the public demo node cluster by default. For production usage, please complete our [access form](https://forms.gle/Um3xLwMKyKPyAP9i6) to request allowlist access to the testnet node cluster.
:::

### Create an Organization

Use the [SecretVault Registration Portal](https://sv-sda-registration.replit.app/) to get started by registering an organization, your root entity in SecretVault.

1. Access the SecretVault Registration Portal
2. Register your organization by providing a name
3. Select your preferred nilDB nodes - this defaults to the cluster config of demo nodes

![SecretVault Registration Portal](/img/sv-org-portal.png)

### Store your Organization's credentials

After registration, you'll receive:

- Organization credentials (your organization's DID and public/private key pair)
- Cluster configuration for your selected nodes

**Important: Copy these credentials and store them securely. Your organization credentials cannot be retrieved or regenerated, and you won't be able to access your SecretVault data without them.** If you select "Returning Organization" from the portal, you will only be able to see the cluster configuration details for your organization by DID.

    ![SecretVault Organization Config](/img/sv-org-config.png)

## Public Demo Node Cluster Configuration

The following nodes are available in the public demo cluster configuration. Each node provides its connection details and a Swagger UI (API docs) where you can explore and test the node's API endpoints.

### Demo node 1: [nildb-zy8u](https://nildb-zy8u.nillion.network/api/v1/openapi/docs/)

```
URL: https://nildb-zy8u.nillion.network
DID: did:nil:testnet:nillion1fnhettvcrsfu8zkd5zms4d820l0ct226c3zy8u
Public Key: 037a2183c3f786a3505470aa4169f50f1d267b816dc596b26405a539f2aa579469
API docs: https://nildb-zy8u.nillion.network/api/v1/openapi/docs/
```

### Demo node 2: [nildb-rl5g](https://nildb-rl5g.nillion.network/api/v1/openapi/docs/)

```
URL: https://nildb-rl5g.nillion.network
DID: did:nil:testnet:nillion14x47xx85de0rg9dqunsdxg8jh82nvkax3jrl5g
Public Key: 037782d481c4f119c88e5fc2cd17b3ca13ea7383992d09857e9ee43b51cd7f5a18
API docs: https://nildb-rl5g.nillion.network/api/v1/openapi/docs/
```

### Demo node 3: [nildb-lpjp](https://nildb-lpjp.nillion.network/api/v1/openapi/docs/)

```
URL: https://nildb-lpjp.nillion.network
DID: did:nil:testnet:nillion167pglv9k7m4gj05rwj520a46tulkff332vlpjp
Public Key: 03fda649d577a9a28d6486f9dcaa839a4719b99364348e2815280f74df4ec62894
API docs: https://nildb-lpjp.nillion.network/api/v1/openapi/docs/
```
