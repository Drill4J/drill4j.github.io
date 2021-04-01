module.exports = {
  title: 'My Site',
  tagline: 'The tagline of my site',
  url: 'https://Drill4J.github.io',
  baseUrl: '/drill4j-website/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Drill4J',
  projectName: 'drill4j-website',
  themeConfig: {
    prism: {
      additionalLanguages: ['java', 'kotlin'],
    },
    navbar: {
      title: 'Drill4J',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        { to: 'blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/Drill4J',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      copyright: `
          <span class="footer__copyright__info">
            Sponsored by
            <a href="https://www.epam-group.ru/" target="_blank" rel="noreferrer noopener">
              <img src="img/epam-logo.svg" alt="Epam" />
            </a>
            Licensed under Apache v2.0
          </span>
          <div class="footer__copyright__social-links">
            <a 
              class="footer__copyright__social-links__git-hub"
              href="https://github.com/Drill4J" target="_blank"
              rel="noreferrer noopener"
            ></a>
            <a 
              class="footer__copyright__social-links__telegram"
              href="https://t.me/drill4j" 
              target="_blank" rel="noreferrer noopener"
            ></a>
            <a 
              class="footer__copyright__social-links__twiter"
              href="#" target="_blank" rel="noreferrer noopener"
            ></a>
            <a 
              class="footer__copyright__social-links__youtube"
              href="https://www.youtube.com/channel/UCJtegUnUHr0bO6icF1CYjKw/featured"
              target="_blank" rel="noreferrer noopener"
            ></a>
          </div>
      `,
      links: [
        {
          items: [
            {
              html: `
              <div class="footer__item__logo">
                <a href="https://github.com/Drill4J" target="_blank" rel="noreferrer noopener">
                  <img src="img/drill4j-logo-grayscale.svg" alt="drill4j github" />
                </a>
              </div>
                `,
            },
          ],
        },
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
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      },
    ],
  ],
  plugins: ['docusaurus-plugin-sass'],
};
