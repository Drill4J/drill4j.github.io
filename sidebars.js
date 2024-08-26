const docs = [
  {
    type: 'category',
    label: 'Introduction',
    items: [
      {
        type: 'doc',
        label: 'What is Drill4J',
        id: 'overview/what-is-drill4j',
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
    ],
  },
  {
    type: 'category',
    label: 'Getting Started',
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
      {
        type: 'doc',
        id: 'installation/setup-java-agent',
        label: 'Java / JVM Agent',
      },
      {
        type: 'doc',
        id: 'installation/setup-browser-extension',
        label: 'Browser extension',
      },
      {
        type: 'doc',
        id: 'installation/setup-java-autotest-agent',
        label: 'Java Autotest Agent',
      },
    ],
  },
  {
    type: 'category',
    label: '.NET agent',
    items: [
      'drill4net/drill4j-admin-installation',
      'drill4net/drill4net-apps',
      'drill4net/one-time-setup',
      'drill4net/quick-start-guide',
      'drill4net/ci-cd-integration',
      'drill4net/app-under-test-setup',
      'drill4net/tests-project-setup',
      'drill4net/drill4net-scanner-parameters',
      'drill4net/chrome-extention',
      'drill4net/known-issues',
      'drill4net/support-matrix',
    ],
  },
];

module.exports = {
  docs,
};
