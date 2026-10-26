const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

/** @type {import('@docusaurus/types').DocusaurusConfig} */
const config = {
  title: 'База знаний педагога-психолога',
  tagline:
    'Справочник педагога-психолога: нормативная база РФ и Республики Татарстан, документы, шаблоны, инструкции',

  favicon: 'img/favicon.svg',

  // GitHub Pages (project site): https://<org>.github.io/<repo>/
  url: 'https://qbic1.github.io',
  baseUrl: '/psycho-onboarding/',
  organizationName: 'Qbic1',
  projectName: 'psycho-onboarding',

  onBrokenLinks: 'throw',
  trailingSlash: false,

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/Qbic1/psycho-onboarding/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themes: [
    [
      '@easyops-cn/docusaurus-search-local',
      /** @type {import('@easyops-cn/docusaurus-search-local').PluginOptions} */
      ({
        language: ['en', 'ru'],
        hashed: true,
        indexDocs: true,
        indexBlog: false,
        indexPages: true,
        searchResultContextMaxLength: 120,
        highlightSearchTermsOnTargetPage: true,
        searchBarShortcutHint: true,
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'База знаний педагога-психолога',
        logo: {
          alt: 'Логотип',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Справочник',
          },
          {
            href: 'https://github.com/Qbic1/psycho-onboarding',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Разделы',
            items: [
              { label: 'О справочнике', to: '/docs/intro' },
              { label: 'Нормативная база', to: '/docs/normative/federal' },
              { label: 'Шаблоны документов', to: '/docs/templates/soglasiya' },
            ],
          },
          {
            title: 'Полезные ресурсы',
            items: [
              { label: 'Минпросвещения России: банк документов', href: 'https://docs.edu.gov.ru/' },
              { label: 'Минобрнауки РТ', href: 'https://mon.tatarstan.ru/' },
              { label: 'Портал «Электронное образование РТ»', href: 'https://edu.tatar.ru/' },
            ],
          },
          {
            title: 'Телефоны помощи',
            items: [
              { label: 'Детский телефон доверия: 8-800-2000-122', href: 'tel:88002000122' },
              { label: 'Единый номер экстренных служб: 112', href: 'tel:112' },
            ],
          },
        ],
        copyright: `Справочник носит информационный характер и не заменяет официальные тексты нормативных правовых актов. Проверяйте актуальность документов в официальных источниках. Актуальность сведений: октябрь 2026 г.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
