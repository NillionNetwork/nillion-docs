const buildSidebar = [
  {
    type: 'html',
    className: 'sidebar-title',
    value: 'Build',
    defaultStyle: true,
  },
  'blind-computer/build/network-config',
  {
    type: 'category',
    label: 'Private Compute with nilCC',
    link: {
      type: 'doc',
      id: 'blind-computer/build/compute/overview',
    },
    items: [
      {
        type: 'doc',
        label: 'Quickstart',
        id: 'blind-computer/build/compute/quickstart',
      },
      {
        type: 'doc',
        label: 'Architecture',
        id: 'blind-computer/build/compute/architecture',
      },
      {
        type: 'doc',
        label: 'Key Concepts',
        id: 'blind-computer/build/compute/key-concepts',
      },
      {
        type: 'doc',
        label: 'API Reference',
        id: 'blind-computer/build/compute/api-reference',
      },
      {
        type: 'doc',
        label: 'Verification',
        id: 'blind-computer/build/compute/verification',
      },
      {
        type: 'doc',
        label: 'Limitations',
        id: 'blind-computer/build/compute/limitations',
      },
      {
        type: 'link',
        label: 'nilCC Workload Manager',
        href: 'https://nilcc.nillion.com',
      },
      {
        type: 'link',
        label: 'Examples',
        href: 'https://github.com/NillionNetwork/blind-module-examples/tree/main/nilcc',
      },
    ],
  },
  {
    type: 'category',
    label: 'Private Storage with nilDB',
    link: {
      type: 'doc',
      id: 'blind-computer/build/storage/overview',
    },

    items: [
      {
        type: 'doc',
        label: 'Quickstart',
        id: 'blind-computer/build/storage/quickstart',
      },
      {
        type: 'doc',
        label: 'API Access',
        id: 'blind-computer/build/storage/api-access',
      },
      {
        type: 'doc',
        label: 'Collection Explorer Tool',
        id: 'blind-computer/build/storage/collection-explorer',
      },
      {
        type: 'doc',
        label: 'Key Concepts',
        id: 'blind-computer/build/storage/key-concepts',
      },
      {
        type: 'doc',
        label: 'Secretvaults SDK',
        id: 'blind-computer/build/storage/secretvaults',
        // type: 'category',
        // label: 'Secretvaults SDK',
        // link: {
        //   type: 'doc',
        //   id: 'blind-computer/build/storage/secretvaults',
        // },
        // collapsed: false,
        // items: [
        //   {
        //     type: 'category',
        //     label: 'Integration by Platform',
        //     link: {
        //       type: 'doc',
        //       id: 'blind-computer/build/storage/platform',
        //     },
        //     collapsed: false,
        //     items: [
        //       {
        //         type: 'doc',
        //         label: 'TypeScript SDK Docs',
        //         id: 'blind-computer/build/storage/ts-docs',
        //       },
        //       {
        //         type: 'doc',
        //         label: 'Node.js',
        //         id: 'blind-computer/build/storage/platform-nodejs',
        //       },
        //       {
        //         type: 'doc',
        //         label: 'Next.js',
        //         id: 'blind-computer/build/storage/platform-nextjs',
        //       },
        //       {
        //         type: 'doc',
        //         label: 'React',
        //         id: 'blind-computer/build/storage/platform-react',
        //       },
        //       {
        //         type: 'link',
        //         label: 'Python',
        //         href: 'https://github.com/NillionNetwork/secretvaults-py/tree/main/examples#example-scripts',
        //       },
        //     ],
        //   },
        // ],
      },
      {
        type: 'link',
        label: 'nilDB Encryption',
        href: '/articles/nildb-encryption',
      },
      {
        type: 'category',
        label: 'Blindfold Library',
        link: {
          type: 'doc',
          id: 'blind-computer/build/storage/blindfold',
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
      // {
      //   type: 'doc',
      //   label: 'nilDB API',
      //   id: 'api/nildb/overview',
      // },
    ],
  },
  {
    type: 'category',
    label: 'Private LLMs with nilAI',
    link: {
      type: 'doc',
      id: 'blind-computer/build/llms/overview',
    },
    items: [
      'blind-computer/build/llms/quickstart',
      'blind-computer/build/llms/usage',
      {
        type: 'doc',
        label: 'Key Concepts',
        id: 'blind-computer/build/llms/key-concepts',
      },
      {
        type: 'category',
        label: 'Advanced Usage',
        items: [
          'blind-computer/build/llms/advanced/web_search',
          'blind-computer/build/llms/advanced/private_prompts',
        ],
      },
      {
        type: 'category',
        label: 'Examples',
        items: [
          {
            type: 'link',
            label: 'Python',
            href: 'https://github.com/NillionNetwork/nilai-py/tree/main/examples',
          },
          {
            type: 'link',
            label: 'TypeScript',
            href: 'https://github.com/NillionNetwork/nilai-ts/tree/main/examples',
          },
        ],
      },
      {
        type: 'link',
        label: 'nilAI Developer Dashboard',
        href: 'https://nilai.nillion.com/',
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
    id: 'blind-computer/build/permissions-and-payments',
  },
  {
    type: 'html',
    className: 'sidebar-title',
    value: 'Tools',
    defaultStyle: true,
  },
  {
    type: 'doc',
    label: 'Developer Tools',
    id: 'blind-computer/tools',
  },
  'blind-computer/tools/ai-assisted-workflow',
];

module.exports = {
  buildSidebar,
};
