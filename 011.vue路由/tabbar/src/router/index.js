import Vue from 'vue'
import Router from 'vue-router'

// 懒加载
const Home = () => import("../views/home/Home.vue");
const Category = () => import("../views/category/Category.vue");
const Cart = () => import("../views/cart/Cart.vue");
const Profile = () => import("../views/profile/Profile.vue");

// 1. 安装插件
Vue.use(Router)

// 2. 创建路由对象
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    meta: {
      title: '首页'
    }
  },
  {
    path: '/category',
    component: Category,
    meta: {
      title: "分类"
    }
  },
  {
    path: '/cart',
    component: Cart,
    meta: {
      title: "购物车"
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      title: '我的'
    }
  }
]

// 3. 导出
export default new Router({
  routes: routes,
  mode: 'history'
})
