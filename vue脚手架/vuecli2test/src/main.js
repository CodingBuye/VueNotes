import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false;

// 定义一个组件
// const Test = {
//   template: `<div>{{message}}</div>`,
//   data() {
//     return {
//       message: "自定义组件"
//     }
//   }
// };

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // render: h => h(App)
  render: function (creatElement) {
    // 1. 普通用法：自己创建标签，用来替换<div id="app"></div>
    // return creatElement(
    //   'h2',
    //   {class: 'box'},
    //   ['Hello world', creatElement('button', ['按钮'])]);

    // 2. 传入一个组件对象
    // return creatElement(Test);
    return creatElement(App);
  }
});
