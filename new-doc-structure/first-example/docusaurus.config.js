// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Documentation',
  tagline: 'Dinosaurs are cool',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    ['drawio', {}],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'TASKANA',
        hideOnScroll: true,
        logo: {
          alt: 'My Site Logo',
          src: 'img/empty-logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'user-guide/intro',
            position: 'left',
            label: 'User Guide',
          },
          {
            type: 'doc',
            docId: 'contact-us/intro',
            position: 'left',
            label: 'Contact Us',
          },
          {
            href: 'https://github.com/Taskana/taskana',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://taskana.azurewebsites.net/taskana/docs/rest/rest-api.html',
            label: 'REST API Doc',
            position: 'right',
          },
          {
            href: 'https://taskana.azurewebsites.net/taskana',
            label: 'Demo App',
            position: 'right',
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: "Social",
            items: [
              {
                label: 'Contact Us',
                to: '/docs/contact-us/intro',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/Taskana/taskana',
              }
            ]

          },
          {
            title: "Docs:",
            items: [

              {
                label: 'User Guide',
                to: '/docs/user-guide/intro',
              },
              {
                label: 'Java API Documentation',
                to: 'https://taskana.azurewebsites.net/taskana/docs/java/taskana-core/index.html',
              },
              {
                label: 'REST API Documentation',
                href: 'https://taskana.azurewebsites.net/taskana/docs/rest/rest-api.html',
              }
            ]
          },
          {
            title: "Demo App",
            items: [

              {
                label: 'Demo App',
                to: 'https://taskana.azurewebsites.net/taskana',
              }
            ]
          }

        ],
        copyright: `Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
