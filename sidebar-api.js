module.exports = [
  {
    type: 'html',
    className: 'sidebar-title',
    value: 'API',
    defaultStyle: true,
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
