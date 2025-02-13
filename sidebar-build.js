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
  'build/blind-modules',
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
            label: 'API Reference',
            id: 'api/nildb/get-node-details',
          },
        ],
      },
      'build/secretVault-secretDataAnalytics/generate-tokens',
      {
        type: 'link',
        label: 'SecretVault Examples',
        href: 'https://github.com/NillionNetwork/blind-module-examples/tree/main/nildb',
      },
      {
        type: 'link',
        label: 'SecretVaultWrapper JS Examples',
        href: 'https://github.com/NillionNetwork/nillion-sv-wrappers/tree/main/examples',
      },
      {
        type: 'category',
        label: 'SecretDataAnalytics',
        link: {
          type: 'doc',
          id: 'build/secret-data-analytics',
        },

        items: [
          {
            type: 'category',
            label: 'nilDB APIs for SecretDataAnalytics',
            collapsible: false,

            items: [
              {
                type: 'doc',
                label: 'Create a Query',
                id: 'build/secretVault-secretDataAnalytics/create-query',
              },
              {
                type: 'doc',
                label: 'Query Records',
                id: 'build/secretVault-secretDataAnalytics/query',
              },
              {
                type: 'doc',
                label: 'API Reference',
                id: 'api/nildb/get-node-details',
              },
            ],
          },
        ],
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
    label: 'SecretSigning',
    link: {
      type: 'doc',
      id: 'threshold-signatures',
    },
    items: [],
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
