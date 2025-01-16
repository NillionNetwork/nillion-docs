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
      'nildb/api/get-health-status',
      'nildb/api/get-node-details',
      'nildb/api/list-the-organizations-queries',
      'nildb/api/list-the-organizations-schemas',
      'nildb/api/delete-data-records-that-match-a-given-filter',
      'nildb/api/execute-the-specified-query',
      'nildb/api/remove-all-documents-in-a-schema-collection',
      'nildb/api/retrieve-an-organizations-account-details',
      'nildb/api/retrieve-an-organizations-account-details',
      'nildb/api/retrieve-data-from-the-specified-schema-collection-that-matches-the-provided-filter',
      'nildb/api/retrieve-recently-added-documents-from-a-schema-collection',
      'nildb/api/update-documents-within-a-schema-collection-that-match-the-given-filter',
      'nildb/api/upload-data-to-the-specified-schema-collection',
    ],
  },
];
