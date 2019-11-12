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
            <van-button type="info">结算</van-button>
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
              <div class="food" v-for="(food,index) in goods">
                <div style="padding: 12px 0;" v-show="food.goods_num">
                  <span class="name">{{food.goodsName}}</span>
                  <div class="price">
                    <span>￥{{food.goods_price * food.goods_num}}</span>
                  </div>
                  <div class="button">
                    <van-button round type="info" size="small" style="min-width: 0.8rem;" v-show="food.goods_num" @click="decreaseGoods(index)">-</van-button>
                    <span v-show="food.goods_num">{{food.goods_num}}</span>
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
  export default {
    name: "ShopCart",
    props:{
      goods: Array
    },
    data () {
      return{
        selectedFoods: [],
        listShow: false
      }
    },
    computed: {
      totalCount() {
        let count = 0;
        this.goods.forEach((goods) => {
          count += goods.goods_num;
        });
        return count;
      },
      totalPrice() {
        let price = 0;
        this.goods.forEach((goods) => {
          if (goods.goods_num) {
            price += goods.goods_price * goods.goods_num;
          }
        });
        if (price===0){
          this.selectedFoods = []
        }
        return price;
      }
    },
    methods:{
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
        this.goods.forEach((food) =>{
          if (food.goods_num){
            this.selectedFoods.push(food)
          }
        })
      },
      addGoods(index) {
        this.goods[index].goods_num++
      },
      decreaseGoods(index) {
        if (this.goods[index].goods_num>0){
          this.goods[index].goods_num--
        }
      },
      empty() {
        this.selectedFoods = [];
        this.goods.forEach((food) => {
          food.goods_num = 0
        });
        this.listShow = false
      }
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
