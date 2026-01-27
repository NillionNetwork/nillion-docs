const { blacklightSidebar } = require('./sidebar-blacklight');
const { learnSidebar } = require('./sidebar-learn');
const { buildSidebar } = require('./sidebar-build');
const { communitySidebar } = require('./sidebar-community');
const apiSidebar = require('./sidebar-api');

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  blacklightSidebar: blacklightSidebar,
  nillionSidebar: [...learnSidebar, ...buildSidebar],
  communitySidebar: communitySidebar,
  apiSidebar: apiSidebar,
};

export default sidebars;
