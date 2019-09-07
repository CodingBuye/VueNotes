/**
 * 入口js文件放在最外层
 */

const {add, multiply} = require('./js/mathUtil');
console.log(add(1, 2));
console.log(multiply(1, 2));

require('./css/normal.css');
require('./css/special.less');

// 使用vue进行开发
import Vue from 'vue';

// new Vue({
//     el:"#app",
//     template: `
//         <div>
//             <h2>{{message}}</h2>
//             <button @click="btnClick">按钮</button>
//             <h2>{{name}}</h2>
//         </div>
//     `,
//     data: {
//         message:"hello world",
//         name: 'code'
//     },
//     methods: {
//         btnClick(){
//             alert("hello")
//         }
//     }
// });

// 抽取为一个组件
// const App = {
//     template: `
//         <div>
//             <h2>{{message}}</h2>
//             <button @click="btnClick">按钮</button>
//             <h2>{{name}}</h2>
//         </div>
//     `,
//     data() {
//         return {
//             message: "hello world",
//             name: 'code'
//         }
//     },
//     methods: {
//         btnClick(){
//             alert("hello")
//         }
//     }
// };

// 单独封装上面的代码到vue/app.js
// import App from './vue/app';
import App from './vue/App.vue';
new Vue({
    el:"#app",
    template:'<App/>',
    components: {
        App
    }
});