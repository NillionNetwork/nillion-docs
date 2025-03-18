export const QuickStartFeatures = [
  {
    title: 'SecretVault',
    description:
      'Read and write records to an encrypted database using nilDB APIs.',
    icon: '🏛️',
    href: './build/secret-vault-quickstart',
  },
  {
    title: 'SecretLLM',
    description:
      'Run OpenAI-compatible LLMs privately in a TEE within a nilAI node, without exposing user data.',
    icon: '💬',
    href: './build/secretLLM/quickstart',
  },
  {
    title: 'SecretSigner',
    description:
      'Sign messages and ETH transactions without revealing the private key, which is stored as a secret in nilVM.',
    icon: '🔏',
    href: './build/secretSigner/signing',
  },
];

export const Libraries = [
  {
    title: 'nilQL',
    description: 'Encrypt and decrypt data using the nilQL library.',
    icon: '🔐',
    href: './build/nilQL',
  },
  {
    title: 'nilRAG',
    description: 'Provide context to SecretLLM from SecretVault with nilRAG library.',
    icon: '🔍',
    href: './build/nilRAG',
  },
];
