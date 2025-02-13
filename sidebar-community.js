const communitySidebar = [
  {
    type: 'html',
    className: 'sidebar-title',
    value: 'Community',
    defaultStyle: true,
  },
  'community-and-support',
  {
    type: 'category',
    label: 'Testnet Guides',
    link: {
      type: 'doc',
      id: 'guide-testnet-connect',
    },
    items: [
      'guide-testnet-connect',
      'guide-testnet-faucet',
      'guide-testnet-tx',
    ],
  },
  {
    type: 'link',
    label: 'Status Page',
    href: 'https://status.nillion.com/',
  },
];

module.exports = {
  communitySidebar,
};
