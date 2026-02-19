export const QuickStartFeatures = [
  {
    title: 'Private Compute',
    description:
      'Run Docker applications in TEEs with cryptographic attestation using nilCC.',
    icon: '🖥️',
    href: '/blind-computer/build/compute/quickstart',
  },
  {
    title: 'Private Storage',
    description:
      'Read and write records to an encrypted database using nilDB APIs.',
    icon: '🏛️',
    href: '/blind-computer/build/storage/quickstart',
  },
  {
    title: 'Private LLMs',
    description:
      'Run OpenAI-compatible LLMs privately in a TEE within a nilAI node, without exposing user data.',
    icon: '💬',
    href: '/blind-computer/build/llms/quickstart',
  },
];

export const Libraries = [
  {
    title: 'blindfold',
    description:
      'Encrypt/decrypt and secret share data using the blindfold library.',
    icon: '🔐',
    href: '/blind-computer/build/storage/blindfold',
  },
];

export const Platforms = [
  {
    title: 'Node.js',
    description:
      'For server-side applications, APIs, CLI tools, and backend services',
    href: './platform-nodejs',
  },
  {
    title: 'Next.js',
    description:
      'For full-stack web applications with both client and server components',
    href: './platform-nextjs',
  },
  {
    title: 'React',
    description: 'For client-side web applications (browser-only)',
    href: './platform-react',
  },
];



export const BlacklightActions = [
  {
    title: 'Node Operators',
    description:
      'Run permissionless Blacklight nodes that are assigned verification tasks via Nillion\'s L2 and earn rewards.',
    icon: '🌐',
    href: '/blacklight/run-node/setup',
  },
  {
    title: 'App Developers',
    description:
      'Developers can register their TEE workloads (running on nilCC or Phala) to be verified by Blacklight.',
    icon: '💻',
    href: '/blacklight/tools/register-apps',
  },
];