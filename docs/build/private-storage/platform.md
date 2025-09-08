import FeatureSection from '@site/src/components/Features/FeatureSection/index';
import { Platforms } from '@site/src/utils/FeatureCards';

# Integration by Platform

The way you build with Nillion Storage varies depending on your application architecture. Server-side environments have native access to all Nillion capabilities, while browser environments require additional configuration for Node.js compatibility. **For web applications, we recommend the Next.js approach** for better security and performance.

Get started by choosing the platform that matches your development stack:

## Typescript

:::tip
Check out our full Secretvaults-ts docs: [SecretVaults TypeScript Docs](/build/private-storage/ts-docs)
:::

<FeatureSection data={Platforms} />

### Node.js

_Server-side applications, APIs, CLI tools, and backend services_

Direct integration with full Nillion [Secretvaults TypeScript SDK](/build/private-storage/secretvaults) access. Ideal when you need complete control over data operations and don't have browser constraints.

### Next.js

_Full-stack web applications with both client and server components_

⭐ **Recommended approach for web apps.** ⭐ Uses Nillion [Secretvaults TypeScript SDK](/build/private-storage/secretvaults) within secure API routes for sensitive operations and client-side components for user interactions, avoiding browser compatibility issues while maintaining security.

### React

_Client-side web applications (browser-only)_

Browser-only integration with Nillion [Secretvaults TypeScript SDK](/build/private-storage/secretvaults) requiring webpack polyfills. Use only when you specifically need a client-only application or cannot use a full-stack framework.

## Python

:::note
Reference the [secretvaults-py example scripts](https://github.com/NillionNetwork/secretvaults-py/tree/main/examples#example-scripts)
:::

_Python applications, data pipelines, ML workflows, and backend services_

Native Nillion [Secretvaults Python SDK](/build/private-storage/secretvaults) integration for server-side applications. Perfect for data science workflows and backend processing.
