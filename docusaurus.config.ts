import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import {themes as prismThemes} from 'prism-react-renderer';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import path from 'path';

const config: Config = {
  title: 'Drill4J',
  tagline: 'The tagline of my site',
  url: 'https://Drill4J.github.io',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
  favicon: '/imgs/favicon.ico',
  organizationName: 'Drill4J',
  projectName: 'drill4j.github.io',
  themeConfig: {
    algolia: {
      appId: 'BH4D9OD16A',
      apiKey: '6893440cddb296d0faf1399850200fc6',
      indexName: 'drill4j',
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
    },
    prism: {
      theme: prismThemes.github,
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
  } satisfies Preset.ThemeConfig,
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        theme: {
          customCss: './src/css/custom.scss',
        },
        gtag: undefined,
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-google-tag-manager',
      {
        containerId: 'GTM-NGTZFW2',
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
      href: 'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css',
      type: 'text/css',
      integrity: 'sha384-n8MVd4RsNIU0tAv4ct0nTaAbDJwPJzDEaqSD1odI+WdtXRGWt2kTvGFasHpSy3SV',
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

export default config;
