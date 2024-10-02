import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const globalVariables = {
  "VERSION_REWRITE_RECIPE_BOM": "2.20.0",
  "VERSION_REWRITE_GRADLE_PLUGIN": "6.24.0",
  "VERSION_REWRITE_JAVA_DEPENDENCIES": "1.19.0",
  "VERSION_REWRITE_LOGGING_FRAMEWORKS": "2.14.0",
  "VERSION_REWRITE_MAVEN_PLUGIN": "5.41.0",
  "VERSION_REWRITE_MIGRATE_JAVA": "2.25.1",
  "VERSION_REWRITE_TEMPLATING": "1.16.0",
  "VERSION_REWRITE_TESTING_FRAMEWORKS": "2.18.0",
  "VERSION_REWRITE_SPRING": "5.19.0",
  "VERSION_REWRITE_STATIC_ANALYSIS": "1.16.0",
}

const config: Config = {
  title: 'OpenRewrite Docs',
  tagline: 'Large-scale automated source code refactoring',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://openrewrite.github.io/rewrite-docs',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'openrewrite', // Usually your GitHub org/user name.
  projectName: 'rewrite-docs', // Usually your repo name.
  deploymentBranch: 'docusaurus',
  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarCollapsible: true,
          sidebarPath: './sidebars.ts',
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/mike-solomon/test-docusaurus/edit/main',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  markdown: {
    preprocessor: ({filePath, fileContent}) => {
      let content = fileContent;
      for (const variable in globalVariables) {
        content = content.replaceAll('{{'+variable+'}}', globalVariables[variable]);
      }

      return content
    },
  },

  themeConfig: {
    // Replace with your project's social card
    image: 'img/moderne-poster-logo.svg',
    navbar: {
      title: 'OpenRewrite',
      logo: {
        alt: 'Moderne Logo',
        src: 'img/logo.png',
      },
      items: [
        // {
        //   type: 'docSidebar',
        //   sidebarId: 'tutorialSidebar',
        //   position: 'left',
        //   label: 'Tutorial',
        // },
        // {
        //   href: 'https://github.com/facebook/docusaurus',
        //   label: 'GitHub',
        //   position: 'right',
        // },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Moderne',
              href: 'https://docs.moderne.io/',
            },
          ],
        },
        {
          title: 'OpenRewrite Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/openrewrite',
            },
            {
              label: 'Slack',
              href: 'https://join.slack.com/t/rewriteoss/shared_invite/zt-nj42n3ea-b~62rIHzb3Vo0E1APKCXEA',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/xk3ZKrhWAb',
            },
            {
              label: 'X',
              href: 'https://x.com/OpenRewrite',
            },
          ],
        },
        {
          title: 'Moderne',
          items: [
            {
              label: 'Moderne.io',
              href: 'https://moderne.io',
            },
            {
              label: 'Marketplace',
              href: 'https://app.moderne.io/marketplace',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/ModerneInc',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Moderne, Inc.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: [
        'bash',
        'docker',
        'groovy',
        'java', 
        'kotlin', 
        'yaml', 
      ],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
