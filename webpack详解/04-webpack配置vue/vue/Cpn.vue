<template>
    <div>
        <h2>{{title}}</h2>
        <p>{{content}}</p>
    </div>
</template>

<script>
    export default {
        name: "Cpn",
        data() {
            return {
                title: "我是cpn组件的标题",
                content: "我是cpn组件的内容"
            }
        }
    }
</script>

<style scoped>

</style>