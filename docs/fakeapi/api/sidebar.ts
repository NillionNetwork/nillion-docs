import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "fakeapi/api/test-api",
    },
    {
      type: "category",
      label: "UNTAGGED",
      items: [
        {
          type: "doc",
          id: "fakeapi/api/get-posts",
          label: "Get all posts",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "fakeapi/api/get-post-by-id",
          label: "Get a post by ID",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
