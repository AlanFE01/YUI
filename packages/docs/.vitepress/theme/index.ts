import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import 'vitepress-theme-demoblock/dist/theme/styles/index.css'
import Demo from 'vitepress-theme-demoblock/dist/client/components/Demo.vue'
import DemoBlock from 'vitepress-theme-demoblock/dist/client/components/DemoBlock.vue'
import FishUI from '@pkg/fish-ui'

export default {
  extends: DefaultTheme,
  async enhanceApp({ app }) {
    app.use(FishUI)
    app.component('Demo', Demo)
    app.component('DemoBlock', DemoBlock)
  }
} satisfies Theme