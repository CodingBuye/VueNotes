import Vue from 'vue'
import Vuex from 'vuex'

import {
  INCREMENT
} from './mutation-types'

// 1.安装插件：底层会执行install方法
Vue.use(Vuex)

// 2.创建对象
const moduleA = {
  state:{
    school: "北京邮电大学"
  },
  mutations: {
    updateName(state, payload) {
      state.school = payload
    }
  },
  getters: {
    fullName(state) {
      return state.school + "西土城10号"
    },
    fullName2(state, getters) {
      return getters.fullName + '学三公寓'
    },
    fullName3(state, getters, rootState) {
      return getters.fullName + rootState.counter
    }
  },
  actions: {
    asyncUpdateName(context) {
      setTimeout(() => {
        context.commit('updateName', '清华大学')
      }, 3000)
    }
  }
};

const store = new Vuex.Store({
  state: {
    counter: 1000,
    students: [
      {id: 1, name: "wwy", age: 23},
      {id: 2, name: 'cbh', age: 22},
      {id: 3, name: 'cdc', age: 19},
      {id: 4, name: 'cwe', age: 18}
    ],
    info: {
      name: 'kobe',
      age: 40,
      height: 1.98
    }
  },
  mutations: {
    //同步方法
    [INCREMENT](state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    incrementCount(state, num) {
      state.counter += num
    },
    incrementCount1(state, payload) {
      state.counter += payload.num
    },
    addStudent(state, stu) {
      state.students.push(stu)
    },
    updateInfo(state) {
      state.info.name = "kobe bryant"

      // 错误代码,不能在mutation中执行异步操作
      // setTimeout(() =>{
      //   state.info.name = "kobe bryant"
      // });

      // 非响应式
      // state.info['address'] = "洛杉矶"
      // 响应式
      // Vue.set(state.info, 'phone', '19801207245')

      // delete state.info.age
      // Vue.delete(state.info, 'age')
    }
  },
  actions: {
    // 异步方法
    update2(context, payload) {
      // setTimeout(() => {
      //   context.commit('updateInfo')
      //   console.log(payload.message)
      //   payload.success()
      // }, 5000)

      return new Promise((resolve, reject) => {
        setTimeout(()=>{
          context.commit('updateInfo')
          console.log(payload)
          resolve('hhh')
        }, 2000)
      })
    }

  },
  getters: {
    // 有点类似计算属性,数据需要经过一些变化才显示出来的时候
    powerCounter(state) {
      return state.counter * state.counter;
    },
    more20stu(state) {
      return state.students.filter(s => s.age > 21)
    },
    more20stuLen1(state) {
      return state.students.filter(s => s.age > 21).length
    },
    more20stuLen2(state, getters) {
      return getters.more20stu.length;
    },
    moreAgeStu(state) {
      // return function (age) {
      //   return state.students.filter(s => s.age>age)
      // }
      return age => state.students.filter(s => s.age>age)
    }
  },
  modules: {
    // 模块抽离，避免一个store的臃肿
    a: moduleA
  }
});

// 3.导出store对象
export default store

// 4.注册到main.js中
// 单独建一个文件是为了避免main.js代码的臃肿
