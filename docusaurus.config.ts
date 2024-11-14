import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { themes as prismThemes } from "prism-react-renderer";
import remarkTokenReplacer from "./src/plugins/replace-tokens";

const globalVariables = {
  "{{VERSION_REWRITE_RECIPE_BOM}}": "2.22.0",
  "{{VERSION_REWRITE_GRADLE_PLUGIN}}": "6.27.1",
  "{{VERSION_REWRITE_JAVA_DEPENDENCIES}}": "1.23.0",
  "{{VERSION_REWRITE_LOGGING_FRAMEWORKS}}": "2.16.0",
  "{{VERSION_REWRITE_MAVEN_PLUGIN}}": "5.45.0",
  "{{VERSION_REWRITE_MIGRATE_JAVA}}": "2.29.0",
  "{{VERSION_REWRITE_TEMPLATING}}": "1.17.1",
  "{{VERSION_REWRITE_TESTING_FRAMEWORKS}}": "2.22.0",
  "{{VERSION_REWRITE_SPRING}}": "5.23.0",
  "{{VERSION_REWRITE_STATIC_ANALYSIS}}": "1.20.0",
};

const config: Config = {
  title: "OpenRewrite Docs",
  tagline: "Large-scale automated source code refactoring",
  favicon: "img/favicon.svg",

  url: "https://docs.openrewrite.org",
  baseUrl: "/",

  organizationName: "openrewrite",
  projectName: "rewrite-docs",
  deploymentBranch: "docusaurus",
  trailingSlash: false,

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarCollapsible: true,
          sidebarPath: "./sidebars.ts",
          editUrl: "https://github.com/openrewrite/rewrite-docs/edit/master",
          remarkPlugins: [
            [
              remarkTokenReplacer,
              {
                replacements: globalVariables,
              },
            ],
          ],
        },
        gtag: {
          trackingID: "G-Y67JVX3WB7",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  future: {
    experimental_faster: true,
  },

  themeConfig: {
    algolia: {
      appId: "8XDBE5G3ZV",
      apiKey: "14363fc8de10ed3d1785fe6d17a92631",
      indexName: "openrewrite",
    },
    announcementBar: {
      id: "code_remix",
      content:
        'Now announcing the inaugural <a href="https://coderemix.ai/"><strong>Code Remix Summit</strong></a> – in Miami May 12th-14th. Use the code <strong>MODERNE3VIP</strong> for an additional $300 off.',
      textColor: "#E3F2FD",
    },
    image: "img/moderne-poster-logo.svg",
    colorMode: {
      respectPrefersColorScheme: true,
    },
    metadata: [
      { 
        name: 'keywords', 
        content: 'auto-remediation, Java, migrate, Moderne, OpenRewrite, refactoring, SAST, SCA, Spring Boot Migration, security' 
      },
    ],
    navbar: {
      logo: {
        alt: "OpenRewrite Logo",
        src: "img/logo.svg",
        srcDark: "img/darkLogo.svg",
      },
      items: [
        {
          href: "https://github.com/openrewrite",
          label: "GitHub",
          position: "right",
        },
        {
          href: "https://join.slack.com/t/rewriteoss/shared_invite/zt-nj42n3ea-b~62rIHzb3Vo0E1APKCXEA",
          label: "Slack",
          position: "right",
        },
        {
          href: "https://discord.gg/xk3ZKrhWAb",
          label: "Discord",
          position: "right",
        },
        {
          href: "https://docs.moderne.io",
          label: "Moderne",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Moderne",
              href: "https://docs.moderne.io/",
            },
          ],
        },
        {
          title: "OpenRewrite Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/openrewrite",
            },
            {
              label: "Slack",
              href: "https://join.slack.com/t/rewriteoss/shared_invite/zt-nj42n3ea-b~62rIHzb3Vo0E1APKCXEA",
            },
            {
              label: "Discord",
              href: "https://discord.gg/xk3ZKrhWAb",
            },
            {
              label: "X",
              href: "https://x.com/OpenRewrite",
            },
          ],
        },
        {
          title: "Moderne",
          items: [
            {
              label: "Moderne.ai",
              href: "https://moderne.ai",
            },
            {
              label: "Marketplace",
              href: "https://app.moderne.io/marketplace",
            },
            {
              label: "X",
              href: "https://twitter.com/ModerneInc",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Moderne, Inc.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.vsDark,
      additionalLanguages: [
        "bash",
        "docker",
        "groovy",
        "java",
        "kotlin",
        "yaml",
      ],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
