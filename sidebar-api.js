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
      'api/nildb/get-health-status',
      'api/nildb/get-node-details',
      'api/nildb/list-the-organizations-queries',
      'api/nildb/list-the-organizations-schemas',
      'api/nildb/delete-data-records-that-match-a-given-filter',
      'api/nildb/execute-the-specified-query',
      'api/nildb/remove-all-documents-in-a-schema-collection',
      'api/nildb/retrieve-an-organizations-account-details',
      'api/nildb/retrieve-an-organizations-account-details',
      'api/nildb/retrieve-data-from-the-specified-schema-collection-that-matches-the-provided-filter',
      'api/nildb/retrieve-recently-added-documents-from-a-schema-collection',
      'api/nildb/update-documents-within-a-schema-collection-that-match-the-given-filter',
      'api/nildb/upload-data-to-the-specified-schema-collection',
    ],
  },
];
