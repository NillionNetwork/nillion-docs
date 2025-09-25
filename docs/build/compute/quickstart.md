import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# nilCC Quickstart

Get started with nilCC in under 5 minutes by deploying your first secure workload.

:::info

Before you start building, you'll need a nilCC API Key. Request a **nilCC API Key** on [Discord](https://discord.gg/nillionnetwork) in the #developers channel
:::

## Deploy Your First Workload

Let's deploy a simple "Hello World" API service that runs in a secure Confidential VM.

### Step 1: Create Your Docker Compose File

Create a simple API service:

```yaml
services:
  web:
    image: caddy:2
    command: |
      caddy respond --listen :8080 --body '{"message":"Hello from secure nilCC!","timestamp":"'$(date -Iseconds)'"}'  --header "Content-Type: application/json"
```

### Step 2: Create Workload

Choose your preferred workload creation method. Both options create the same secure workload

<Tabs>
<TabItem value="ui" label="Create Workload with UI" default>

**Best for:** First-time users, visual workflow management, and ongoing monitoring

1. **Visit**: [nilCC Workload Manager](https://nilcc-workload-manager.vercel.app)
2. **Authenticate**: Enter your nilCC API Key to log in
3. **Create New Workload**:
   - **Name**: `hello-world-api`
   - **Docker Compose**: Paste the YAML content from Step 1
   - **Service to Expose**: `web` (automatically detected)
   - **Port**: `8080` (automatically detected)
   - **Resources**: 1 CPU, 1GB memory, 10GB disk (adjust as needed)
4. **Deploy**: Click "Create Workload" and monitor the deployment status in real-time

</TabItem>
<TabItem value="api" label="Create Workload with API">

**Best for:** Automation, CI/CD pipelines, and programmatic deployments

```bash
curl -X POST https://nilcc-api.sandbox.app-cluster.sandbox.nilogy.xyz/api/v1/workloads/create \
  -H "x-api-key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "hello-world-api",
    "dockerCompose": "services:\n  web:\n    image: caddy:2\n    command: |\n      caddy respond --listen :8080 --body '\''{\"hello\":\"world\"}'\'' --header \"Content-Type: application/json\"",
    "serviceToExpose": "web",
    "servicePortToExpose": 8080,
    "cpus": 1,
    "memory": 1024,
    "disk": 10,
    "gpus": 0,
    "artifactsVersion": "dbb2f89"
  }'
```

**Key API Parameters:**

- `dockerCompose`: Your Docker Compose file as an escaped string
- `serviceToExpose`: Which service gets the public domain (must match a service name)
- `servicePortToExpose`: Which port on that service to expose publicly
- `artifactsVersion`: System version (use `"dbb2f89"` for current release)

</TabItem>

</Tabs>

## Test Your Workload

### Access Your Secure API within nilCC

Once deployed, your workload gets a unique domain. Access it at:

```bash
# Your workload will be available at a domain like:
curl https://[your-secure-workload].nillion.network
```

Expected response:

```json
{ "hello": "world" }
```

### Verify Security (Check Attestation)

Prove your workload runs in a secure TEE:

```bash
curl https://[your-secure-workload].nillion.network/nilcc/api/v2/report
```

This returns a cryptographic attestation report proving:

- Your code runs unmodified in a genuine AMD SEV-SNP environment
- No unauthorized access to your workload
- Hardware-guaranteed isolation and encryption

## What Happens Behind the Scenes

When you deploy a workload, nilCC:

1. **Creates a Confidential VM** with AMD SEV-SNP hardware security
2. **Packages your workload** as an ISO with docker-compose.yaml, metadata, and environment variables
3. **Boots securely** with dm-verity filesystem verification and LUKS encryption
4. **Deploys containers** with automatic TLS certificates via Caddy
5. **Generates attestation** linking your TLS certificate to hardware measurements

## Next Steps

🎉 **Congratulations!** You've deployed your first secure workload on nilCC.

**Learn More:**

- [Understand security constraints](./limitations.md) - What you can and can't do
- [Explore the architecture](./architecture.md) - How nilCC components work together
- [Browse API documentation](./api-reference.md) - Complete endpoint reference
- [Check key terms](./key-terms.md) - Essential nilCC vocabulary

**Build Something Real:**

- Deploy a secure database with persistent storage
- Run private analytics on sensitive data
- Create confidential microservices
- Build AI/ML workloads with GPU support
