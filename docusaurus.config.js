module.exports = {
  title: 'My Site',
  tagline: 'The tagline of my site',
  url: 'https://Drill4J.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Drill4J',
  projectName: 'drill4j-website',
  themeConfig: {
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
          to: 'installation/',
          label: 'Installation',
        },
        {
          to: 'docs/',
          label: 'Documentation',
        },
        {
          to: 'docs/',
          label: 'Try demo',
        },
      ],
    },
    footer: {
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Features',
              to: 'docs/',
            },
            {
              label: 'Plugins',
              to: 'docs/doc2/',
            },
            {
              label: 'FAQ',
              to: 'docs/doc2/',
            },
          ],
        },
        {
          title: 'Installation',
          items: [
            {
              label: 'Java Agent',
              href: '#',
            },
            {
              label: 'JS Agent',
              href: '#',
            },
            {
              label: 'Auto tests Agent',
              href: '#',
            },
            {
              label: 'Chrome Extension',
              href: '#',
            },
          ],
        },
        {
          title: 'Drill4j',
          items: [
            {
              label: 'About',
              href: '#',
            },
            {
              label: 'Contacts us',
              href: 'https://t.me/drill4j',
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
