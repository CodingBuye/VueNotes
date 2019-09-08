<template>
  <div>
    <h2>我是Profile组件</h2>
    <p>我是Profile组件的内容</p>
    {{$route.query.name}}
    {{$route.query.age}}
    {{$route.query.height}}
    {{$route.query}}
  </div>
</template>

<script>
  export default {
    name: "Profile",
    created() {
      console.log('profile created');
    },
    destroyed() {
      console.log('profile destroyed');
    }
  }
</script>

<style scoped>

</style>
