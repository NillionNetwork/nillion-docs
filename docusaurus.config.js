// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';
import 'dotenv/config';
// const { apiSidebar } = require('./sidebar-api');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Nillion Docs',
  tagline:
    'Nillion is a secure computation network that decentralizes trust for high value data',
  favicon: 'img/favicon.ico',
  staticDirectories: ['static'],
  // Set the production url of your site here
  url: 'https://docs.nillion.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  onBrokenAnchors: 'ignore',
  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  markdown: {
    mermaid: true,
  },

  scripts: [
    {
      src: 'https://tag.safary.club/stag-0.1.11.js',
      async: true,
      'data-name': 'safary-sdk',
      'data-product-id': 'prd_rbwHhyTvxR',
      integrity: 'sha256-FcvJgRCaJFszFBKv8MGIbUcmHlVuHp7LX8zGgjfvvGs=',
      crossOrigin: 'anonymous',
    },
    {
      src: 'https://cloud.umami.is/script.js',
      defer: true,
      'data-website-id': '94defefb-94a4-4706-9ec8-7a7333f484c1',
    },
    {
      src: 'https://plausible.io/js/script.tagged-events.js',
      defer: true,
      'data-domain': 'docs.nillion.com',
    },
  ],
  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'google-site-verification',
        content: 'AaBcABcNNZ4eaHnfCCOfrhzAWLWI7IpKLePjkSBMGp4',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/img/favicon-32x32.png',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/img/favicon-16x16.png',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/img/apple-touch-icon.png',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'icon',
        type: 'image/png',
        sizes: '192x192',
        href: '/img/android-chrome-192x192.png',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'icon',
        type: 'image/png',
        sizes: '512x512',
        href: '/img/android-chrome-512x512.png',
      },
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
          docRootComponent: '@theme/DocRoot',
          docItemComponent: '@theme/ApiItem',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/NillionNetwork/nillion-docs/tree/main/',
        },
        blog: {
          routeBasePath: 'articles',
          blogTitle: 'Technical Articles',
          blogDescription: 'Technical articles and insights about Nillion',
          postsPerPage: 10,
          blogSidebarTitle: 'Technical Articles',
          blogSidebarCount: 10,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
  themes: [
    'docusaurus-theme-openapi-docs',
    'docusaurus-theme-github-codeblock',
    '@docusaurus/theme-mermaid',
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      devServer: {
        proxy: {
          '/api': {
            target: 'https://nildb-a50d.nillion.network',
            changeOrigin: true,
            pathRewrite: {
              '^/api': '',
            },
          },
        },
      },
      colorMode: {
        defaultMode: 'dark',
        respectPrefersColorScheme: true,
      },
      image: 'img/nillion-banner.png',
      navbar: {
        logo: {
          alt: 'Nillion logo',
          src: 'img/logo.svg',
          srcDark: 'img/logo-dark-mode.svg',
        },
        items: [
          {
            type: 'doc',
            position: 'left',
            docId: 'learn/what-is-nillion',
            label: 'Learn',
          },
          {
            type: 'doc',
            position: 'left',
            docId: 'build/quickstart',
            label: 'Build',
          },
          // {
          //   type: 'doc',
          //   position: 'left',
          //   docId: 'api/overview',
          //   label: 'API',
          // },
          {
            type: 'doc',
            position: 'left',
            docId: 'community/community-and-support',
            label: 'Community',
          },
          {
            to: '/articles',
            label: 'Articles',
            position: 'left',
          },

          {
            href: 'https://github.com/NillionNetwork',
            className: 'header-github',
            position: 'right',
          },
        ],
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      mermaid: {
        theme: { light: 'neutral', dark: 'dark' },
        options: {
          theme: 'dark',
          themeVariables: {
            primaryColor: '#8a89ff',
            primaryBorderColor: '#4746a7',
            primaryTextColor: '#ffffff',
            lineColor: '#8a89ff',
            secondaryColor: '#1a1a6e',
            tertiaryColor: '#2a2a2a',
            background: '#12125a',
            mainBkg: '#2a2a2a',
            secondBkg: '#1a1a6e',
            tertiaryBkg: '#12125a',
            textColor: '#ffffff',
            labelBoxBkgColor: '#12125a',
            labelTextColor: '#ffffff',
            nodeBorder: '#4746a7',
            clusterBkg: '#1a1a6e',
            clusterBorder: '#4746a7',
            defaultLinkColor: '#8a89ff',
            edgeLabelBackground: '#12125a',
          },
        },
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
      footer: {
        links: [
          {
            title: 'Community',
            items: [
              {
                type: 'link',
                label: 'Discord',
                href: 'https://discord.com/invite/nillionnetwork',
              },
              {
                type: 'link',
                label: 'BuildOnNillion',
                href: 'https://x.com/buildonnillion',
              },
              {
                type: 'link',
                label: 'Nucleus Ecosystem',
                href: 'https://nucleus.nillion.com/',
              },
            ],
          },
          {
            title: 'Builders',
            items: [
              {
                type: 'link',
                label: 'Github',
                href: 'https://github.com/NillionNetwork',
              },
              {
                type: 'link',
                label: 'Github Discussions',
                href: 'https://github.com/orgs/NillionNetwork/discussions',
              },
              {
                type: 'link',
                label: 'Report a Bug',
                href: 'https://github.com/orgs/NillionNetwork/discussions/categories/bugs',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                type: 'link',
                label: 'Website',
                href: 'https://nillion.com',
              },
              {
                type: 'link',
                label: 'X (formerly Twitter)',
                href: 'https://x.com/nillionnetwork',
              },
            ],
          },
        ],
      },
    }),
  plugins: [
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: 'api',
        docsPluginId: 'classic',
        config: {
          nildbapi: {
            specPath: 'apispec/nildb/nildb-combined.yaml',
            outputDir: 'docs/api/nildb',
            sidebarOptions: { groupPathsBy: 'tag' },
          },
          nilaiapi: {
            specPath: 'apispec/nilai-api.yaml',
            outputDir: 'docs/api/nilai',
            sidebarOptions: { groupPathsBy: 'tag' },
          },
        },
      },
    ],
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            to: '/build/private-llms/quickstart',
            from: '/build/secretLLM/quickstart',
          },
          {
            to: '/build/private-storage/quickstart',
            from: '/build/secret-vault-quickstart',
          },
          {
            to: '/build/private-storage/overview',
            from: [
              '/build/secret-vault',
              '/build/secretVault-secretDataAnalytics/build',
              '/build/secretVault-secretDataAnalytics/create-schema',
              '/build/secretVault-secretDataAnalytics/upload',
              '/build/secretVault-secretDataAnalytics/retrive',
              '/build/secretVault-secretDataAnalytics/create-query',
              '/build/secretVault-secretDataAnalytics/query',
            ],
          },
          {
            to: '/build/private-llms/overview',
            from: ['/build/secretLLM/overview', '/build/secretLLM/usage'],
          },
          {
            to: '/build/network-api-access',
            from: [
              '/build/permissions-and-payments/overview',
              '/build/secretVault-secretDataAnalytics/generate-tokens',
              '/build/secretVault-secretDataAnalytics/access',
              '/build/secretLLM/access',
              '/build/api-key',
            ],
          },
          {
            to: '/learn/blind-modules',
            from: '/build/blind-modules',
          },
          {
            to: '/learn/what-is-nillion',
            from: '/what-is-nillion',
          },
          {
            to: '/build/quickstart',
            from: '/quickstart',
          },
          {
            to: '/build/network-config',
            from: '/network',
          },
          {
            to: '/build/private-storage/secretvaults',
            from: '/build/secretvaults',
          },
          {
            to: '/build/private-storage/blindfold',
            from: '/build/blindfold',
          },
          {
            to: '/build/private-llms/nilRAG',
            from: '/build/nilRAG',
          },
          {
            to: '/community/community-and-support',
            from: '/community-and-support',
          },
          {
            to: '/community/guides/testnet',
            from: '/testnet-guides',
          },
          {
            to: '/community/guides/nillion-wallet',
            from: '/guide-nillion-wallet',
          },
          {
            to: '/community/guides/testnet-faucet',
            from: '/guide-testnet-faucet',
          },
          {
            to: '/community/guides/sending-nil',
            from: '/guide-sending-nil',
          },
        ],
      },
    ],
  ],
};

export default config;
