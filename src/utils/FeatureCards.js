export const QuickStartFeatures = [
  {
    title: 'Private Storage',
    description:
      'Read and write records to an encrypted database using nilDB APIs.',
    icon: '🏛️',
    href: './private-storage/quickstart',
  },
  {
    title: 'Private LLMs',
    description:
      'Run OpenAI-compatible LLMs privately in a TEE within a nilAI node, without exposing user data.',
    icon: '💬',
    href: './private-llms/quickstart',
  },
];

export const Libraries = [
  {
    title: 'blindfold',
    description:
      'Encrypt/decrypt and secret share data using the blindfold library.',
    icon: '🔐',
    href: './private-storage/blindfold',
  },
  {
    title: 'nilRAG',
    description:
      'Provide context to SecretLLM from SecretVault with nilRAG library.',
    icon: '🔍',
    href: './private-llms/nilRAG',
  },
];

export const Platforms = [
  {
    title: 'Node.js Recipe',
    description:
      'For server-side applications, APIs, CLI tools, and backend services',
    href: './platform-nodejs',
  },
  {
    title: 'Next.js Recipe',
    description:
      'For full-stack web applications with both client and server components',
    href: './platform-nextjs',
  },
  {
    title: 'React Recipe',
    description: 'For client-side web applications (browser-only)',
    href: './platform-react',
  },
];
