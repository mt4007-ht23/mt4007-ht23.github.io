import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "MT4007 HT23",
  description: "Course page for MT4007 given at Stockholm University",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      { text: 'Lectures', link: '/lectures/' },
    ],

    sidebar: {
      '/lectures/': [
        {
          text: "Lectures",
          items: [
            { text: 'Lecture 1', link: '/lectures/1' },
            { text: 'Lecture 2', link: '/lectures/2' },
            { text: 'Lecture 3', link: '/lectures/3' },
          ]
        }
      ],
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
