const path = require("path");
const math = require("remark-math");
const katex = require("rehype-katex");

module.exports = {
  title: "Drill4J",
  tagline: "The tagline of my site",
  url: "https://Drill4J.github.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "/img/favicon.ico",
  organizationName: "Drill4J",
  projectName: "drill4j.github.io",
  themeConfig: {
    algolia: {
      apiKey: "6893440cddb296d0faf1399850200fc6",
      indexName: "drill4j"
    },
    gtag: {
      trackingID: "UA-147653671-1",
      anonymizeIP: true
    },
    colorMode: {
      defaultMode: "light",
      disableSwitch: true
    },
    prism: {
      theme: require("prism-react-renderer/themes/github"),
      additionalLanguages: ["java"]
    },
    navbar: {
      items: [
        {
          to: "docs/overview/why-drill4j",
          label: "Documentation"
        },
        {
          to: "https://github.com/Drill4J/realworld-java-and-js-coverage/",
          label: "Install demo"
        }
      ]
    },
    footer: {
      links: [
        {
          title: "1",
          items: [
            {
              label: "Drill Admin",
              href: "/docs/setup/drill-admin"
            },
            {
              label: "Java Agent",
              href: "/docs/setup/java-agent"
            },
            {
              label: "Autotest Agent",
              href: "/docs/setup/autotest-agent"
            }
          ]
        },
        {
          title: "2",
          items: [
            {
              label: "Microservices",
              href: "/docs/setup/microservices"
            },
            {
              label: "Chrome Extension",
              href: "/docs/setup/extension"
            },
            {
              label: "Java + JS example App",
              href: "https://github.com/Drill4J/realworld-java-and-js-coverage/"
            }
          ]
        },
        {
          title: "3",
          items: [
            {
              label: "Contact us",
              href: "https://t.me/drill4j"
            },
            {
              label: "FAQ",
              href: "/docs/faq/"
            }
          ]
        }
      ]
    }
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          remarkPlugins: [math],
          rehypePlugins: [katex]
        },
        theme: {
          customCss: require.resolve("./src/css/custom.scss")
        }
      }
    ]
  ],
  plugins: [
    [
      require.resolve("docusaurus-gtm-plugin"),
      {
        id: "GTM-NGTZFW2" // GTM Container ID
      }
    ],
    "docusaurus-plugin-sass",
    [
      "docusaurus-plugin-module-alias",
      {
        alias: {
          "@components": path.resolve(__dirname, "./src/components/index.ts"),
          "@static": path.resolve(__dirname, "./static")
        }
      }
    ]
  ],
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous"
    }
  ]
};
