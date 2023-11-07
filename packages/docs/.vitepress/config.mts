import { defineConfig } from 'vitepress'
import vueJsx from '@vitejs/plugin-vue-jsx'

import UnoCSS from 'unocss/vite'
import { demoblockPlugin, demoblockVitePlugin } from 'vitepress-theme-demoblock'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "组组件库文档",
  description: "docs",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
          { text: 'Button', link: '/button' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },

  markdown: {
    config: (md) => {
      md.use(demoblockPlugin)
    }
  },

  vite: {
    plugins: [vueJsx(), UnoCSS(), demoblockVitePlugin()]
  }
})
