const docs = [
  {
    type: 'category',
    label: 'Installation',
    items: ['installation/drill-admin', 'installation/java-agent', 'installation/microservices', 'installation/autotest-agent', 'installation/extension'],
  },
  {
    type: 'category',
    label: 'Configuration',
    items: ['configuration/launch-parameters'],
  },
  {
    type: 'category',
    label: 'For Development',
    items: [
      {
        type: 'category',
        label: 'Java Agent',
        items: ['for-development/java-agent/java-coverage-receiving-event-flow', 'for-development/java-agent/java-switch-scope-event-flow'],
      },
      {
        type: 'category',
        label: 'JavaScript Agent',
        items: ['for-development/java-script-agent/js-agent-admin-be-communication'],
      },
    ],
  },
  {
    type: 'category',
    label: 'API',
    items: ['api/builds-summary'],
  },
  'faq',
];

module.exports = {
  docs,
};
