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

    sidebar: {
      '/guides/': [
        {
          text: 'Introduction',
          items: [
            { text: 'What is Celaris?', link: '/guides/introduction/what-is-celaris' },
            { text: 'Why Celaris?', link: '/guides/introduction/why-celaris' },
            { text: 'How Celaris Works', link: '/guides/introduction/how-celaris-works' },
            { text: 'Who is Celaris For?', link: '/guides/introduction/who-is-celaris-for' },
            { text: 'Roadmap', link: '/guides/introduction/roadmap' },
          ],
        },
        {
          text: 'Getting Started',
          items: [
            { text: 'Prerequisites', link: '/guides/getting-started/prerequisites' },
            { text: 'Quick Start', link: '/guides/getting-started/quick-start' },
            { text: 'Project Structure', link: '/guides/getting-started/project-structure' },
          ],
        },
        {
          text: 'Development',
          items: [{ text: 'Development Cycle', link: '/guides/development/development-cycle' }],
        },
        {
          text: 'Features',
          items: [
            { text: 'Default Template', link: '/guides/features/default-template' },
            { text: 'Binding', link: '/guides/features/binding' },
            { text: 'Task Scheduling', link: '/guides/features/task-scheduling' },
          ],
        },
        {
          text: 'Contributing',
          items: [{ text: 'Contributing to Celaris', link: '/guides/contributing/contributing-to-celaris' }],
        },
      ],
      '/roadmap/': [
        {
          text: 'Roadmap',
          items: [
            { text: 'Version 1.0', link: 'roadmap/version-1.0' },
            { text: 'Version 2.0', link: 'roadmap/version-2.0' },
          ],
        },
      ],
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/celaris-apps' }],
  },
})
