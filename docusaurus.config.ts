import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { themes as prismThemes } from "prism-react-renderer";
import remarkTokenReplacer from "./src/plugins/replace-tokens";
import latestVersions from "./src/plugins/latest-versions";

const description = "Large-scale automated source code refactoring"

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'OpenRewrite',
  operatingSystem: 'Windows, macOS, Linux',
  applicationCategory: 'ProductivityApplication',
  description,
  author: {
    '@type': 'Organization',
    name: 'Moderne',
  },
  datePublished: new Date(),
  softwareVersion: latestVersions["{{VERSION_ORG_OPENREWRITE_REWRITE_CORE}}"],
  downloadUrl: 'https://github.com/openrewrite/rewrite/releases',
  video: {
    '@type': 'VideoObject',
      name: "Migrate to Java 21 using OpenRewrite",
      description: "This recipe will apply changes commonly needed when migrating to Java 21. This recipe will also replace deprecated API with equivalents when there is a clear migration strategy. Build files will also be updated to use Java 21 as the target/source and plugins will be also be upgraded to versions that are compatible with Java 21.",
      thumbnailUrl: "https://i.ytimg.com/vi/uViRlX-RahA/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCBmYPSz3dMNEQR7pseLWsVszXd2A",
      uploadDate: new Date("Feb 13, 2024 "),
      contentUrl: "https://www.youtube.com/watch?v=uViRlX-RahA",
      embedUrl: "https://www.youtube.com/embed/uViRlX-RahA?si=v1T7sLsQJ4YQdWPo",
  },
};

const config: Config = {
  title: "OpenRewrite Docs",
  headTags: [
    {
      tagName: 'script',
      attributes: {
        type: 'application/ld+json',
      },
      innerHTML: JSON.stringify(structuredData),
    },
    // <link rel="preconnect" href="https://fonts.googleapis.com">
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
    },
    // <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: 'anonymous',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap',
      },
    },

  ],
  tagline: description,
  favicon: "img/favicon.ico",

  url: "https://docs.openrewrite.org",
  baseUrl: "/",

  organizationName: "openrewrite",
  projectName: "rewrite-docs",
  deploymentBranch: "docusaurus",
  trailingSlash: false,

  onBrokenLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

    scripts: [
    {
      src: 'reo.js',
    }
  ],

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
                replacements: latestVersions,
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

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
      onBrokenMarkdownImages: 'warn',
    }
  },

  plugins: [
    [
      'docusaurus-plugin-llms',
      {
        generateLLMsTxt: true,
        generateLLMsFullTxt: false,
        generateMarkdownFiles: true,
        docsDir: 'docs',
        title: 'OpenRewrite Documentation',
        description: 'Large-scale automated source code refactoring',
        excludeImports: true,
        removeDuplicateHeadings: true,
        customLLMFiles: [
          {
            filename: 'llms-getting-started.txt',
            includePatterns: ['introduction.md', '**/running-recipes/**/*'],
            fullContent: false,
            title: 'OpenRewrite Getting Started',
            description: 'Introduction and guides for running OpenRewrite recipes',
          },
          {
            filename: 'llms-authoring.txt',
            includePatterns: ['**/authoring-recipes/**/*'],
            fullContent: false,
            title: 'OpenRewrite Recipe Development',
            description: 'Guides for creating and testing OpenRewrite recipes',
          },
          {
            filename: 'llms-reference.txt',
            includePatterns: ['**/reference/**/*', '**/concepts-and-explanations/**/*'],
            fullContent: false,
            title: 'OpenRewrite Reference & Concepts',
            description: 'Technical reference documentation and core concepts',
          },
        ],
      },
    ],
  ],

  future: {
    experimental_faster: true,
    v4: true,
  },

  themeConfig: {
    algolia: {
      appId: "8XDBE5G3ZV",
      apiKey: "14363fc8de10ed3d1785fe6d17a92631",
      indexName: "openrewrite",
    },
    announcementBar: {
      id: "openrewrite_training",
      content:
        'Want to learn about OpenRewrite directly from the team? Sign up for a <a href="https://www.moderne.ai/moderne-openrewrite-training-hub">free training session</a>.',
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
      copyright: `© Moderne, ${new Date().getFullYear()}`,
    },
    prism: {
      theme: prismThemes.vsDark,
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
