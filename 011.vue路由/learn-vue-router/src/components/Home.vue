<template>
    <div>
      <h2>我是首页</h2>
      <p>我是首页内容</p>
      <router-link to="/home/news">新闻</router-link>
      <router-link to="/home/message">消息</router-link>
      <router-view/>

      <h3>{{message}}</h3>
    </div>
</template>

<script>
    export default {
      name: "Home",
      data() {
        return {
          message: "你好!",
          path: '/home/news'
        }
      },
      created() {
        // 组件被创建之后
        console.log('created');
        document.title = "首页"
      },
      mounted() {
        // 组件被挂载到DOM上之后
        console.log('mounted');
      },
      updated() {
        // 页面发生改变时
        console.log('updated');
      },
      // 以下两个函数只有该组件被保持了状态使用了keep-alive时才是有效的
      activated() {
        this.$router.push(this.path)
      },
      deactivated() {},
      // 记录跳转的状态
      beforeRouteLeave(to, from, next) {
        this.path = this.$route.path
        next()
      }
    }
</script>

<style scoped>
  .active{
    color: red;
  }
</style>
