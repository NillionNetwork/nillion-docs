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
    'quickstart',

    {
      type: 'html',
      className: 'sidebar-title',
      value: 'About',
      defaultStyle: true,
    },
    'what-is-nillion',
    'high-value-data',
    'multi-party-computation',
    'nillions-mpc-protocol',

    {
      type: 'html',
      className: 'sidebar-title',
      value: 'Components',
      defaultStyle: true,
    },
    'concepts',
    {
      type: 'category',
      label: 'Nillion SDK and Tools',
      link: {
        type: 'doc',
        id: 'nillion-sdk-and-tools',
      },
      items: [
        'user-keygen',
        'node-keygen',
        'node-key2peerid',
        'pynadac',
        'program-simulator',
        'run-local-cluster',
        'nil-cli',
      ],
    },
    {
      type: 'category',
      label: 'Nillion Client',
      link: {
        type: 'doc',
        id: 'nillion-client',
      },
      items: [
        {
          type: 'link',
          label: 'Python Client Reference',
          href: 'https://nillion-builder-docs.vercel.app/pydocs/client.html',
        },
        {
          type: 'category',
          label: 'Python Nillion Client Examples',
          link: {
            type: 'doc',
            id: 'python-client-examples',
          },
          collapsed: false,
          items: [
            {
              type: 'link',
              label: 'Single Party Examples',
              href: 'https://github.com/nillion-oss/nillion-python-starter/tree/main/client_single_party_compute',
            },
            {
              type: 'link',
              label: 'Multi Party Examples',
              href: 'https://github.com/nillion-oss/nillion-python-starter/tree/main/client_multi_party_compute',
            },
            {
              type: 'link',
              label: 'Permissions Examples',
              href: 'https://github.com/nillion-oss/nillion-python-starter/tree/main/permissions',
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Nada-Lang Framework',
      link: {
        type: 'doc',
        id: 'nada-lang-framework',
      },
      items: [
        {
          type: 'link',
          label: 'Nada Program Examples',
          href: 'https://github.com/nillion-oss/nillion-python-starter/programs',
        },
      ],
    },
    {
      type: 'html',
      className: 'sidebar-title',
      value: 'Resources',
      defaultStyle: true,
    },
    'community-and-support',
    'running-a-node',
    'technical-reports-and-demos',
    'glossary',
  ],
};

export default sidebars;
