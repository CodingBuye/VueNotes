<!--app.js中代码没有分离-->
<template>
    <div>
<!--        <h2 class="title">{{message}}</h2>-->
        <button @click="btnClick">按钮</button>
        <h2>{{names}}</h2>
        <Cpn/>
    </div>
</template>
<script>
    import Cpn from './Cpn';
    export default {
        name: "App",
        components: {Cpn},
        comments:{
            Cpn
        },
        data() {
            return {
                message: "hello world",
                names: 'code'
            }
        },
        methods: {
            btnClick(){
                alert("hello")
            }
        }
    }
</script>
<style scoped>
.title{
    color:black;
}
</style>