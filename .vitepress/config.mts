import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "zh-CN",
  srcDir: "./src",
  base: "/docs/",
  lastUpdated: true,
  title: "Hello, World!",
  description: "A VitePress Site",
  themeConfig: {
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'long',
        timeStyle: 'short'
      }
    },
    externalLinkIcon: true,
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2026 <a href="https://github.com/ychda">@ychda</a>'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '常用链接', link: '/links' }
    ],

    sidebar: [
      {
        text: '编程入门',
        items: [
          {
            text: '常用概念', items: [
              { text: '基础', link: '/basic/introduction' },
              { text: 'HTML & CSS', link: '/basic/html-css' },
              { text: 'JavaScript', link: '/basic/javascript' },
              { text: 'Python', link: '/basic/python' }
            ]
          },
          {
            text: '学校生活', items: [
              { text: 'hello', link: '/yhz/hello' },
              { text: 'a', link: '/yhz/a' },
              { text: 'b', link: '/yhz/b' },
              { text: 'c', link: '/yhz/c' },
              { text: 'd', link: '/yhz/d' }
            ]
          },
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ychda' }
    ]
  }
})
