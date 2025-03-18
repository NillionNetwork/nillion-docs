const buildSidebar = [
  {
    type: 'html',
    className: 'sidebar-title',
    value: 'Build',
    defaultStyle: true,
  },
  {
    type: 'doc',
    label: 'Start Building',
    id: 'quickstart',
  },
  'network',
  {
    type: 'category',
    label: 'SecretVault',
    link: {
      type: 'doc',
      id: 'build/secret-vault',
    },

    items: [
      {
        type: 'doc',
        label: 'SecretVault Quickstart',
        id: 'build/secret-vault-quickstart',
      },
      {
        type: 'category',
        label: 'Build with SecretVault APIs',
        link: {
          type: 'doc',
          id: 'build/secretVault-secretDataAnalytics/build',
        },
        collapsible: false,
        items: [
          {
            type: 'doc',
            label: '1. Register an Organization',
            id: 'build/secretVault-secretDataAnalytics/access',
          },
          {
            type: 'doc',
            label: '2. Define a Collection',
            id: 'build/secretVault-secretDataAnalytics/create-schema',
          },
          {
            type: 'doc',
            label: '3. Store Records',
            id: 'build/secretVault-secretDataAnalytics/upload',
          },
          {
            type: 'doc',
            label: '4. Retrieve Records',
            id: 'build/secretVault-secretDataAnalytics/retrieve',
          },
          {
            type: 'doc',
            label: '5. Define a Query | Data Analytics',
            id: 'build/secretVault-secretDataAnalytics/create-query',
          },
          {
            type: 'doc',
            label: '6. Execute a Query | Data Analytics',
            id: 'build/secretVault-secretDataAnalytics/query',
          },
          {
            type: 'doc',
            label: 'API Reference',
            id: 'api/nildb/overview',
          },
        ],
      },
      'build/secretVault-secretDataAnalytics/generate-tokens',

      {
        type: 'link',
        label: 'JS Wrapper Examples',
        href: 'https://github.com/NillionNetwork/secretvault-js/tree/main/examples',
      },
      {
        type: 'link',
        label: 'Python Wrapper Examples',
        href: 'https://github.com/NillionNetwork/secretvaults-py/tree/main/examples',
      },
      {
        type: 'link',
        label: 'Full App Examples',
        href: 'https://github.com/NillionNetwork/blind-module-examples/tree/main/nildb',
      },
    ],
  },
  {
    type: 'category',
    label: 'SecretLLM',
    link: {
      type: 'doc',
      id: 'build/secretLLM/overview',
    },
    items: [
      'build/secretLLM/quickstart',
      'build/secretLLM/access',
      'build/secretLLM/usage',
      {
        type: 'doc',
        label: 'API Reference',
        id: 'api/nilai/overview',
      },
      {
        type: 'link',
        label: 'Examples',
        href: 'https://github.com/NillionNetwork/blind-module-examples/tree/main/nilai',
      },
    ],
  },
  {
    type: 'category',
    label: 'SecretSigner',
    link: {
      type: 'doc',
      id: 'build/secretSigner/overview',
    },
    items: [
      'build/secretSigner/signers',
      'build/secretSigner/setup',
      'build/secretSigner/store-key',
      'build/secretSigner/signing',
      {
        type: 'link',
        label: 'Nillion Signature Tools',
        href: 'https://nillion-signature-tools.streamlit.app',
      },
      {
        type: 'link',
        label: 'Examples',
        href: 'https://github.com/NillionNetwork/blind-module-examples/tree/main/nilvm',
      },
    ],
  },
  {
    type: 'category',
    label: 'Libraries',
    items: [
      {
        type: 'category',
        label: 'nilQL',
        link: {
          type: 'doc',
          id: 'build/nilQL',
        },
        collapsible: false,
        items: [
          'build/secretVault-secretDataAnalytics/encryption',
          {
            type: 'link',
            label: 'nilql-ts',
            href: 'https://github.com/NillionNetwork/nilql-ts',
          },
          {
            type: 'link',
            label: 'nilql-py',
            href: 'https://github.com/NillionNetwork/nilql-py',
          },
        ],
      },
      {
        type: 'category',
        label: 'nilRAG',
        link: {
          type: 'doc',
          id: 'build/nilRAG',
        },
        items: [
          {
            type: 'link',
            label: 'nilrag-py',
            href: 'https://github.com/NillionNetwork/nilrag',
          },
          {
            type: 'link',
            label: 'Examples',
            href: 'https://github.com/NillionNetwork/nilrag/tree/main/examples',
          },
        ],
      },
    ],
  },

  {
    type: 'doc',
    label: 'Evolution of nilVM',
    id: 'start-building',
  },
];

module.exports = {
  buildSidebar,
};
