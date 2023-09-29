// ./nuxt.config.ts

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss'],
  content: {
    // https://content.nuxtjs.org/api/configuration
    documentDriven: true,
    highlight: {
      theme:  'github-light',
    },
    markdown: {
      remarkPlugins: [
        'remark-math',
      ],
      rehypePlugins: [
        'rehype-mathjax',
      ],
      toc: {
        depth: 1,
        searchDepth: 1
      },
      anchorLinks: false,
    }
  },
  tailwindcss: {
    cssPath: '~/assets/css/main.css',
  },
})
