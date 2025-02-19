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
    label: 'nilChain Guides',
    items: [
      'guide-nillion-wallet',
      'guide-sending-nil',
      {
        type: 'category',
        label: 'Testnet Guides',
        link: {
          type: 'doc',
          id: 'testnet-guides',
        },
        items: ['guide-testnet-faucet'],
      },
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
