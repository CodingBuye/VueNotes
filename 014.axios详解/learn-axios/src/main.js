import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
// 1.axios基本使用
// axios({
//   url: 'http://123.207.32.32:8000/api/v1/home/multidata'
// }).then(res => {
//   console.log(res)
// });
//
// axios({
//   url:"http://123.207.32.32:8000/api/v1/home/data",
//   // 专门针对get请求的参数拼接
//   params: {
//     type: 'sell',
//     page: 3
//   }
// }).then(res => {
//   console.log(res);
// })


// 全局配置
// axios.defaults.baseURL = "http://123.207.32.32:8000/api/v1"
// axios.defaults.timeout = 5000
// 2.axios并发请求
// axios.all([
//   axios.get(
//     // 'http://123.207.32.32:8000/api/v1/home/data',
//     '/home/data',
//     {params: {
//         type: 'sell',
//         page: 1
//       }}
//     ),
//   axios.get(
//     // 'http://123.207.32.32:8000/api/v1/category',
//     '/category',
//   )
// ]).then(axios.spread((res1, res2) => {
//   console.log(res1);
//   console.log(res2);
// }))


// 4.创建axios实例
// 不同url请求的服务器可能不一样，一般开发中不用全局配置
// const instance1 = axios.create({
//   baseURL: 'http://123.207.32.32:8000/api/v1',
//   timeout: 5000
// });
//
// instance1({
//   url: '/home/multidata',
// }).then(res => {
//   console.log(res);
// });
//
// instance1({
//   url: '/home/data',
//   params: {
//     type: 'sell',
//     page: 1
//   }
// }).then(res => {
//   console.log(res);
// });
//
// const instance2 = axios.create({
//   baseURL: 'http://123.207.33.33:8000/api/v1',
//   timeout: 10000,
//   // headers: {}
// })


// 5.封装的request模块
import {request} from "./network/request";
// request({
//   url: '/home/multidata',
// }, res => {
//   console.log(res);
// }, error => {
//   console.log(error);
// });

// request({
//   baseConfig: {
//
//   },
//   success: res => {
//
//   },
//   failure: error => {
//
//   }
// })

request({
  url: '/home/multidata'
}).then(res => {
  console.log(res);
}).catch(error => {
  console.log(error);
})
