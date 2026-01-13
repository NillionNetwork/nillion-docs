const apiSidebar = require('./sidebar-api');
const { learnSidebar } = require('./sidebar-learn');
const { buildSidebar } = require('./sidebar-build');
const { communitySidebar } = require('./sidebar-community');
const { blacklightSidebar } = require('./sidebar-blacklight');

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  nillionSidebar: [...learnSidebar, ...buildSidebar, ...communitySidebar],
  apiSidebar: apiSidebar,
  blacklightSidebar: blacklightSidebar,
};

export default sidebars;
