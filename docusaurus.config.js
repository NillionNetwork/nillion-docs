// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';
import 'dotenv/config';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Nillion Builder Docs',
  tagline:
    'Nillion is a secure computation network that decentralizes trust for high value data',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.nillion.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  scripts: [
    {
      src: '/js/piwik.js',
      async: false,
    },
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/NillionNetwork/nillion-docs/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
  themes: ['docusaurus-theme-github-codeblock'],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/nillion-banner.jpeg',
      navbar: {
        logo: {
          alt: 'Nillion logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            href: 'https://github.com/NillionNetwork',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://www.nillhub.com',
            label: 'Forum',
            position: 'right',
          },
        ],
      },
      footer: {
        copyright: `Copyright © ${new Date().getFullYear()} Nillion`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      codeblock: {
        showGithubLink: true,
        githubLinkLabel: 'View on GitHub',
        showRunmeLink: false,
        runmeLinkLabel: 'Checkout via Runme',
      },
      algolia: {
        appId: 'I1AVSJUXEA',
        apiKey: '54efdeb0639df4a13b0e58e37360efe9', // search only - safe to share
        indexName: 'nillion_docs',
        searchPagePasitemapth: 'search',
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },
    }),
};

export default config;
