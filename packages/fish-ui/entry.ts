import { App } from "vue";
import MyButton from "./src/button";
import SFCButton from "./src/button/SFCButton.vue";
import JSXButton from "./src/button/JSXButton";

import 'uno.css'


// 导出单独组件
export { MyButton, SFCButton, JSXButton };

// 编写一个插件，实现一个install方法

export default {
  install(app: App): void {
    app.component(MyButton.name, MyButton);
    app.component(SFCButton.name, SFCButton);
    app.component(JSXButton.name, JSXButton);
  },
};
