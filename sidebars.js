/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  nillionSidebar: [
    {
      type: 'html',
      value: '<span class="sidebar-divider" />',
    },
    'welcome',
    'nucleus-builders-program',

    {
      type: 'html',
      className: 'sidebar-title',
      value: 'About',
      defaultStyle: true,
    },
    'about/what-is-nillion',
    'about/high-value-data',
    'about/multi-party-computation',
    'about/nillions-mpc-protocol',

    {
      type: 'html',
      className: 'sidebar-title',
      value: 'Components',
      defaultStyle: true,
    },
    'nillion-components/concepts',
    'nillion-components/nillion-sdk-and-tools',
    'nillion-components/nillion-client',
    'nillion-components/nada-lang-framework',
    {
      type: 'html',
      className: 'sidebar-title',
      value: 'Resources',
      defaultStyle: true,
    },
    'resources/community-and-support',
    'resources/running-a-node',
    'resources/technical-reports-and-demos',
    'resources/glossary',
    // {
    //   type: 'category',
    //   label: 'About',
    //   items: [
    //     'about/what-is-nillion',
    //     'about/high-value-data',
    //     'about/multi-party-computation',
    //     'about/nillions-mpc-protocol',
    //   ],
    // },
    // {
    //   type: 'category',
    //   label: 'Nillion Components',
    //   items: [
    //     'nillion-components/concepts',
    //     'nillion-components/nillion-sdk-and-tools',
    //     'nillion-components/nillion-client',
    //     'nillion-components/nada-lang-framework',
    //   ],
    // },
    // {
    //   type: 'category',
    //   label: 'Resources',
    //   items: [
    //     'resources/community-and-support',
    //     'resources/running-a-node',
    //     'resources/technical-reports-and-demos',
    //     'resources/glossary',
    //     'resources/test',
    //   ],
  ],
};

export default sidebars;
