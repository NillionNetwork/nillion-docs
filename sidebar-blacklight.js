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
        label: 'Staking',
        id: 'blacklight/learn/staking',
      },
      {
        type: 'doc',
        label: 'Verification',
        id: 'blacklight/learn/verification',
      },
      {
        type: 'doc',
        label: 'Rewards',
        id: 'blacklight/learn/rewards',
      },
    ],
  },
  'blacklight/learn/network',
  'blacklight/learn/contracts',
  {
    type: 'html',
    className: 'sidebar-title',
    value: 'Verify',
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
    items: [],
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
    items: [],
  },
  {
    type: 'category',
    label: 'Faucets',
    link: {
      type: 'doc',
      id: 'blacklight/tools/faucets',
    },
    items: [],
  },
  {
    type: 'category',
    label: 'Block Explorers',
    link: {
      type: 'doc',
      id: 'blacklight/tools/block-explorer',
    },
    items: [],
  },
];

module.exports = {
  blacklightSidebar,
};
