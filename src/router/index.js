import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/home/Home'
import Goods from '../views/goods/Goods'
import Order from '../views/order/Order'
import Evaluation from '../views/evaluation/Evaluation'
import User from '../views/user/User'

Vue.use(Router)

export default new Router({
  routes: [
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
