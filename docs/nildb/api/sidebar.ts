import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "nildb/api/nildb-api",
    },
    {
      type: "category",
      label: "Accounts",
      items: [
        {
          type: "doc",
          id: "nildb/api/retrieve-an-organizations-account-details",
          label: "Retrieve an organization's account details",
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
          id: "nildb/api/list-the-organizations-schemas",
          label: "List the organization's schemas",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "nildb/api/upload-data-to-the-specified-schema-collection",
          label: "Upload data to the specified schema collection",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "nildb/api/retrieve-data-from-the-specified-schema-collection-that-matches-the-provided-filter",
          label: "Retrieve data from the specified schema collection that matches the provided filter",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "nildb/api/update-documents-within-a-schema-collection-that-match-the-given-filter",
          label: "Update documents within a schema collection that match the given filter",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "nildb/api/retrieve-recently-added-documents-from-a-schema-collection",
          label: "Retrieve recently added documents from a schema collection",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "nildb/api/delete-data-records-that-match-a-given-filter",
          label: "Delete data records that match a given filter",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "nildb/api/remove-all-documents-in-a-schema-collection",
          label: "Remove all documents in a schema collection",
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
          id: "nildb/api/list-the-organizations-queries",
          label: "List the organization's queries",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "nildb/api/execute-the-specified-query",
          label: "Execute the specified query",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "System",
      items: [
        {
          type: "doc",
          id: "nildb/api/get-health-status",
          label: "Check service health status",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "nildb/api/get-node-details",
          label: "Retrieve node details",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
