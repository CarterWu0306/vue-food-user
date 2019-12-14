import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/login/Login'
import Register from '../views/login/Register'
import Home from '../views/home/Home'
import Goods from '../views/goods/Goods'
import Order from '../views/order/Order'
import Evaluation from '../views/evaluation/Evaluation'
import EvaluationPage from "../views/evaluation/components/EvaluationPage";
import User from '../views/user/User'
import UserInfo from "../views/user/components/UserInfo"
import FlashSale from "../views/flashSale/FlashSale";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/goods',
      name: 'goods',
      component: Goods,
      meta: {
        keepAlive: true, //此组件需要被缓存
      }
    },
    {
      path: '/order',
      name: 'order',
      component: Order
    },
    {
      path: '/evaluation',
      name: 'evaluation',
      component: Evaluation
    },
    {
      path: '/evaluationPage/:orderId',
      name: 'evaluationPage',
      component: EvaluationPage
    },
    {
      path: '/user',
      name: 'user',
      component: User
    },
    {
      path: '/userInfo',
      name: 'userInfo',
      component: UserInfo
    },
    {
      path: '/flashSale',
      name: 'flashSale',
      component: FlashSale
    }
  ]
})
