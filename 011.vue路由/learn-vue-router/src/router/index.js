// 配置路由相关的信息
import Vue from 'vue'
import VueRouter from 'vue-router'

// import Home from '../components/Home'
// import About from "../components/About"
// import User from "../components/User"

// 懒加载:一个组件会打包成一个单独的js文件，在需要用到的时候才会调用，效率更高
const Home = () => import('../components/Home')
const HomeNews = () => import('../components/HomeNews')
const HomeMessage = () => import('../components/HomeMessage')

const About = () => import('../components/About')
const User = () => import('../components/User')
const Profile = () => import('../components/Profile')



// 1. 通过vue.use(插件)，安装插件
Vue.use(VueRouter)

// 2. 创建路由对象
const routes = [
  {
    path:'',
    // component: Home
    redirect: '/home'
  },
  {
    path:"/home",
    component: Home,
    meta: {
      title: "首页"
    },
    children: [
      {
        path:'',
        redirect: 'news',
      },
      {
        path: 'news',
        component: HomeNews,
      },
      {
        path: 'message',
        component: HomeMessage,
      }
    ]
  },
  {
    path: "/about",
    component: About,
    meta: {
      title: '关于'
    },
    // 局部守卫
    beforeEnter:(to, from, next) =>{
      console.log(from)
      console.log(to)
      console.log('----')
      next()
    }
  },
  {
    path: '/user/:user_id',
    component: User,
    meta: {
      title: "用户"
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      title: "我的"
    }
  }
]

const router = new VueRouter({
  // 配置路由和组件之间的关系
  routes: routes,
  // 配置路由模式，默认hash模式
  mode: 'history',
  // 激活样式名称
  linkActiveClass: 'active'
})

// 使用导航守卫 全局守卫
// 路由跳转时改变title的动态显示
// 前置钩子(回调)
router.beforeEach((to, from, next)=>{
  // 从from跳转到to
  // 嵌套组件中没有meta
  document.title = to.matched[0].meta.title
  // 嵌套组件中有meta
  // document.title = to.meta.title
  next()  // 必须要有这一句
})

// 后置钩子(hook) 全局守卫
// 不需要主动调用next函数
router.afterEach((to, from)=>{

})

// 3. 将router对象传入到vue实例
export default router
