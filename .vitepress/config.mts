import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "MT4007 HT23",
  description: "Course page for MT4007 given at Stockholm University",
  themeConfig: {
    search:{
      provider: 'local'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Lectures', link: '/lectures/' },
      { text: 'Homework', link: '/homework/' },
      { text: 'Project', link: '/project' },
      { text: 'Exam', link: '/exam' },
    ],
    sidebar: {
      '/lectures/': [
        {
          text: "Lectures",
          items: [
            { text: 'Lecture 1', link: '/lectures/1' },
            { text: 'Lecture 2', link: '/lectures/2' },
          ]
        }
      ],
      '/homework/': [
        {
          text: "Homework",
          items: [
            { text: 'Homework 1', link: '/homework/1' },
            { text: 'Homework 2', link: '/homework/2' },
          ]
        }
      ],
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
