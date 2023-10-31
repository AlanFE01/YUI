import { defineConfig, UserConfig, presetUno, presetAttributify } from 'unocss'
import presetIcons from '@unocss/preset-icons'

const colors = [
  "white",
  "black",
  "gray",
  "red",
  "yellow",
  "green",
  "blue",
  "indigo",
  "purple",
  "pink",
];

// 配置动态图标类名
const icons = ['sun', 'asleep', 'camera', 'container-services']

const safelist = [
  ...colors.map((v) => `bg-${v}-500`),
  ...colors.map((v) => `hover:bg-${v}-700`),
  ...icons.map((v) => `i-carbon-${v}`),
];


const config: UserConfig = defineConfig({
  safelist,
  presets: [
    presetUno(),
    presetAttributify(),
    // 如果提供了预设，默认预设会被忽略，所以需要加上presetUno(), presetAttributify()来使用默认预设
    presetIcons({
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle'
        // ...
      }
    })
  ]
})
export default config