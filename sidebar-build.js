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
    type: 'doc',
    label: 'Nillion API Keys',
    id: 'build/api-key',
  },
  {
    type: 'category',
    label: 'SecretVault Storage',
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
        type: 'category',
        label: 'Blindfold',
        link: {
          type: 'doc',
          id: 'build/blindfold',
        },
        items: [
          {
            type: 'link',
            label: 'blindfold-ts',
            href: 'https://github.com/NillionNetwork/blindfold-ts',
          },
          {
            type: 'link',
            label: 'blindfold-py',
            href: 'https://github.com/NillionNetwork/blindfold-py',
          },
        ],
      },
      {
        type: 'link',
        label: 'secretvaults-ts',
        href: 'https://github.com/NillionNetwork/secretvaults-ts',
      },
      {
        type: 'link',
        label: 'secretvaults-py',
        href: 'https://github.com/NillionNetwork/secretvaults-py',
      },
    ],
  },
  {
    type: 'category',
    label: 'SecretLLM AI',
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
    type: 'category',
    label: 'Libraries',
    items: [
      {
        type: 'category',
        label: 'nilQL (temporary, pages will be deprecated)',
        link: {
          type: 'doc',
          id: 'build/nilQL',
        },
        collapsible: false,
        items: [
          {
            type: 'link',
            label: 'blindfold-ts',
            href: 'https://github.com/NillionNetwork/blindfold-ts',
          },
          {
            type: 'link',
            label: 'blindfold-py',
            href: 'https://github.com/NillionNetwork/blindfold-py',
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
