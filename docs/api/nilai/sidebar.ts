import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/nilai/nilai",
    },
    {
      type: "category",
      label: "Attestation",
      items: [
        {
          type: "doc",
          id: "api/nilai/get-attestation-v-1-attestation-report-get",
          label: "Attestation",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Chat",
      items: [
        {
          type: "doc",
          id: "api/nilai/chat-completion-v-1-chat-completions-post",
          label: "Chat",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Health",
      items: [
        {
          type: "doc",
          id: "api/nilai/health-check-v-1-health-get",
          label: "Health",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Model",
      items: [
        {
          type: "doc",
          id: "api/nilai/get-models-v-1-models-get",
          label: "Models",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Usage",
      items: [
        {
          type: "doc",
          id: "api/nilai/get-usage-v-1-usage-get",
          label: "Usage",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
