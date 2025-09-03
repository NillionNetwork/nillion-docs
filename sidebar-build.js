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
    id: 'build/quickstart',
  },
  'build/network-config',
  {
    type: 'doc',
    label: 'Network API Access',
    id: 'build/network-api-access',
  },
  {
    type: 'category',
    label: 'Private Storage',
    link: {
      type: 'doc',
      id: 'build/private-storage/overview',
    },

    items: [
      {
        type: 'doc',
        label: 'Quickstart',
        id: 'build/private-storage/quickstart',
      },
      {
        type: 'doc',
        label: 'Collection Explorer Tool',
        id: 'build/private-storage/collection-explorer',
      },
      {
        type: 'category',
        label: 'Integration by Platform',
        link: {
          type: 'doc',
          id: 'build/private-storage/platform',
        },
        collapsed: false,
        items: [
          {
            type: 'doc',
            label: 'Node.js',
            id: 'build/private-storage/platform-nodejs',
          },
          {
            type: 'doc',
            label: 'Next.js',
            id: 'build/private-storage/platform-nextjs',
          },
          {
            type: 'doc',
            label: 'React',
            id: 'build/private-storage/platform-react',
          },
        ],
      },
      {
        type: 'category',
        label: 'Secretvaults SDK',
        link: {
          type: 'doc',
          id: 'build/private-storage/secretvaults',
        },
        items: [
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
        label: 'Blindfold Library',
        link: {
          type: 'doc',
          id: 'build/private-storage/blindfold',
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
        type: 'doc',
        label: 'nilDB API',
        id: 'api/nildb/overview',
      },
    ],
  },
  {
    type: 'category',
    label: 'Private LLMs',
    link: {
      type: 'doc',
      id: 'build/private-llms/overview',
    },
    items: [
      'build/private-llms/quickstart',
      'build/private-llms/usage',
      {
        type: 'link',
        label: 'Examples',
        href: 'https://github.com/NillionNetwork/blind-module-examples/tree/main/nilai',
      },
      {
        type: 'category',
        label: 'nilRAG Library',
        link: {
          type: 'doc',
          id: 'build/private-llms/nilRAG',
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
      {
        type: 'doc',
        label: 'nilAI API',
        id: 'api/nilai/overview',
      },
    ],
  },
  {
    type: 'doc',
    label: 'Permissions and Payments',
    id: 'build/permissions-and-payments',
  },
  'build/ai-assisted-workflow/overview',
  {
    type: 'doc',
    label: 'Developer Tools',
    id: 'tools',
  },
];

module.exports = {
  buildSidebar,
};
