import { defineComponent, h } from "vue";

export default defineComponent({
  name: "MyButton",
  // template:'<button>MyButton 模版</button>'
  render() {
    return h('button', null, '普通按钮')
  },
});