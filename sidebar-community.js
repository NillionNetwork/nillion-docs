const communitySidebar = [
  {
    type: 'html',
    className: 'sidebar-title',
    value: 'Community',
    defaultStyle: true,
  },
  'community-and-support',
  {
    type: 'link',
    label: 'Tokenomics',
    href: 'https://nillion.com/news/blind-compute-needs-its-first-champion/',
  },
  {
    type: 'link',
    label: 'Nucleus Builders Program',
    href: 'https://nucleus.nillion.com/',
  },
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
