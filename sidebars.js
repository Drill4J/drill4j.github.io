const docs = [
  {
    type: 'category',
    label: 'Installation',
    items: ['installation/drill-admin', 'installation/java-agent', 'installation/microservices',
      'installation/autotest-agent', 'installation/extension'],
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
  {
    type: 'category',
    label: 'Diagrams',
    items: ['diagrams/auto-test-agent-diagrams', 'diagrams/testing-diagrams'],
  },
  {
    type: 'category',
    label: 'Releases',
    items: ['releases/pre-release-0-8-0-alpha', 'releases/release-0-7-0', 'releases/release-0-6-0',
      'releases/release-0-5-0', 'releases/release-0-4-0', 'releases/release-0-3-0', 'releases/release-0-2-0'],
  },
  'supported-frameworks', 'faq',
];

module.exports = {
  docs,
};
