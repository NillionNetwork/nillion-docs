module.exports = [
  {
    type: 'html',
    className: 'sidebar-title',
    value: 'nilVM',
    defaultStyle: true,
  },
  'start-building',
  'network-configuration',
  {
    type: 'category',
    label: 'Nillion Clients',
    link: {
      type: 'doc',
      id: 'nillion-client',
    },
    collapsible: false,
    items: [
      {
        type: 'category',
        label: 'Python Client',
        link: {
          type: 'doc',
          id: 'python-quickstart',
        },
        items: [
          'python-quickstart',
          'python-client-reference',
          {
            type: 'link',
            label: 'Client Examples',
            href: 'https://github.com/NillionNetwork/python-examples/tree/main/examples_and_tutorials',
          },
        ],
      },
      {
        type: 'category',
        label: 'TypeScript Client',
        link: {
          type: 'doc',
          id: 'js-client',
        },
        items: [
          {
            type: 'category',
            label: 'Hooks',
            link: {
              type: 'doc',
              id: 'js-client-hooks',
            },
            collapsed: true,
            items: [
              'js-client-hooks-values',
              'js-client-hooks-compute',
              'js-client-hooks-permissions',
              'js-client-hooks-other',
            ],
          },
          // {
          //   type: 'link',
          //   label: 'create-nillion-app',
          //   href: 'https://github.com/NillionNetwork/create-nillion-app',
          // },
          // {
          //   type: 'link',
          //   label: 'client-ts',
          //   href: 'https://github.com/NillionNetwork/client-ts',
          // },
        ],
      },
      {
        type: 'doc',
        label: 'CLI Client',
        id: 'nillion',
      },
    ],
  },
  {
    type: 'category',
    label: 'Nillion SDK and Tools',
    link: {
      type: 'doc',
      id: 'nillion-sdk-and-tools',
    },
    items: [
      'installation',
      'nilup',
      'nillion',
      'nillion-devnet',
      'node-key2peerid',
      {
        type: 'category',
        label: 'nada',
        link: {
          type: 'doc',
          id: 'nada',
        },
        items: [
          {
            type: 'doc',
            label: 'Nada Metrics',
            id: 'nada-metrics',
          },
          {
            type: 'doc',
            label: 'Nada Execution Plan',
            id: 'nada-execution-plan',
          },
        ],
      },
      'pynadac',
      'nada-run',
    ],
  },
  {
    type: 'category',
    label: 'Nada Language',
    link: {
      type: 'doc',
      id: 'nada-lang',
    },
    collapsible: false,
    items: [
      'nada-lang-types',
      'nada-lang-operators',
      {
        type: 'category',
        label: 'Built-in Programs',
        items: [
          {
            type: 'link',
            label: 'Signature Programs',
            href: 'https://docs.nillion.com/build/secretSigner/signers',
          },
        ],
      },
      {
        type: 'category',
        label: 'Programming with Nada',
        link: {
          type: 'doc',
          id: 'nada-lang-programs',
        },
        items: [
          {
            type: 'doc',
            label: 'Arithmetic and Logic',
            id: 'nada-lang-tutorial-arithmetic-and-logic',
          },
          {
            type: 'doc',
            label: 'Functions',
            id: 'nada-lang-tutorial-functions',
          },
          {
            type: 'doc',
            label: 'Lists and Comprehensions',
            id: 'nada-lang-tutorial-lists-and-comprehensions',
          },
          {
            type: 'doc',
            label: 'Lists and Iteration',
            id: 'nada-lang-tutorial-lists-and-iteration',
          },
          {
            type: 'doc',
            label: 'Debugging',
            id: 'nada-debugging',
          },
        ],
      },
      {
        type: 'category',
        label: 'Nada Libraries',
        link: {
          type: 'doc',
          id: 'nada-libraries',
        },
        items: [
          {
            type: 'category',
            label: 'nada-numpy',
            link: {
              type: 'doc',
              id: 'nada-numpy-introduction',
            },
            items: [
              {
                type: 'doc',
                label: 'Nada Rationals',
                id: 'nada-numpy-rationals',
              },
              {
                type: 'doc',
                label: 'Dot Product',
                id: 'nada-numpy-dot-product',
              },
              {
                type: 'doc',
                label: 'Matrix Multiplication',
                id: 'nada-numpy-matrix-multiplication',
              },
              {
                type: 'doc',
                label: 'Nada Numpy Array Operators',
                id: 'nada-numpy-operators',
              },
              {
                type: 'doc',
                label: 'Nada Numpy Array Functions',
                id: 'nada-numpy-array-functions',
              },
              {
                type: 'link',
                label: 'nada-numpy library',
                href: 'https://github.com/NillionNetwork/nada-numpy/',
              },
              {
                type: 'link',
                label: 'nada-numpy examples',
                href: 'https://github.com/NillionNetwork/nada-numpy/tree/main/examples',
              },
            ],
          },
          {
            type: 'category',
            label: 'nada-ai',
            link: {
              type: 'doc',
              id: 'nada-ai-introduction',
            },
            items: [
              {
                type: 'doc',
                label: 'Nada AI Linear Model Tutorial',
                id: 'nada-ai-linear-model',
              },
              {
                type: 'doc',
                label: 'Nada AI Deep Learning Tutorial',
                id: 'nada-ai-neural-network',
              },
              {
                type: 'doc',
                label: 'Nada AI Reference',
                id: 'nada-ai-reference',
              },
              {
                type: 'link',
                label: 'nada-ai library',
                href: 'https://github.com/NillionNetwork/nada-ai/',
              },
              {
                type: 'link',
                label: 'nada-ai examples',
                href: 'https://github.com/NillionNetwork/nada-ai/tree/main/examples',
              },
            ],
          },
          {
            type: 'doc',
            label: 'nada-test',
            id: 'nada-test',
          },
        ],
      },
      {
        type: 'link',
        label: 'Nada by Example',
        href: '/nada-by-example',
      },
    ],
  },
];
