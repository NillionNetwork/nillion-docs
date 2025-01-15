const nadaByExampleSidebar = require('./sidebar-nada-by-example');

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  nillionSidebar: [
    {
      type: 'html',
      className: 'sidebar-title',
      value: 'Learn',
      defaultStyle: true,
    },
    'what-is-nillion',
    'network',
    'high-value-data',
    'multi-party-computation',
    'nillions-mpc-protocol',
    'concepts',
    {
      type: 'html',
      className: 'sidebar-title',
      value: 'Build',
      defaultStyle: true,
    },
    'quickstart',
    {
      type: 'category',
      label: 'SecretVault & SecretDataAnalytics',
      items: [
        {
          type: 'doc',
          label: 'Overview',
          id: 'build/secretVault-secretDataAnalytics/overview',
        },
        'build/secretVault-secretDataAnalytics/generate-tokens',
        'build/secretVault-secretDataAnalytics/encryption',
        'build/secretVault-secretDataAnalytics/upload-retrieve',
        {
          type: 'link',
          label: 'API Reference',
          href: 'https://nildb-a50d.nillion.network/api/v1/openapi/docs/',
        },
        {
          type: 'link',
          label: 'Examples',
          href: 'https://github.com/NillionNetwork/blind-module-examples/tree/main/nildb',
        },
      ],
    },
    {
      type: 'category',
      label: 'SecretLLM',
      link: {
        type: 'doc',
        id: 'build/secretLlm/overview',
      },
      items: [],
    },
    {
      type: 'category',
      label: 'SecretSigning',
      link: {
        type: 'doc',
        id: 'build/secretSigning/overview',
      },
      items: [],
    },
    'build/blind-modules',
    {
      type: 'html',
      className: 'sidebar-title',
      value: 'Community',
      defaultStyle: true,
    },
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
  ],
  nadaByExampleSidebar,
};

export default sidebars;
