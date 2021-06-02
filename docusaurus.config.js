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
      additionalLanguages: ['java', 'kotlin'],
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
          to: 'try-demo/',
          label: 'Try demo',
        },
      ],
    },
    footer: {
      links: [
        {
          title: 'Installation',
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
              label: 'Microservices',
              href: '/docs/installation/microservices',
            },
            {
              label: 'Autotest Agent',
              href: '/docs/installation/autotest-agent',
            },
            {
              label: 'Chrome Extension',
              href: '/docs/installation/extension',
            },
          ],
        },
        {
          title: 'Demo Examples',
          items: [
            {
              label: 'Java+JS App',
              href: '/try-demo/#java+js-app',
            },
            {
              label: 'Java App',
              href: '/try-demo/#java-app',
            },
            {
              label: 'JS App',
              href: '/try-demo/#js-app',
            },
          ],
        },
        {
          title: 'Drill4J',
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
