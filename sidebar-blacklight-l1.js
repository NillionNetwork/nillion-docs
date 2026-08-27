// Blacklight L1 has its own sidebar rather than a section inside the Blacklight (L2) one.
// They are separate networks with separate lifecycles — L1 is on testnet while L2 is on
// mainnet — and nesting one inside the other made the L2 sidebar read as though L1 were a
// component of it. Docusaurus picks the sidebar from whichever one contains the current doc,
// so every page under docs/blacklight/l1 gets this automatically.
const blacklightL1Sidebar = [
  {
    type: 'html',
    className: 'sidebar-title',
    value: 'Learn',
    defaultStyle: true,
  },
  'blacklight/l1/overview',
  'blacklight/l1/how-it-works',
  'blacklight/l1/cryptography',
  'blacklight/l1/contracts',
  {
    type: 'html',
    className: 'sidebar-title',
    value: 'Build',
    defaultStyle: true,
  },
  'blacklight/l1/sdk',
  {
    type: 'html',
    className: 'sidebar-title',
    value: 'Participate',
    defaultStyle: true,
  },
  'blacklight/l1/run-a-node',
  'blacklight/l1/faucet',
];

module.exports = {
  blacklightL1Sidebar,
};
