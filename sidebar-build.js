const buildSidebar = [
  {
    type: 'html',
    className: 'sidebar-title',
    value: 'Build',
    defaultStyle: true,
  },
  'network',
  {
    type: 'doc',
    label: 'Start Building',
    id: 'quickstart',
  },
  {
    type: 'category',
    label: 'SecretVault',
    link: {
      type: 'doc',
      id: 'build/secret-vault/about',
    },

    items: [
      {
        type: 'doc',
        label: 'Quickstart',
        id: 'build/secret-vault/quickstart',
      },
      {
        type: 'link',
        label: 'secretvaults-ts',
        href: 'https://github.com/NillionNetwork/secretvaults-ts',
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
    type: 'doc',
    label: 'API Key',
    id: 'build/api-key',
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
  'build/ai/ai-workflow',
];

module.exports = {
  buildSidebar,
};
