import { themes as prismThemes } from "prism-react-renderer"
import type { Config } from "@docusaurus/types"
import type * as Preset from "@docusaurus/preset-classic"

const config: Config = {
  plugins: [
    function fixPlyrEsmPlugin() {
      return {
        name: "fix-plyr-esm",
        configureWebpack() {
          return {
            module: {
              rules: [
                {
                  test: /\.m?js$/,
                  resolve: {
                    fullySpecified: false
                  }
                }
              ]
            }
          }
        }
      }
    }
  ],
  title: "PassNAT 文档中心",
  tagline: "你想知道的都在这里",
  favicon: "img/logo.svg",
  staticDirectories: ["static", "public"],
  // Set the production url of your site here
  url: "https://doc.passnat.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Star-Flex", // Usually your GitHub org/user name.
  projectName: "passnat-doc", // Usually your repo name.

  onBrokenLinks: "throw",

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: "warn"
    }
  },

  future: {
    v4: true,
    experimental_faster: true
  },

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "zh-Hans",
    locales: ["zh-Hans"]
  },
  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/Star-Flex/passnat-doc/tree/main"
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css"
        },
        sitemap: {
          lastmod: "date",
          changefreq: "weekly",
          priority: 0.5,
          ignorePatterns: ["/tags/**"],
          filename: "sitemap.xml",
          createSitemapItems: async (params) => {
            const { defaultCreateSitemapItems, ...rest } = params
            const items = await defaultCreateSitemapItems(rest)
            return items.filter((item) => !item.url.includes("/page/"))
          }
        }
      } satisfies Preset.Options
    ]
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    algolia: {
      // The application ID provided by Algolia
      appId: "U4DH6S3C9R",

      // Public API key: it is safe to commit it
      apiKey: "df8d5a3f390314483794e835497676e5",

      indexName: "passnat",

      // Optional: see doc section below
      contextualSearch: true,

      // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      // externalUrlRegex: "external\\.com|domain\\.com",

      // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
      // replaceSearchResultPathname: {
      //   from: "/docs/", // or as RegExp: /\/docs\//
      //   to: "/"
      // },

      // Optional: Algolia search parameters
      searchParameters: {},

      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: "search",

      // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
      insights: false

      //... other Algolia params
    },
    navbar: {
      title: "PassNAT",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.svg"
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "文档"
        },
        {
          to: "/aipage",
          label: "AI对话",
          position: "left"
        },
        {
          to: "https://dashboard.passnat.com",
          label: "控制台",
          position: "left"
        },
        {
          href: "https://github.com/star-flex/passnat-doc",
          label: "GitHub",
          position: "right"
        }
      ]
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Tutorial",
              to: "/docs/intro"
            }
          ]
        },
        {
          title: "Community",
          items: [
            // {
            //   label: "Stack Overflow",
            //   href: "https://stackoverflow.com/questions/tagged/docusaurus",
            // },
            {
              label: "QQ Group",
              href: "https://qm.qq.com/q/2KNMIOn4UM"
            }
          ]
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/star-flex/passnat-doc"
            }
          ]
        }
      ],
      copyright: `<div style="display: flex; flex-direction: column; align-items : center;">
        <div>Copyright © ${new Date().getFullYear()} PassNat, Inc. Built with Docusaurus.</div>
        <a href="https://beian.miit.gov.cn" target="_blank">浙 ICP 备2022019220号 -3</a>
      </div>`
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula
    }
  } satisfies Preset.ThemeConfig
}

export default config
