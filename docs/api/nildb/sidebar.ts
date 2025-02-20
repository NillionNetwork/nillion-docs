import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/nildb/nildb-api",
    },
    {
      type: "category",
      label: "Accounts",
      items: [
        {
          type: "doc",
          id: "api/nildb/accounts",
          label: "Accounts",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Data",
      items: [
        {
          type: "doc",
          id: "api/nildb/upload-data",
          label: "Upload data",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/nildb/read-data",
          label: "Read data",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/nildb/update-data",
          label: "Update data",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/nildb/list-new-data",
          label: "List new data",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/nildb/delete-data",
          label: "Delete data",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/nildb/delete-all-data",
          label: "Delete all data",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Query",
      items: [
        {
          type: "doc",
          id: "api/nildb/get-queries",
          label: "Get queries",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/nildb/add-query",
          label: "Add query",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/nildb/delete-query",
          label: "Delete query",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/nildb/execute-query",
          label: "Execute query",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Schema",
      items: [
        {
          type: "doc",
          id: "api/nildb/get-schemas",
          label: "Get schemas",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/nildb/add-schema",
          label: "Add schema",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/nildb/delete-schema",
          label: "Delete schema",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "Node",
      items: [
        {
          type: "doc",
          id: "api/nildb/get-health-status",
          label: "Health",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/nildb/get-node-details",
          label: "Node Details",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
