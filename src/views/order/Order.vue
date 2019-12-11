<template>
  <div class="order">
    <van-tabs
      color="#1989fa"
      :sticky="true"
      @click="onClick">
      <van-tab title="待处理订单">
        <div>
          <order-content v-show="isLogin" :orderList="orderList"></order-content>
          <van-button class="loginBtn" v-show="!isLogin" plain type="info" to="login">去登录</van-button>
        </div>
      </van-tab>
      <van-tab title="全部订单">
        <div>
          <order-content v-show="isLogin" :orderList="orderList"></order-content>
          <van-button class="loginBtn" v-show="!isLogin" plain type="info" to="login">去登录</van-button>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import OrderContent from "./components/OrderContent";
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
            this.orderList = [
                {
                    orderId: 1,
                    orderSn: 'snl2130129310',
                    orderStatus: '-1',
                    totalMoney: 100,
                    realTotalMoney: 80,
                    isAppraise: '0',
                    orderCreateTime: '2019-11-16 17:34'
                },
                {
                    orderId: 2,
                    orderSn: 'snl2130129310',
                    orderStatus: '0',
                    totalMoney: 100,
                    realTotalMoney: 80,
                    isAppraise: '0',
                    orderCreateTime: '2019-11-16 17:34'
                }
            ]
        },
        getAllOrderList(){
            this.orderList = [
                {
                    orderId: 1,
                    orderSn: 'snl2130129310',
                    orderStatus: '-1',
                    totalMoney: 100,
                    realTotalMoney: 80,
                    isAppraise: '0',
                    orderCreateTime: '2019-11-16 17:34'
                },
                {
                    orderId: 2,
                    orderSn: 'snl2130129310',
                    orderStatus: '0',
                    totalMoney: 100,
                    realTotalMoney: 80,
                    isAppraise: '0',
                    orderCreateTime: '2019-11-16 17:34'
                },
                {
                    orderId: 3,
                    orderSn: 'snl2130129310',
                    orderStatus: '1',
                    totalMoney: 100,
                    realTotalMoney: 80,
                    isAppraise: '1',
                    orderCreateTime: '2019-11-16 17:34'
                },
                {
                    orderId: 4,
                    orderSn: 'snl2130129310',
                    orderStatus: '-2',
                    totalMoney: 100,
                    realTotalMoney: 80,
                    isAppraise: '0',
                    orderCreateTime: '2019-11-16 17:34'
                },
                {
                    orderId: 5,
                    orderSn: 'snl2130129310',
                    orderStatus: '0',
                    totalMoney: 100,
                    realTotalMoney: 80,
                    isAppraise: '0',
                    orderCreateTime: '2019-11-16 17:34'
                },
                {
                    orderId: 6,
                    orderSn: 'snl2130129310',
                    orderStatus: '0',
                    totalMoney: 100,
                    realTotalMoney: 80,
                    isAppraise: '0',
                    orderCreateTime: '2019-11-16 17:34'
                },
                {
                    orderId: 7,
                    orderSn: 'snl2130129310',
                    orderStatus: '0',
                    totalMoney: 100,
                    realTotalMoney: 80,
                    isAppraise: '0',
                    orderCreateTime: '2019-11-16 17:34'
                },
                {
                    orderId: 8,
                    orderSn: 'snl2130129310',
                    orderStatus: '0',
                    totalMoney: 100,
                    realTotalMoney: 80,
                    isAppraise: '0',
                    orderCreateTime: '2019-11-16 17:34'
                }
            ]
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
