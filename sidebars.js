const docs = [
  {
    type: 'category',
    label: 'Introduction',
    items: [
      {
        type: 'doc',
        label: 'What is Drill4J',
        id: 'overview/why-drill4j',
      },
      {
        type: 'doc',
        label: 'Motivation',
        id: 'overview/motivation',
      },
      {
        type: 'doc',
        label: 'Use cases',
        id: 'overview/use-cases',
      },
      {
        type: 'doc',
        label: 'Key Differences',
        id: 'overview/key-differences',
      },
    ],
  },
  {
    type: 'category',
    label: 'Basics',
    items: [
      {
        type: 'doc',
        label: 'Read First',
        id: 'basic-concepts/basics-read-first',
      },
      {
        type: 'doc',
        label: 'Glossary',
        id: 'basic-concepts/glossary',
      },
      {
        type: 'doc',
        label: 'Data collection',
        id: 'basic-concepts/data-collection',
      },
      {
        type: 'doc',
        label: 'Metrics Calculation',
        id: 'basic-concepts/metrics-calculation',
      },
      {
        type: 'doc',
        label: 'Admin Panel Basics',
        id: 'basic-concepts/admin-panel-basics',
      },
      {
        type: 'doc',
        label: 'Supported Technologies',
        id: 'basic-concepts/supported-technologies',
      },
      {
        type: 'doc',
        label: 'Limitations',
        id: 'basic-concepts/overview-limitations',
      },
      {
        type: 'doc',
        label: 'Microservices',
        id: 'basic-concepts/microservices',
      },
    ],
  },
  {
    type: 'category',
    label: 'Installation',
    items: [
      {
        type: 'doc',
        id: 'installation/setup',
        label: 'Read first',
      },
      {
        type: 'doc',
        id: 'installation/deploy-drill4j-services',
        label: 'Deploy Drill4J services',
      },
      // {
      //   type: 'doc',
      //   id: 'installation/setup-java-agent',
      //   label: 'Java / JVM Agent',
      // },
      // {
      //   type: 'doc',
      //   id: 'installation/setup-javascript-agent',
      //   label: 'JavaScript Agent',
      // },
      // {
      //   type: 'doc',
      //   id: 'installation/setup-autotest-java-agent',
      //   label: 'Autotest Java Agent',
      // },
      // {
      //   type: 'doc',
      //   id: 'installation/setup-browser-extension',
      //   label: 'Browser extension',
      // },
      // {
      //   type: 'doc',
      //   id: 'installation/setup-pwad',
      //   label: 'Postman',
      // },
      // {
      //   type: 'doc',
      //   id: 'installation/setup-cypress',
      //   label: 'Postman',
      // },
      {
        type: 'doc',
        id: 'installation/setup-service-group',
        label: 'Service Group',
      },
    ],
  },
  {
    type: 'category',
    label: 'Configuration',
    items: [
      {
        type: 'doc',
        label: 'Configuration',
        id: 'configuration/configuration',
      },
    ],
  },
  {
    type: 'category',
    label: 'Advanced Topics',
    items: [
      {
        type: 'doc',
        label: 'Performance impact',
        id: 'advanced/performance-considerations',
      },
      {
        type: 'doc',
        label: 'Scalability',
        id: 'advanced/system-requirements-and-scalability',
      },
      {
        type: 'doc',
        label: 'Coverage Implementations',
        id: 'advanced/coverage-implementations',
      },
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
