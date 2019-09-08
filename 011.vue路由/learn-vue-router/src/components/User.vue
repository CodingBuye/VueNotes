<template>
    <div>
      <h2>我是用户界面</h2>
      <p>我是用户的相关信息</p>
      {{userId}}
    </div>
</template>

<script>
    export default {
        name: "User",
        computed: {
            userId() {
                // this.$route是当前谁是活跃状态，就获取的是哪一个url
                return this.$route.params.user_id
            }
        }
    }
</script>

<style scoped>

</style>
