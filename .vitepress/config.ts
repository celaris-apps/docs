import { defineConfig } from 'vitepress'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'
import { enhanceAppWithTabs } from 'vitepress-plugin-tabs/client'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  markdown: {
    config(md) {
      md.use(tabsMarkdownPlugin)
    },
  },
  head: [
    ['meta', { property: 'og:title', href: 'Celaris' }],
    ['meta', { property: 'og:description', href: 'Documentation for the Celaris Framework' }],
    ['meta', { property: 'og:image', href: 'https://celaris.cc/apple-touch-icon.png' }],
    ['meta', { property: 'og:url', href: 'https://celaris.cc/' }],
  ],
  title: 'Celaris',
  description: 'Documentation for the Celaris Framework',
  themeConfig: {
    logo: '/images/celaris.svg',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guides', link: 'guides/getting-started/prerequisites' },
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Prerequisites', link: 'guides/getting-started/prerequisites' },
          { text: 'Quick Start', link: 'guides/getting-started/quick-start' },
          // { text: 'Installation', link: 'getting-started/installation' },
          // { text: 'Configuration', link: 'getting-started/configuration' },
          // { text: 'Usage', link: 'getting-started/usage' },
          // { text: 'Markdown Examples', link: 'examples/markdown-examples' },
          // { text: 'Runtime API Examples', link: 'examples/api-examples' },
        ],
      },
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/celaris-apps' }],
  },
})
