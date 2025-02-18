# Register an Organization

:::info
When using the [SecretVault Registration Portal](https://sv-sda-registration.replit.app/) to create your org, it will use the public demo node cluster. You'll be using the public demo node cluster by default. For production usage, please complete our [access form](https://forms.gle/Um3xLwMKyKPyAP9i6) to request allowlist access to the testnet node cluster.
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

### Demo node 1: [nildb-nx8v](https://nildb-nx8v.nillion.network/api/v1/openapi/docs/)

```
URL: https://nildb-nx8v.nillion.network
DID: did:nil:testnet:nillion1qfrl8nje3nvwh6cryj63mz2y6gsdptvn07nx8v
Public Key: 034a2df3bafaca2aa0b70353aa2f05ad129096b60c8a305d115bf605d57bc2588a
API docs: https://nildb-nx8v.nillion.network/api/v1/openapi/docs/
```

### Demo node 2: [nildb-p3mx](https://nildb-p3mx.nillion.network/api/v1/openapi/docs/)

```
URL: https://nildb-p3mx.nillion.network
DID: did:nil:testnet:nillion1uak7fgsp69kzfhdd6lfqv69fnzh3lprg2mp3mx
Public Key: 03d088a7f2c8f2a6e2aa788265c87e22d1501dd1210fa149ff600ac264ada5eb42
API docs: https://nildb-zy8u.nillion.network/api/v1/openapi/docs/
```

### Demo node 3: [nildb-rugk](https://nildb-rugk.nillion.network/api/v1/openapi/docs/)

```
URL: https://nildb-rugk.nillion.network
DID: did:nil:testnet:nillion1kfremrp2mryxrynx66etjl8s7wazxc3rssrugk
Public Key: 02c4a5c6135098dd7ac1186c13d4de466be85f85efc6961e75abc31e4fdac41528
API docs: https://nildb-rugk.nillion.network/api/v1/openapi/docs/
```
