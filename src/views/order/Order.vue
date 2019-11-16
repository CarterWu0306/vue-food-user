<template>
  <div class="order">
    <van-tabs
      color="#1989fa"
      :sticky="true"
      @click="onClick">
      <van-tab title="待处理订单">
        <div>
          <order-content :orderList="orderList"></order-content>
        </div>
      </van-tab>
      <van-tab title="全部订单">
        <div>
          <order-content :orderList="orderList"></order-content>
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

</style>
