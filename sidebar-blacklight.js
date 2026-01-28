const blacklightSidebar = [
  {
    type: 'html',
    className: 'sidebar-title',
    value: 'Learn',
    defaultStyle: true,
  },
  'blacklight/learn/overview',
  'blacklight/learn/architecture',
  'blacklight/learn/verification',
  'blacklight/learn/staking-and-rewards',
  'blacklight/verify/contracts',
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
    type: 'html',
    className: 'sidebar-title',
    value: 'Run a Blacklight node',
    defaultStyle: true,
  },
  {
    type: 'category',
    label: 'Prerequisites',
    link: {
      type: 'doc',
      id: 'blacklight/verify/prerequisites',
    },
    items: [],
  },
  {
    type: 'category',
    label: 'Run a Blacklight Node',
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
    label: 'Set Up a Wallet',
    link: {
      type: 'doc',
      id: 'blacklight/verify/wallet-setup',
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
