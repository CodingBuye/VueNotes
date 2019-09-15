import axios from 'axios';

// export function request(config, success, failure) {
//   // 1.创建axios的实例
//   const instance = axios.create({
//     baseURL: 'http://123.207.32.32:8000/api/v1',
//     timeout: 5000
//   });
//
//   // 发送真正的网络请求
//   instance(config).then(res => {
//     success(res);
//   }).catch(res => {
//     failure(res)
//   })
// }


// export function request(config) {
//   const instace = axios.create({
//     baseURL: 'http://123.207.32.32:8000/api/v1',
//     timeout: 5000
//   });
//
//   instace(config.baseConfig).then(res => {
//     config.success(res);
//   }).catch(error => {
//     config.failure(res)
//   })
// }

// export function request(config) {
//   return new Promise((resolve, reject) => {
//     const instance = axios.create({
//       baseURL: 'http://123.207.32.32:8000/api/v1',
//       timeout: 5000
//     });
//
//     instance(config).then(
//       res => resolve(res)
//     ).catch(
//       error => reject(error)
//     )
//   })
// }
// 还可以写成
export function request(config) {
  // 1.创建axios的实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000/api/v1',
    timeout: 5000
  });

  // 2.axios的拦截器
  // 2.1 请求拦截
  instance.interceptors.request.use(config => {
    console.log(config);
    // 应用场景：
    // 1.比如config中的一些信息不符合服务器的要求
    // 2.比如每次返送网络请求时，都希望在界面中显示一个请求的图标
    // 3.某些网络请求比如登录(token)，必须携带一些特殊的信息

    return config; // 不返回的话请求被拦截，无法返回数据
  }, err => {
    console.log(err);
  });

  // 2.2响应拦截
  instance.interceptors.response.use(res=>{
    console.log(res);
    return res.data; // 需要返回，不然结果被拦截了
  }, error => {
    console.log(error);
  });

  return instance(config);
}
