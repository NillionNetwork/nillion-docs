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
      'api/nilai/create-response-v-1-responses-post',
      'api/nilai/get-attestation-v-1-attestation-report-get',
      'api/nilai/get-models-v-1-models-get',
      'api/nilai/get-usage-v-1-usage-get',
      'api/nilai/health-check-v-1-health-get',
      'api/nilai/get-prompt-store-delegation-v-1-delegation-get',
      {
        type: 'category',
        label: 'Pricing',
        items: [
          'api/nilai/get-all-prices-v-1-pricing-get',
          'api/nilai/get-model-price-v-1-pricing-model-name-get',
        ],
      },
    ],
  },
];
