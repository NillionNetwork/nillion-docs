const communitySidebar = [
  {
    type: 'html',
    className: 'sidebar-title',
    value: 'Community',
    defaultStyle: true,
  },
  'community/community-and-support',

  {
    type: 'category',
    label: 'nilChain Guides',
    items: [
      'community/guides/nillion-wallet',
      'community/guides/sending-nil',
      {
        type: 'category',
        label: 'Testnet Guides',
        link: {
          type: 'doc',
          id: 'community/guides/testnet',
        },
        items: ['community/guides/testnet-faucet'],
      },
    ],
  },
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
    type: 'link',
    label: 'Nillion App Gallery',
    href: 'https://mini-app.nillion.com/',
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
