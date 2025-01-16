module.exports = [
  {
    type: 'html',
    className: 'sidebar-title',
    value: 'API',
    defaultStyle: true,
  },
  'api/overview',
  {
    type: 'category',
    label: 'NilDB API',
    items: [
      'api/nildb/overview',
      'api/nildb/get-health-status', // Health
      'api/nildb/get-node-details', // About
      'api/nildb/retrieve-an-organizations-account-details',
      {
        type: 'category',
        label: 'List Schemas',
        items: [
          'api/nildb/upload-data-to-the-specified-schema-collection', // Upload / Read
          'api/nildb/retrieve-data-from-the-specified-schema-collection-that-matches-the-provided-filter', // XXX
          'api/nildb/retrieve-recently-added-documents-from-a-schema-collection', // XXX
          'api/nildb/update-documents-within-a-schema-collection-that-match-the-given-filter', // XXX
          'api/nildb/delete-data-records-that-match-a-given-filter', // Detail
          'api/nildb/remove-all-documents-in-a-schema-collection', // Flush
          'api/nildb/list-the-organizations-schemas', // List
        ],
      },
      {
        type: 'category',
        label: 'List Queries',
        items: [
          'api/nildb/list-the-organizations-queries', // List
          'api/nildb/execute-the-specified-query', // Execute
        ],
      },
    ],
  },
];
