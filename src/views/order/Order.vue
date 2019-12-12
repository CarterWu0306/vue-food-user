<template>
  <div class="order">
    <van-tabs
      color="#1989fa"
      :sticky="true"
      @click="onClick">
      <van-tab title="待处理订单">
        <div>
          <order-content v-if="isLogin" :orderList="orderList"></order-content>
          <van-button class="loginBtn" v-show="!isLogin" plain type="info" to="login">去登录</van-button>
        </div>
      </van-tab>
      <van-tab title="全部订单">
        <div>
          <order-content v-if="isLogin" :orderList="orderList"></order-content>
          <van-button class="loginBtn" v-show="!isLogin" plain type="info" to="login">去登录</van-button>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import OrderContent from "./components/OrderContent";
import { getOrdersByParam, getOrderList } from '@/api/order'
export default {
    name: 'order',
    components:{
      OrderContent
    },
    data(){
        return{
            orderList:[]
        }
    },
    computed:{
      isLogin(){
          if (this.$store.getters.token){
              return true
          }else{
              return false
          }
      }
    },
    methods: {
        onClick(name, title) {
            if (title==='待处理订单'){
                this.getPendingOrderList()
            }else{
                this.getAllOrderList()
            }
        },
        getPendingOrderList(){
            getOrdersByParam({ userId: this.$store.getters.userId, tabType: 'PendingOrders'}).then(response => {
                this.orderList = response.data
            })
        },
        getAllOrderList(){
            getOrdersByParam({ userId: this.$store.getters.userId, tabType: ''}).then(response => {
                this.orderList = response.data
            })
        }
    },
    mounted() {
      this.getPendingOrderList()
    }
}
</script>

<style lang="stylus">
  .order{
    .loginBtn{
      width 20%
      margin-top 50%
      margin-left 40%
    }
  }
</style>
