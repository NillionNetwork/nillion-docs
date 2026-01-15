const blacklightSidebar = [
  {
    type: 'html',
    className: 'sidebar-title',
    value: 'Learn',
    defaultStyle: true,
  },
  {
    type: 'category',
    label: 'Overview',
    link: {
      type: 'doc',
      id: 'blacklight/learn/overview',
    },
    items: [
      {
        type: 'doc',
        label: 'Architecture',
        id: 'blacklight/learn/architecture',
      },
      {
        type: 'doc',
        label: 'Rewards',
        id: 'blacklight/learn/rewards',
      },
      {
        type: 'doc',
        label: 'Verification Process',
        id: 'blacklight/learn/verification-process',
      },
      {
        type: 'doc',
        label: 'Staking',
        id: 'blacklight/learn/staking',
      },
      {
        type: 'doc',
        label: 'Security Model',
        id: 'blacklight/learn/security-model',
      },
    ],
  },
  'blacklight/learn/config',
  'blacklight/learn/contracts',
  {
    type: 'html',
    className: 'sidebar-title',
    value: 'Verify or Be Verified',
    defaultStyle: true,
  },
  {
    type: 'doc',
    label: 'Set Up a Wallet',
    id: 'blacklight/verify/wallet-setup',
  },
  {
    type: 'category',
    label: 'Run a Verifier Node',
    link: {
      type: 'doc',
      id: 'blacklight/verify/run-node',
    },
    items: [
      {
        type: 'link',
        label: 'Blacklight Node Setup',
        href: 'https://nilav-ui.vercel.app',
      },
    ],
  },
  {
    type: 'category',
    label: 'Register your Apps',
    link: {
      type: 'doc',
      id: 'blacklight/verify/register-apps',
    },
    items: [
      {
        type: 'link',
        label: 'Register nilCC Workloads',
        href: 'https://docs.nillion.com/build/compute/verify',
      },
      {
        type: 'link',
        label: 'Register Phala Workloads',
        href: 'https://nilav-ui.vercel.app/workloads',
      },
    ],
  },
  {
    type: 'html',
    className: 'sidebar-title',
    value: 'Tools',
    defaultStyle: true,
  },
  {
    type: 'category',
    label: 'Bridging',
    link: {
      type: 'doc',
      id: 'blacklight/tools/bridging',
    },
    items: [
      {
        type: 'link',
        label: 'Mainnet Bridge (🚧)',
        href: 'https:/coming-soon',
      },
      {
        type: 'link',
        label: 'Testnet Bridge',
        href: 'https://nilav-shzvox09l5-8e94b8f60d47a72f.testnets.rollbridge.app/',
      },
      {
        type: 'link',
        label: 'Skip Go Cosmos Bridge',
        href: 'https://go.skip.build/?src_asset=unil&src_chain=nillion-1&dest_asset=0x7Cf9a80db3B29eE8efE3710AadB7b95270572d47&dest_chain=1&amount_in=&amount_out=',
      },
    ],
  },
  {
    type: 'category',
    label: 'Faucets',
    link: {
      type: 'doc',
      id: 'blacklight/tools/faucets',
    },
    items: [
      {
        type: 'link',
        label: 'ETH Sepolia Faucet',
        href: 'https://faucet.conduit.xyz/',
      },
      {
        type: 'link',
        label: 'NIL Faucet (🚧)',
        href: 'https:/coming-soon',
      },
    ],
  },
  {
    type: 'category',
    label: 'Block Explorers',
    link: {
      type: 'doc',
      id: 'blacklight/tools/block-explorer',
    },
    items: [
      {
        type: 'link',
        label: 'Mainnet Block Explorer (🚧)',
        href: 'https:/coming-soon',
      },
      {
        type: 'link',
        label: 'Testnet Block Explorer',
        href: 'https://explorer-nilav-shzvox09l5.t.conduit.xyz/',
      },
    ],
  },
];

module.exports = {
  blacklightSidebar,
};
