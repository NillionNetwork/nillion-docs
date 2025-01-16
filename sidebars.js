const nadaByExampleSidebar = require('./sidebar-nada-by-example');
const nilVmSidebar = require('./sidebar-nilvm');
const { learnSidebar } = require('./sidebar-learn');

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  nillionSidebar: [
    ...learnSidebar,
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
    {
      type: 'category',
      label: 'NilDB API',
      items: [
        // 'nildb/api/get-post-by-id',
        // 'nildb/api/get-posts',
        // 'nildb/test-api',

        // 'nildb/api/nildb-api-info',
        'nildb/api/get-health-status',
        'nildb/api/get-node-details',
        'nildb/api/list-the-organizations-queries',
        'nildb/api/list-the-organizations-schemas',
        'nildb/api/delete-data-records-that-match-a-given-filter',
        'nildb/api/execute-the-specified-query',
        'nildb/api/remove-all-documents-in-a-schema-collection',
        'nildb/api/retrieve-an-organizations-account-details',
        'nildb/api/retrieve-an-organizations-account-details',
        'nildb/api/retrieve-data-from-the-specified-schema-collection-that-matches-the-provided-filter',
        'nildb/api/retrieve-recently-added-documents-from-a-schema-collection',
        'nildb/api/update-documents-within-a-schema-collection-that-match-the-given-filter',
        // 'nildb/api/update-documents-within-a-schema-collection',
        'nildb/api/upload-data-to-the-specified-schema-collection',
      ],
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
  nilVmSidebar,
};

export default sidebars;
