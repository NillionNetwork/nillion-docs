/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

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
        'nada',
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
  nadaByExampleSidebar: [
    {
      type: 'html',
      className: 'sidebar-title',
      value: 'Nada by Example',
      defaultStyle: true,
    },
    {
      type: 'doc',
      label: 'Introduction',
      id: 'nada-by-example',
    },
    'nada-by-example/first-program',
    {
      type: 'doc',
      label: 'How to Run Examples',
      id: 'nada-by-example-quickstart',
    },
    'nada-by-example/debugging',
    {
      type: 'link',
      label: 'Ask a Nada Question',
      href: 'https://github.com/orgs/NillionNetwork/discussions/categories/q-a',
    },
    {
      type: 'html',
      className: 'sidebar-title',
      value: 'Nada Program Examples',
      defaultStyle: true,
    },
    {
      type: 'category',
      label: 'Primitive Data Types',
      link: {
        type: 'doc',
        id: 'nada-by-example/nada-data-types',
      },
      items: [
        'nada-by-example/secret-data-type',
        'nada-by-example/public-data-type',
        'nada-by-example/literal-data-type',
      ],
    },
    {
      type: 'category',
      label: 'Nada Operations',
      link: {
        type: 'doc',
        id: 'nada-by-example/nada-operations',
      },
      items: [
        'nada-by-example/addition',
        'nada-by-example/subtraction',
        'nada-by-example/multiplication',
        'nada-by-example/division',
        'nada-by-example/power',
        'nada-by-example/modulo',
        'nada-by-example/shift-left',
        'nada-by-example/shift-right',
        'nada-by-example/probabilistic-truncation',
        'nada-by-example/comparison',
        'nada-by-example/equality',
        'nada-by-example/if-else',
        'nada-by-example/reveal',
      ],
    },
    'nada-by-example/list-comprehensions',
    'nada-by-example/for-loop',
    'nada-by-example/helper-function',
    'nada-by-example/reduce',
    'nada-by-example/random-number',
    'nada-by-example/linear-scan',
    'nada-by-example/square-root',
    'nada-by-example/cube-root',
    'nada-by-example/arg-max',
    'nada-by-example/variance',
    'nada-by-example/standard-deviation',
    'nada-by-example/cardio-risk',
    'nada-by-example/voting',
    'nada-by-example/r-p-s',
    {
      type: 'link',
      label: 'Request an Example',
      href: 'https://github.com/nillionnetwork/nada-by-example/issues/new/choose',
    },
    {
      type: 'html',
      className: 'sidebar-title',
      value: 'Examples with Nada Libraries',
      defaultStyle: true,
    },
    {
      type: 'category',
      label: 'Nada AI',
      collapsible: true,
      collapsed: false,
      link: {
        type: 'doc',
        id: 'nada-by-example/nada-ai',
      },
      items: [
        {
          type: 'link',
          label: 'Linear Regression',
          href: 'https://github.com/NillionNetwork/nada-ai/tree/main/examples/linear_regression',
        },
        {
          type: 'link',
          label: 'Neural Network',
          href: 'https://github.com/NillionNetwork/nada-ai/tree/main/examples/neural_net',
        },
        {
          type: 'link',
          label: 'Complex Model',
          href: 'https://github.com/NillionNetwork/nada-ai/tree/main/examples/complex_model',
        },
        {
          type: 'link',
          label: 'Time Series',
          href: 'https://github.com/NillionNetwork/nada-ai/tree/main/examples/time_series',
        },
        {
          type: 'link',
          label: 'Spam Detection',
          href: 'https://github.com/NillionNetwork/nada-ai/tree/main/examples/spam_detection',
        },
        {
          type: 'link',
          label: 'Convolutional Neural Network',
          href: 'https://github.com/NillionNetwork/nada-ai/tree/main/examples/conv_net',
        },
      ],
    },
    {
      type: 'category',
      label: 'Nada Numpy',
      collapsible: true,
      collapsed: false,
      link: {
        type: 'doc',
        id: 'nada-by-example/nada-numpy',
      },
      items: [
        {
          type: 'link',
          label: 'Dot Product',
          href: 'https://github.com/NillionNetwork/nada-numpy/tree/main/examples/dot_product',
        },
        {
          type: 'link',
          label: 'Matrix Multiplication',
          href: 'https://github.com/NillionNetwork/nada-numpy/tree/main/examples/matrix_multiplication',
        },
        {
          type: 'link',
          label: 'Broadcasting',
          href: 'https://github.com/NillionNetwork/nada-numpy/tree/main/examples/broadcasting',
        },
        {
          type: 'link',
          label: 'Rational Numbers',
          href: 'https://github.com/NillionNetwork/nada-numpy/tree/main/examples/rational_numbers',
        },
      ],
    },
  ],
};

export default sidebars;
