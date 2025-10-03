const buildSidebar = [
  {
    type: "html",
    className: "sidebar-title",
    value: "Build",
    defaultStyle: true,
  },
  {
    type: "doc",
    label: "Start Building",
    id: "build/quickstart",
  },
  "build/network-config",
  {
    type: "doc",
    label: "Network API Access",
    id: "build/network-api-access",
  },
  {
    type: "category",
    label: "Private Compute with nilCC",
    link: {
      type: "doc",
      id: "build/compute/overview",
    },
    items: [
      {
        type: "doc",
        label: "Quickstart",
        id: "build/compute/quickstart",
      },
      {
        type: "doc",
        label: "Architecture",
        id: "build/compute/architecture",
      },
      {
        type: "doc",
        label: "Key Terms",
        id: "build/compute/key-terms",
      },
      {
        type: "doc",
        label: "API Reference",
        id: "build/compute/api-reference",
      },
      {
        type: "doc",
        label: "Limitations",
        id: "build/compute/limitations",
      },
      {
        type: "link",
        label: "nilCC Workload Manager",
        href: "https://nilcc.nillion.com",
      },
    ],
  },
  {
    type: "category",
    label: "Private Storage with nilDB",
    link: {
      type: "doc",
      id: "build/private-storage/overview",
    },

    items: [
      {
        type: "doc",
        label: "Quickstart",
        id: "build/private-storage/quickstart",
      },
      {
        type: "doc",
        label: "Collection Explorer Tool",
        id: "build/private-storage/collection-explorer",
      },
      {
        type: "category",
        label: "Secretvaults SDK",
        link: {
          type: "doc",
          id: "build/private-storage/secretvaults",
        },
        collapsed: false,
        items: [
          {
            type: "category",
            label: "Integration by Platform",
            link: {
              type: "doc",
              id: "build/private-storage/platform",
            },
            collapsed: false,
            items: [
              {
                type: "doc",
                label: "TypeScript SDK Docs",
                id: "build/private-storage/ts-docs",
              },
              {
                type: "doc",
                label: "Node.js",
                id: "build/private-storage/platform-nodejs",
              },
              {
                type: "doc",
                label: "Next.js",
                id: "build/private-storage/platform-nextjs",
              },
              {
                type: "doc",
                label: "React",
                id: "build/private-storage/platform-react",
              },
              {
                type: "link",
                label: "Python",
                href: "https://github.com/NillionNetwork/secretvaults-py/tree/main/examples#example-scripts",
              },
            ],
          },
          {
            type: "link",
            label: "nilDB Encryption",
            href: "/articles/nildb-encryption",
          },
        ],
      },
      {
        type: "category",
        label: "Blindfold Library",
        link: {
          type: "doc",
          id: "build/private-storage/blindfold",
        },
        items: [
          {
            type: "link",
            label: "blindfold-ts",
            href: "https://github.com/NillionNetwork/blindfold-ts",
          },
          {
            type: "link",
            label: "blindfold-py",
            href: "https://github.com/NillionNetwork/blindfold-py",
          },
        ],
      },
      // {
      //   type: 'doc',
      //   label: 'nilDB API',
      //   id: 'api/nildb/overview',
      // },
    ],
  },
  {
    type: "category",
    label: "Private LLMs with nilAI",
    link: {
      type: "doc",
      id: "build/private-llms/overview",
    },
    items: [
      "build/private-llms/quickstart",
      "build/private-llms/usage",
      {
        type: "link",
        label: "Examples",
        href: "https://github.com/NillionNetwork/blind-module-examples/tree/main/nilai",
      },
      {
        type: "category",
        label: "Advanced Usage",
        items: [
          "build/private-llms/advanced/web_search",
          "build/private-llms/advanced/private_prompts",
        ],
      },
      {
        type: "category",
        label: "nilRAG Library",
        link: {
          type: "doc",
          id: "build/private-llms/nilRAG",
        },
        items: [
          {
            type: "link",
            label: "nilrag-py",
            href: "https://github.com/NillionNetwork/nilrag",
          },
          {
            type: "link",
            label: "Examples",
            href: "https://github.com/NillionNetwork/nilrag/tree/main/examples",
          },
        ],
      },
      {
        type: "doc",
        label: "nilAI API",
        id: "api/nilai/overview",
      },
    ],
  },
  {
    type: "doc",
    label: "Permissions and Payments",
    id: "build/permissions-and-payments",
  },
  "build/ai-assisted-workflow",
  {
    type: "doc",
    label: "Developer Tools",
    id: "tools",
  },
];

module.exports = {
  buildSidebar,
};
