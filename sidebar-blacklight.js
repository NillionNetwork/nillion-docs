const blacklightSidebar = [
  {
    type: 'html',
    className: 'sidebar-title',
    value: 'Learn',
    defaultStyle: true,
  },
  'blacklight/learn/overview',
  'blacklight/learn/architecture',
  'blacklight/learn/staking',
  'blacklight/learn/verification',
  'blacklight/learn/rewards',
  {
    type: 'html',
    className: 'sidebar-title',
    value: 'Verify',
    defaultStyle: true,
  },
  {
    type: 'category',
    label: 'Set Up a Wallet',
    link: {
      type: 'doc',
      id: 'blacklight/verify/wallet-setup',
    },
    items: [],
  },
  {
    type: 'category',
    label: 'Network Configuration',
    link: {
      type: 'doc',
      id: 'blacklight/verify/network',
    },
    items: [],
  },
  {
    type: 'category',
    label: 'Run a Verifier Node',
    link: {
      type: 'doc',
      id: 'blacklight/verify/run-node',
    },
    items: [],
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
  'blacklight/verify/contracts',
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
