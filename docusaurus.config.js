module.exports = {
  title: 'Drill4J',
  tagline: 'The tagline of my site',
  url: 'https://Drill4J.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: '/img/logo.svg',
  organizationName: 'Drill4J',
  projectName: 'drill4j.github.io',
  themeConfig: {
    algolia: {
      apiKey: '6893440cddb296d0faf1399850200fc6',
      indexName: 'drill4j',
    },
    gtag: {
      trackingID: 'UA-147653671-1',
      anonymizeIP: true,
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
    },
    prism: {
      theme: require('prism-react-renderer/themes/github'),
      additionalLanguages: ['java'],
    },
    navbar: {
      items: [
        {
          to: 'how-to-start/',
          label: 'How to start',
        },
        {
          to: 'docs/installation/drill-admin',
          label: 'Documentation',
        },
        {
          to: 'install-demo/',
          label: 'Install demo',
        },
      ],
    },
    footer: {
      links: [
        {
          title: ' ',
          items: [
            {
              label: 'Drill Admin',
              href: '/docs/installation/drill-admin',
            },
            {
              label: 'Java Agent',
              href: '/docs/installation/java-agent',
            },
            {
              label: 'Autotest Agent',
              href: '/docs/installation/autotest-agent',
            },
          ],
        },
        {
          title: ' ',
          items: [
            {
              label: 'Microservices',
              href: '/docs/installation/microservices',
            }, {
              label: 'Chrome Extension',
              href: '/docs/installation/extension',
            },
            {
              label: 'Java + JS example App',
              href: '/install-demo',
            },
          ],
        },
        {
          title: ' ',
          items: [
            {
              label: 'Contact us',
              href: 'https://t.me/drill4j',
            },
            {
              label: 'FAQ',
              href: '/docs/faq/',
            },
          ],
        },
      ],
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      },
    ],
  ],
  plugins: ['docusaurus-plugin-sass'],
};
