const nadaByExampleSidebar = require('./sidebar-nada-by-example');

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  nillionSidebar: [
    {
      type: 'html',
      className: 'sidebar-title',
      value: 'Welcome',
      defaultStyle: true,
    },
    'welcome',
    {
      type: 'category',
      label: 'Developer Quickstart: Build a Blind App',
      link: {
        type: 'doc',
        id: 'quickstart',
      },
      items: [
        {
          type: 'doc',
          label: '1. Install Nillion',
          id: 'quickstart-install',
        },
        {
          type: 'doc',
          label: '2. Create a Nada project',
          id: 'quickstart-nada',
        },
        {
          type: 'doc',
          label: '3. Build a Blind App',
          id: 'quickstart-blind-app',
        },
        {
          type: 'doc',
          label: '4. Deploy to the Testnet',
          id: 'quickstart-testnet',
        },
      ],
    },
    {
      type: 'html',
      className: 'sidebar-title',
      value: 'Learn',
      defaultStyle: true,
    },
    'what-is-nillion',
    'high-value-data',
    'multi-party-computation',
    'nillions-mpc-protocol',
    'network',
    'concepts',
    {
      type: 'html',
      className: 'sidebar-title',
      value: 'Build',
      defaultStyle: true,
    },
    'start-building',
    {
      type: 'category',
      label: 'Nillion Clients',
      link: {
        type: 'doc',
        id: 'nillion-client',
      },
      items: [
        {
          type: 'category',
          label: 'Python Client',
          link: {
            type: 'doc',
            id: 'python-client',
          },
          items: [
            'python-quickstart',
            'python-client-reference',
            {
              type: 'category',
              label: 'Python Client Examples',
              link: {
                type: 'doc',
                id: 'python-client-examples',
              },
              collapsed: false,
              items: [
                'store-secrets',
                'retrieve-secret',
                {
                  type: 'category',
                  label: 'Permissions',
                  link: {
                    type: 'doc',
                    id: 'permissions',
                  },
                  items: [
                    {
                      type: 'link',
                      label: 'Permissions Examples',
                      href: 'https://github.com/NillionNetwork/python-examples/tree/main/examples_and_tutorials/core_concept_permissions',
                    },
                  ],
                },
                {
                  type: 'category',
                  label: 'Compute',
                  link: {
                    type: 'doc',
                    id: 'compute',
                  },
                  items: [
                    {
                      type: 'link',
                      label: 'Single Party Examples',
                      href: 'https://github.com/NillionNetwork/python-examples/tree/main/examples_and_tutorials/core_concept_single_party_compute',
                    },
                    {
                      type: 'link',
                      label: 'Multi Party Examples',
                      href: 'https://github.com/NillionNetwork/python-examples/tree/main/examples_and_tutorials/core_concept_multi_party_compute',
                    },
                    {
                      type: 'link',
                      label: 'Millionaires Problem',
                      href: 'https://github.com/NillionNetwork/python-examples/tree/main/examples_and_tutorials/millionaires_problem_example',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'JavaScript Client',
          link: {
            type: 'doc',
            id: 'js-client',
          },
          items: [
            'js-quickstart',
            {
              type: 'link',
              label: 'JavaScript Client Reference',
              href: 'https://nillion.pub/nillion-js-reference',
            },
            {
              type: 'category',
              label: 'JavaScript Client Examples',
              link: {
                type: 'doc',
                id: 'js-client-examples',
              },
              collapsed: false,
              items: ['store-secrets-js', 'retrieve-secret-js', 'compute-js'],
            },
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
            id: 'nada'
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
              id: 'nada-execution-plan'
            },
          ]
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
      items: [
        'nada-lang-types',
        'nada-lang-operators',
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
    'network-configuration',
    'limitations',
    {
      type: 'html',
      className: 'sidebar-title',
      value: 'Resources',
      defaultStyle: true,
    },
    'showcase',
    {
      type: 'category',
      label: 'Testnet Guides',
      link: {
        type: 'doc',
        id: 'testnet-guides',
      },
      items: [
        'guide-testnet-connect',
        'guide-testnet-faucet',
        'guide-testnet-tx',
      ],
    },
    'community-and-support',
    'data-wars',
    'nucleus-builders-program',
    'technical-reports-and-demos',
    'glossary',
  ],
  nadaByExampleSidebar,
};

export default sidebars;
