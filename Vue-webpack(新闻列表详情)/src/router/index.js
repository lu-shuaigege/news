import Vue from 'vue'
import Router from 'vue-router'
import Home from "../views/home";
import Detail from "../views/detail";

// 安装路由插件
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home,
    },
    {
      path: '/detail/:id',
      component: Detail,
    }
  ]
})
