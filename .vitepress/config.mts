import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "MT4007 HT23",
  description: "Course page for MT4007 given at Stockholm University",
  markdown: {
    math: true,
  },
  themeConfig: {
    editLink: {
      pattern:"https://github.com/mt4007-ht23/mt4007-ht23.github.io/issues/new?title=:path",
      text:"Suggest a change or notify an issue on this page"
    },
    search:{
      provider: 'local'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Lectures', link: '/lectures/' },
      { text: 'Homework', link: '/homework/' },
      { text: 'Project', link: '/project' },
      { text: 'Exam', link: '/exam/' },
    ],
    sidebar: {
      '/lectures/': [
        {
          text: "Lectures",
          items: [
            { text: 'Lecture 1', link: '/lectures/1' },
            { text: 'Lecture 2', link: '/lectures/2' },
            { text: 'Lecture 3', link: '/lectures/3' },
            { text: 'Lecture 4', link: '/lectures/4' },
            { text: 'Lecture 5', link: '/lectures/5' },
            { text: 'Lecture 6', link: '/lectures/6' },
            { text: 'Lecture 7', link: '/lectures/7' },
            { text: 'Lecture 8', link: '/lectures/8' },
            { text: 'Lecture 9', link: '/lectures/9' },
            { text: 'Lecture 10', link: '/lectures/10' },
            { text: 'Lecture 11', link: '/lectures/11' },
          ]
        }
      ],
      '/homework/': [
        {
          text: "Homework",
          items: [
            { text: 'Homework 1', link: '/homework/1' },
            { text: 'Homework 2', link: '/homework/2' },
            { text: 'Homework 3', link: '/homework/3' },
            { text: 'Homework 4', link: '/homework/4' },
            { text: 'Homework 5', link: '/homework/5' },
            { text: 'Homework 6', link: '/homework/6' },
          ]
        }
      ],
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/mt4007-ht23' }
    ]
  }
})
