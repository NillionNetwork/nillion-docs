const apiSidebar = require('./sidebar-api');
const { learnSidebar } = require('./sidebar-learn');
const { buildSidebar } = require('./sidebar-build');
const { communitySidebar } = require('./sidebar-community');
const { blacklightSidebar } = require('./sidebar-blacklight');

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  blacklightSidebar: blacklightSidebar,
  nillionSidebar: [...learnSidebar, ...buildSidebar],
  communitySidebar: communitySidebar,
  apiSidebar: apiSidebar,
};

export default sidebars;
