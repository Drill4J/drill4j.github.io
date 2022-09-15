const docs = [
  {
    type: 'category',
    label: 'Overview',
    items: ['overview/why-drill4j', 'overview/key-differences'],
  },
  {
    type: 'category',
    label: 'Concepts',
    items: [
      {
        type: 'doc',
        label: 'Glossary',
        id: 'basic-concepts/glossary',
      },
      {
        type: 'doc',
        label: 'Microservices Guide',
        id: 'basic-concepts/microservices',
      },
    ],
  },
  {
    type: 'category',
    label: 'Installation',
    items: [
      'installation/setup',
      'installation/setup-java-agent',
      'installation/setup-javascript-agent',
      'installation/setup-service-group',
    ],
  },
  'faq',
  {
    type: 'category',
    label: 'Releases',
    items: [
      'releases/pre-release-0-8-0-alpha',
      'releases/release-0-7-0',
      'releases/release-0-6-0',
      'releases/release-0-5-0',
      'releases/release-0-4-0',
      'releases/release-0-3-0',
      'releases/release-0-2-0',
    ],
  },
  {
    type: 'category',
    label: 'Docs Archive (pre 0.8.0)',
    items: [
      {
        type: 'category',
        label: 'setup',
        items: [
          'pre-0.8.0/installation/drill-admin',
          'pre-0.8.0/installation/java-agent',
          'pre-0.8.0/installation/microservices',
          'pre-0.8.0/installation/autotest-agent',
          'pre-0.8.0/installation/extension',
        ],
      },
      {
        type: 'category',
        label: 'Configuration',
        items: ['pre-0.8.0/configuration/launch-parameters'],
      },
      {
        type: 'category',
        label: 'For Development',
        items: [
          {
            type: 'category',
            label: 'Java Agent',
            items: [
              'pre-0.8.0/for-development/java-agent/java-coverage-receiving-event-flow',
              'pre-0.8.0/for-development/java-agent/java-switch-scope-event-flow',
            ],
          },
          {
            type: 'category',
            label: 'JavaScript Agent',
            items: ['pre-0.8.0/for-development/java-script-agent/js-agent-admin-be-communication'],
          },
        ],
      },
      {
        type: 'category',
        label: 'API',
        items: ['pre-0.8.0/api/builds-summary'],
      },
      {
        type: 'category',
        label: 'Diagrams',
        items: ['pre-0.8.0/diagrams/auto-test-agent-diagrams', 'pre-0.8.0/diagrams/testing-diagrams'],
      },
      'pre-0.8.0/supported-frameworks',
      'pre-0.8.0/core-concepts',
    ],
  },
];

module.exports = {
  docs,
};
