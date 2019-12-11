import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/login/Login'
import Register from '../views/login/Register'
import Home from '../views/home/Home'
import Goods from '../views/goods/Goods'
import Order from '../views/order/Order'
import Evaluation from '../views/evaluation/Evaluation'
import User from '../views/user/User'

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
      component: Goods
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
      path: '/user',
      name: 'user',
      component: User
    }
  ]
})
