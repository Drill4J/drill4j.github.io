const path = require('path');
const math = require('remark-math');
const katex = require('rehype-katex');

/** Single source of truth for public contact email (navbar, footer, landing, mailto CTAs). */
const CONTACT_EMAIL = 'ProjectEPM-D4J@epam.com';
const mailto = (subject) => (
  subject
    ? `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}`
    : `mailto:${CONTACT_EMAIL}`
);

module.exports = {
  title: 'Drill4J',
  tagline: 'Continuous test gap & impact analysis for JVM and beyond',
  url: 'https://Drill4J.github.io',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: '/imgs/favicon.ico',
  organizationName: 'Drill4J',
  projectName: 'drill4j.github.io',
  customFields: {
    contactEmail: CONTACT_EMAIL,
  },
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
        src: 'imgs/drill4j-logo.svg',
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
          href: mailto('Drill4J demo request'),
          label: 'Request demo',
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
          title: 'Product',
          items: [
            {
              label: 'Documentation',
              to: 'docs/what-is-drill4j',
            },
            {
              label: 'Request demo',
              href: mailto('Drill4J demo request'),
            },
            {
              label: 'GitHub',
              href: 'https://github.com/Drill4J/drill4j',
            },
          ],
        },
        {
          title: 'Connect',
          items: [
            {
              label: 'Telegram',
              href: 'https://t.me/drill4j',
            },
            {
              label: 'YouTube',
              href: 'https://www.youtube.com/channel/UCJtegUnUHr0bO6icF1CYjKw/featured',
            },
            {
              label: 'Contact us',
              href: mailto(),
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
    [
      require.resolve('docusaurus-gtm-plugin'),
      {
        id: 'GTM-NGTZFW2', // GTM Container ID
      },
    ],
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
  scripts: [
    {
      src: 'https://cookie-cdn.cookiepro.com/consent/0193cf92-5110-7699-8ea2-b1350ca5e293/OtAutoBlock.js',
      type: 'text/javascript',
    },
    {
      src: 'https://cookie-cdn.cookiepro.com/scripttemplates/otSDKStub.js',
      type: 'text/javascript',
      charset: 'UTF-8',
      'data-domain-script': '0193cf92-5110-7699-8ea2-b1350ca5e293',
    },
    {
      src: 'data:text/javascript,function%20OptanonWrapper%20()%20{}',
      type: 'text/javascript',
    },
  ],
};
