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
  url: 'https://nillion-builder-docs.vercel.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'nillion-oss', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  customFields: {
    // pass in .env variables client side
    downloadBaseUrl: process.env.DOWNLOAD_BASE,
    sdkAppleM: process.env.DOWNLOAD_SDK_APPLE_M,
    sdkAppleIntel: process.env.DOWNLOAD_SDK_APPLE_INTEL,
    sdkLinuxArm: process.env.DOWNLOAD_SDK_LINUX_ARM,
    sdkLinuxIntel: process.env.DOWNLOAD_SDK_LINUX_INTEL,

    pyClientAppleM: process.env.DOWNLOAD_PYCLIENT_APPLE_M,
    pyClientAppleIntel: process.env.DOWNLOAD_PYCLIENT_APPLE_INTEL,
    pyClientLinuxArm: process.env.DOWNLOAD_PYCLIENT_LINUX_ARM,
    pyClientLinuxIntel: process.env.DOWNLOAD_PYCLIENT_LINUX_INTEL,

    pyNadaAppleM: process.env.DOWNLOAD_PYNADA_APPLE_M,
    pyNadaAppleIntel: process.env.DOWNLOAD_PYNADA_APPLE_INTEL,
    pyNadaLinuxArm: process.env.DOWNLOAD_PYNADA_LINUX_ARM,
    pyNadaLinuxIntel: process.env.DOWNLOAD_PYNADA_LINUX_INTEL,
  },

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
          //   'https://github.com/nillion-oss/docusaurus/',
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
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Nillion Documentation',
        logo: {
          alt: 'Nillion logo',
          src: 'img/nillion-logo.jpeg',
        },
        items: [
          {
            href: 'https://github.com/nillion-oss/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
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
      // algolia: {
      //   // The application ID provided by Algolia
      //   appId: process.env.ALGOLIA_APP_ID,

      //   // Public API key: it is safe to commit it
      //   apiKey: process.env.ALGOLIA_API_KEY_SEARCH,

      //   indexName: process.env.ALGOLIA_INDEX_NAME,

      //   // Optional: see doc section below
      //   contextualSearch: true,

      //   // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      //   // externalUrlRegex: 'external\\.com|domain\\.com',

      //   // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
      //   // replaceSearchResultPathname: {
      //   //   from: '/docs/', // or as RegExp: /\/docs\//
      //   //   to: '/',
      //   // },

      //   // Optional: Algolia search parameters
      //   searchParameters: {},

      //   // Optional: path for search page that enabled by default (`false` to disable it)
      //   searchPagePasitemapth: 'search',

      //   //... other Algolia params
      // },
    }),
};

export default config;
