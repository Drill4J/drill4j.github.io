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
      apiKey: '47ecd3b21be71c5822571b9f59e52544',
      indexName: 'docusaurus-2',
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
              label: 'Browser Extension',
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
