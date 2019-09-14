<template>
  <div id="app">
    <h1>我是APP组件</h1>
    <!--
      router-link默认渲染成a标签，可以通过tag属性渲染成其他标签
      默认是pushState,浏览器的后退键可以使用，添加replace之后是使用replaceState,不允许回退，只能通过点击切换
      默认是router-link-active，可以通过active-class修改名称,当组件很多的时候
      每个都这样设置会非常麻烦，可以直接在路由组件里设置linkActiveClass: 'active'
    -->
<!--    <router-link to="/home" tag="button" replace active-class="active">首页</router-link>-->
<!--    <router-link to="/about" tag="button" replace active-class="active">关于</router-link>-->
<!--    <router-link to="/home" tag="button" replace>首页</router-link>-->
<!--    <router-link to="/about" tag="button" replace>关于</router-link>-->

<!--    通过代码方式修改路由：-->
<!--    <button @click="homeClick">首页</button>-->
<!--    <button @click="aboutClick">关于</button>-->

<!--    <router-link to="/home">首页</router-link>-->
<!--    <router-link to="/about">关于</router-link>-->
<!--    <router-link v-bind:to="'/user/'+user_id">用户</router-link>-->
<!--    <router-link :to="{path: '/profile', query: {name: 'wwy', age: 23, height: '160cm'}}">我的档案</router-link>-->

    <button @click="homeClick">首页</button>
    <button @click="aboutClick">关于</button>
    <button @click="userClick">用户</button>
    <button @click="profileClick">档案</button>

    <!--组件不会被频繁的创建和销毁
      profile,User组件不受kee-alive作用
      所有路径匹配到的视图组件都会被缓存
    -->
    <keep-alive exclude="Profile,User">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
      return {
          user_id: "wwy"
      }
  },
  methods: {
    homeClick() {
      // this.$router.push('/home')
      this.$router.replace('/home') // 不允许回退
    },
    aboutClick() {
      this.$router.push('/about')
    },
    userClick() {
      this.$router.push('/user/'+this.user_id)
    },
    profileClick() {
      this.$router.push({
        path: '/profile',
        query: {
          name: 'wwy',
          age: 23,
          height: '160cm'
        }
      })
    }
  }
}
</script>

<style>
  /*.router-link-active {*/
  /*  color:red;*/
  /*}*/
  .active{
    color:#42b983;
  }
</style>
