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
    label: 'nilDB API',
    items: [
      'api/nildb/overview',
      'api/nildb/accounts',
      {
        type: 'category',
        label: 'Node',
        items: [
          'api/nildb/get-health-status', // Health
          'api/nildb/get-node-details', // Details
        ],
      },
      {
        type: 'category',
        label: 'Schemas',
        items: [
          'api/nildb/get-schemas', // List Schemas
          'api/nildb/add-schema', // Add Schema
          'api/nildb/delete-schema', // Delete Schema
        ],
      },
      {
        type: 'category',
        label: 'Data',
        items: [
          'api/nildb/upload-data', // Upload
          'api/nildb/read-data', // Read
          'api/nildb/list-new-data', // Tail
          'api/nildb/update-data', // Update
          'api/nildb/delete-data', // Detail
          'api/nildb/delete-all-data', // Flush
        ],
      },
      {
        type: 'category',
        label: 'Queries',
        items: [
          'api/nildb/get-queries', // List Query
          'api/nildb/execute-query', // Execute Query
          'api/nildb/add-query', // Add Query
          'api/nildb/delete-query', // Delete Query
        ],
      },
    ],
  },
  {
    type: 'category',
    label: 'nilAI API',
    items: [
      'api/nilai/overview',
      'api/nilai/chat-completion-v-1-chat-completions-post',
      'api/nilai/get-attestation-v-1-attestation-report-get',
      'api/nilai/get-models-v-1-models-get',
      'api/nilai/get-usage-v-1-usage-get',
      'api/nilai/health-check-v-1-health-get',
    ],
  },
];
