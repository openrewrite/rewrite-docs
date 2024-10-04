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

  url: 'newdocs.openrewrite.org',
  baseUrl: '/',

  organizationName: 'openrewrite',
  projectName: 'rewrite-docs',
  deploymentBranch: 'docusaurus',
  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

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
            'https://github.com/openrewrite/rewrite-docs/edit/main',
        },
        gtag: {
          trackingID: 'G-Y67JVX3WB7',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  // Handles variable substitution throughout the docs.
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
    // Doesn't work with GitHub pages
    // algolia: {
    //   appId: 'NHGG4Q2UXX',
    //   apiKey: '08f02d57e3f18adf647518db37e5b42d',
    //   indexName: 'rewrite_docs',
    // },
    announcementBar: {
      id: 'doc_release',
      content: 'We are currently migrating where we host our docs. Because of this, search is temporarily unavailable.',
      backgroundColor: '#555555',
      textColor: '#E3F2FD',
    },
    image: 'img/moderne-poster-logo.svg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      // title: 'OpenRewrite™ by Moderne',
      logo: {
        alt: 'Moderne Logo',
        src: 'img/logo.svg',
        srcDark: 'img/darkLogo.svg',
      },
      items: [
        {
          href: 'https://github.com/openrewrite',
          label: 'GitHub',
          position: "right",
        },
        {
          href: 'https://join.slack.com/t/rewriteoss/shared_invite/zt-nj42n3ea-b~62rIHzb3Vo0E1APKCXEA',
          label: 'Join us on Slack',
          position: "right",
        },
        {
          href: 'https://discord.gg/xk3ZKrhWAb',
          label: 'Join us on Discord',
          position: "right",
        },
        {
          href: 'https://stackoverflow.com/questions/tagged/openrewrite',
          label: 'Ask on Stack Overflow',
          position: "right",
        },
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
              label: 'X',
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
