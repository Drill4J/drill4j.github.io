const path = require('path');
const math = require('remark-math');
const katex = require('rehype-katex');

module.exports = {
  title: 'Drill4J',
  tagline: 'The tagline of my site',
  url: 'https://Drill4J.github.io',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: '/img/favicon.ico',
  organizationName: 'Drill4J',
  projectName: 'drill4j.github.io',
  themeConfig: {
    algolia: {
      apiKey: '6893440cddb296d0faf1399850200fc6',
      indexName: 'drill4j',
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
      logo: {
        alt: 'Drill4J Logo',
        src: 'img/drill4j-logo.svg',
      },
      items: [
        {
          type: 'docsVersionDropdown',
          position: 'right',
          // dropdownItemsAfter: [{ to: '/versions', label: 'All versions' }],
          dropdownActiveClassDisabled: true,
        },
        {
          to: 'docs/what-is-drill4j',
          label: 'Documentation',
          position: 'right',
        },
        {
          to: 'https://github.com/Drill4J/realworld-java-and-js-coverage/',
          label: 'Demo',
          position: 'right',
        },
        {
          to: 'https://github.com/Drill4J/drill4j',
          label: 'Github',
          position: 'right',
        },
      ],
    },
    footer: {
      links: [
        {
          title: '1',
          items: [],
        },
        {
          title: '2',
          items: [],
        },
        {
          title: '3',
          items: [
            {
              label: 'Demo',
              href: 'https://github.com/Drill4J/realworld-java-and-js-coverage/',
            },
            {
              label: 'Contact us',
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
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      },
    ],
  ],
  plugins: [
    'docusaurus-plugin-sass',
    [
      'docusaurus-plugin-module-alias',
      {
        alias: {
          '@components': path.resolve(__dirname, './src/components/index.ts'),
          '@static': path.resolve(__dirname, './static'),
        },
      },
    ],
  ],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity: 'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],
};
