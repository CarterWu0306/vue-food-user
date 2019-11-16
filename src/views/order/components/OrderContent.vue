<template>
  <div class="order-content">
    <div v-for="order in orderList" :key="order.orderId" class="content">
      <van-panel>
        <div slot="header">
          <div class="title">
            订单编号:{{order.orderSn}}
          </div>
          <div class="status">
            <van-tag type="danger" v-show="order.orderStatus==='-2'">订单取消</van-tag>
            <van-tag type="primary" v-show="order.orderStatus==='-1'">待付款</van-tag>
            <van-tag type="warning" v-show="order.orderStatus==='0'">制作中</van-tag>
            <van-tag type="success" v-show="order.orderStatus==='1'">已完成</van-tag>
          </div>
        </div>
        <div class="price">
          总金额￥{{order.totalMoney}}
        </div>
        <div slot="footer">
          <div class="time">
            {{order.orderCreateTime}}
          </div>
          <div class="button">
            <van-button size="small" v-show="order.orderStatus!=='1'">确认订单</van-button>
            <van-button size="small" plain type="info" v-show="order.isAppraise!=='1'">去评价</van-button>
          </div>
        </div>
      </van-panel>
    </div>
  </div>
</template>

<script>
export default {
    name: "OrderContent",
    props:['orderList']
}
</script>

<style lang="stylus" scoped>
  .order-content{
    background-color #f1f1f1
    .content{
      padding-bottom 10px
      position: relative
      .title{
        display:inline-block
        font-size 14px
      }
      .status{
        position: absolute
        right: 0
        display:inline-block
        margin-right 5px
      }
      .price{
        font-size 18px
        margin-top 5px
        margin-right 5px
      }
      .time{
        display:inline-block
        font-size 5px
        color #999999
      }
      .button{
        position: absolute
        right: 0
        display:inline-block
        margin-right 5px
      }
    }
  }
</style>
