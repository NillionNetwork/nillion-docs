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
  'blacklight/learn/contracts',
  {
    type: 'category',
    label: 'Network Configuration',
    link: {
      type: 'doc',
      id: 'blacklight/learn/network',
    },
    items: [],
  },
  {
    type: 'html',
    className: 'sidebar-title',
    value: 'Run a Blacklight Node',
    defaultStyle: true,
  },
  {
    type: 'category',
    label: 'Prerequisites',
    link: {
      type: 'doc',
      id: 'blacklight/run-node/prerequisites',
    },
    items: [],
  },
  {
    type: 'category',
    label: 'Setup your Node',
    link: {
      type: 'doc',
      id: 'blacklight/run-node/setup',
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
      id: 'blacklight/tools/wallet-setup',
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
  {
    type: 'category',
    label: 'Register your Apps',
    link: {
      type: 'doc',
      id: 'blacklight/tools/register-apps',
    },
    items: [],
  },
];

module.exports = {
  blacklightSidebar,
};
