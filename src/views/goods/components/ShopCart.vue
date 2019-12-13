<template>
  <div>
    <div class="shopcart">
      <div class="content">
        <div class="content-left" @click="shopCartClick">
          <div class="logo-wrapper">
            <div class="logo" :class="{'highlight':totalCount>0}">
              <van-icon class="icon-shopping_cart" :class="{'highlight':totalCount>0}" name="shopping-cart"/>
            </div>
            <div class="num" v-show="totalCount>0">{{totalCount}}</div>
          </div>
          <div class="price" :class="{'highlight':totalPrice>0}">￥{{totalPrice}}</div>
        </div>
        <div class="content-right">
          <div class="pay">
            <van-button type="info" v-if="isLogin" @click="placeOrder">结算</van-button>
            <van-button type="info" v-if="!isLogin" to="login">去登录</van-button>
          </div>
        </div>
      </div>
      <transition name="fold">
        <div class="shopcart-list" v-show="listShow">
          <div class="list-header">
            <h1 class="title">购物车</h1>
            <span class="empty" @click="empty">清空</span>
          </div>
          <div class="list-content" ref="listContent">
              <div class="food" v-for="(food,index) in goodsList">
                <div style="padding: 12px 0;" v-show="food.goods_num">
                  <span class="name">{{food.goodsName}}</span>
                  <div class="price">
                    <span>￥{{food.goodsPrice * food.goods_num}}</span>
                  </div>
                  <div class="button">
                    <van-button round type="info" size="small" style="min-width: 0.8rem;" v-show="food.goods_num" @click="decreaseGoods(index)">-</van-button>
                    <span v-show="food.goods_num" class="goods-num">{{food.goods_num}}</span>
                    <van-button round type="info" size="small" style="min-width: 0.8rem;" @click="addGoods(index)">+</van-button>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </transition>
    </div>
    <transition name="fade">
      <div class="list-mask" @click="hideList" v-show="listShow"></div>
    </transition>
  </div>
</template>

<script>
  import { getInfo } from "@/api/user"
  import { placeOrderByUser } from '@/api/feign'
  export default {
      name: "ShopCart",
      props:{
          goodsList: Array
      },
      data () {
        return{
            selectedFoods: [],
            listShow: false,
            allScore: 0,
            orderForm: {
                userId: '',
                totalMoney: 0.00,
                realTotalMoney: 0.00,
                deductionScore: 0,
                goodsList: []
            }
        }
      },
      computed: {
          isLogin(){
              if (this.$store.getters.token){
                  return true
              }else{
                  return false
              }
          },
          totalCount() {
            let count = 0;
            this.goodsList.forEach((goods) => {
              count += goods.goods_num;
            });
            return count;
          },
          totalPrice() {
            let price = 0;
            this.goodsList.forEach((goods) => {
              if (goods.goods_num) {
                price += goods.goodsPrice * goods.goods_num;
              }
            });
            if (price===0){
              this.selectedFoods = []
            }
            return price;
          },
          canUseSocre(){
              if (this.orderForm.totalMoney <= this.allScore/10){
                  return this.orderForm.totalMoney * 10
              }else {
                  return this.allScore;
              }
          }
      },
      methods:{
          getInfo(){
              if (this.$store.getters.token){
                  getInfo().then(response => {
                      this.allScore = response.data.userScore
                  })
              }
          },
          shopCartClick(){
            if (!this.totalCount){
                return;
            }
            this.selected();
            this.listShow = !this.listShow
          },
          hideList(){
            this.listShow = !this.listShow
          },
          selected() {
            this.selectedFoods = [];
            this.goodsList.forEach((food) =>{
              if (food.goods_num){
                this.selectedFoods.push(food)
              }
            })
          },
          addGoods(index) {
            this.goodsList[index].goods_num++;
          },
          decreaseGoods(index) {
            if (this.goodsList[index].goods_num>0){
              this.goodsList[index].goods_num--
            }
            this.selected();
          },
          empty() {
            this.selectedFoods = [];
            this.goodsList.forEach((food) => {
              food.goods_num = 0
            });
            this.listShow = false
          },
          placeOrder(){
              if (!this.totalCount){
                  this.$notify({ type: 'warning', message: '购物车为空' });
                  return;
              }
              this.selected();
              this.orderForm = {
                  userId: Number(this.$store.getters.userId),
                  totalMoney: this.totalPrice.toFixed(2),
                  realTotalMoney: this.totalPrice.toFixed(2),
                  deductionScore: 0,
                  goodsList: this.selectedFoods
              }
              this.listShow = true
              this.$dialog.confirm({
                  message: '是否确认下单',
                  confirmButtonText: '下单'
              }).then(() => {
                  this.$dialog.confirm({
                      message: '是否使用'+ this.canUseSocre +'积分抵扣'+this.canUseSocre/10+'元',
                      confirmButtonText: '使用'
                  }).then(() => {
                      this.orderForm.realTotalMoney = (this.orderForm.realTotalMoney - this.canUseSocre/10).toFixed(2);
                      this.orderForm.deductionScore = this.canUseSocre

                      //使用积分抵扣下单
                      placeOrderByUser(this.orderForm).then(response => {
                          this.$notify({ type: 'success', message: '下单成功' });
                          this.$dialog.confirm({
                              message: '是否立即支付'+this.orderForm.realTotalMoney+'元',
                              confirmButtonText: '支付'
                          }).then(() => {
                              this.$notify({ type: 'success', message: '支付成功' });
                          }).catch(() => {
                              // on cancel
                              //跳转订单页面
                          });
                      })
                      console.log(this.orderForm)
                  }).catch(() => {
                      //不使用积分抵扣下单
                      this.$notify({ type: 'success', message: '下单成功' });
                      this.$dialog.confirm({
                          message: '是否立即支付'+this.orderForm.realTotalMoney+'元',
                          confirmButtonText: '支付'
                      }).then(() => {
                          this.$notify({ type: 'success', message: '支付成功' });
                      }).catch(() => {
                          // on cancel
                      });
                      console.log(this.orderForm)
                  });
              }).catch(() => {
                  // on cancel
              });
          }
      },
      mounted() {
        this.getInfo()
      }
  }
</script>

<style lang="stylus" scoped>
  .shopcart{
    position fixed
    left 0
    z-index 50
    width 100%
    height 48px
    .content{
      display: flex
      background: #141d27
      font-size: 0
      color: rgba(255, 255, 255, 0.4)
      .content-left{
        flex: 1
        .logo-wrapper{
          display: inline-block
          vertical-align: top
          position: relative
          top: -10px
          margin: 0 12px
          padding: 6px
          width: 56px
          height: 56px
          box-sizing: border-box
          border-radius: 50%
          background: #141d27
          .logo{
            width: 100%
            height: 100%
            border-radius: 50%
            text-align: center
            background: #2b343c
            &.highlight{
              background: rgb(0, 160, 220)
            }
            .icon-shopping_cart{
              line-height: 44px
              font-size: 24px
              color: #80858a
              &.highlight{
                color: #fff
              }
            }
          }
          .num{
            position: absolute
            top: 0
            right: 0
            width: 24px
            height: 16px
            line-height: 16px
            text-align: center
            border-radius: 16px
            font-size: 9px
            font-weight: 700
            color: #fff
            background: rgb(240, 20, 20)
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4)
          }
        }
        .price{
          display: inline-block
          vertical-align: top
          margin-top: 12px
          line-height: 24px
          padding-right: 12px
          box-sizing: border-box
          border-right: 1px solid rgba(255, 255, 255, 0.1)
          font-size: 16px
          font-weight: 700
          &.highlight{
            color: #fff
          }
        }
      }
      .content-right{
        .pay{
          height: 56px
          line-height: 56px
          text-align: center
          font-size: 12px
          font-weight: 700
          .van-button{
            height 56px
          }
        }
      }
    }
    .shopcart-list{
      position: absolute
      left: 0
      top: 0
      z-index: -1
      width: 100%
      transform: translate3d(0, -100%, 0)
      &.fold-enter-active, &.fold-leave-active{
        transition: all 0.5s
      }
      &.fold-enter, &.fold-leave-active{
        transform: translate3d(0, 0, 0)
      }
      .list-header{
        height: 40px
        line-height: 40px
        padding: 0 18px
        background: #f3f5f7
        border-bottom: 1px solid rgba(7, 17, 27, 0.1)
        .title{
          float: left
          font-size: 14px
          color: rgb(7, 17, 27)
        }
        .empty{
          float: right
          font-size: 12px
          color: rgb(0, 160, 220)
        }
      }
      .list-content{
        padding: 0 18px
        max-height: 217px
        overflow-y:auto;
        background: #fff
        .food{
          position: relative
          box-sizing: border-box
          border -1px(rgba(7, 17, 27, 0.1))
          .name{
            line-height: 24px
            font-size: 14px
            color: rgb(7, 17, 27)
          }
          .price{
            position: absolute
            right: 120px
            bottom: 12px
            line-height: 24px
            font-size: 14px
            font-weight: 700
            color: rgb(240, 20, 20)
          }
          .button{
            float: right
            .goods-num{
              font-size .4rem
            }
          }
        }
      }
    }
  }
  .list-mask{
    position: fixed
    top: 0
    left: 0
    width: 100%
    height: 100%
    z-index: 40
    backdrop-filter: blur(2px)
    opacity: 1
    background: rgba(7, 17, 27, 0.6)
    &.fade-enter-active, &.fade-leave-active{
      transition: all 0.5s
    }
    &.fade-enter, &.fade-leave-active{
      opacity: 0
      background: rgba(7, 17, 27, 0)
    }
  }
</style>
