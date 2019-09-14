<template>
  <div id="app">
    <h2>{{message}}</h2>
    <p>{{$store.state.counter}}</p>
    <button @click="addOne">+</button>
    <button @click="subOne">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount1(10)">+10</button>

    <button @click="addStudent">添加学生</button>

    <p>{{$store.getters.powerCounter}}</p>
    <p>{{more20stu}}</p>
    <!-- 年龄大于21岁的学生   -->
    <p>{{$store.getters.more20stu}}</p>
    <!-- 年龄大于21岁的学生的个数 -->
    <p>{{$store.getters.more20stu.length}}</p>
    <p>{{$store.getters.more20stuLen1}}</p>
    <p>{{$store.getters.more20stuLen2}}</p>
    <!-- 年龄大于某个参数的学生 -->
    <p>{{$store.getters.moreAgeStu(18)}}</p>

    <h2>个人信息</h2>
    <p>{{$store.state.info}}</p>
    <button @click="updateInfo">同步修改信息</button>
    <button @click="updateInfo2">异步修改信息</button>

    <h2>模块信息</h2>
    {{$store.state.a.school}}
    <button @click="updateName('湖北工业大学')">修改名称</button>
    <p>{{$store.getters.fullName}}</p>
    <p>{{$store.getters.fullName2}}</p>
    <p>{{$store.getters.fullName3}}</p>
    <button @click="asyncUpdateName('cd')">异步更新</button>
  </div>
</template>

<script>
  import {INCREMENT} from './store/mutation-types'

export default {
  name: 'App',
  data() {
    return {
      message: "我是App组件",
      // count:0
    }
  },
  methods: {
    addOne() {
      this.$store.commit(INCREMENT)
    },
    subOne() {
      this.$store.commit('decrement')
    },
    // 1.普通的提交封装
    addCount(num) {
      // 这个携带的参数有一个额外的名字：payload(负载),可以是单个值，也可以是一个对象
      this.$store.commit('incrementCount', num)
    },
    // 2. 特殊的提交封装
    addCount1(num) {
      this.$store.commit({
        type: 'incrementCount1',
        // num: num
        // 等价于
        num
      })
    },
    addStudent() {
      const stu = {id: 5, name: 'kk', age: 21}
      this.$store.commit('addStudent', stu)
    },
    updateInfo() {
      this.$store.commit('updateInfo') // mutation
    },
    updateInfo2() {
      // this.$store.dispatch('update2', {
      //   message: '对象方式传参',
      //   success: ()=>{
      //     console.log("异步操作执行成功")
      //   }
      // }) // action

      this.$store.dispatch('update2', '我是携带的信息')
        .then(res => {
          console.log("里面完成了封装");
          console.log(res)
      })
    },
    updateName(name) {
      this.$store.commit('updateName', name)
    },
    asyncUpdateName(name) {
      this.$store.dispatch('asyncUpdateName', name)
    }
  },
  computed: {
    more20stu() {
      return this.$store.state.students.filter(s => s.age>21);
    }
  }
}
</script>

<style>

</style>
