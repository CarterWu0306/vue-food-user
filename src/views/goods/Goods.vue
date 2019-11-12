<template>
  <div class="goods" id="goods">
    <van-nav-bar
      title="菜单页面"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft">
    </van-nav-bar>
    <menu-body :goods="goods" :labelList="labelList"></menu-body>
    <shop-cart :goods="goods"></shop-cart>
  </div>
</template>

<script>
import ShopCart from './components/ShopCart'
import menuBody from './components/MenuBody'
export default {
  name: 'goods',
  components: {
    menuBody,
    ShopCart
  },
  data () {
    return{
      labelList:[
        {
          "label": "招牌菜",
          "num": "30"
        },
        {
          "label": "海鲜",
          "num": "31"
        }
      ],
      goods: [
        {
          "goods_id": 1,
          "goodsName": "北京烤鸭",
          "goodsLabel": "招牌菜",
          "goods_stock": 100,
          "goods_num": 0,
          "goods_price": 18,
          "goodsImg": "http://images.wukate.com/8ca24b25-94e9-443b-af23-f92ec5742c35539345966153592340.jpg"
        },
        {
          "goods_id": 2,
          "goodsName": "水煮肉片",
          "goodsLabel": "招牌菜",
          "goods_stock": 100,
          "goods_num": 0,
          "goods_price": 18,
          "goodsImg": "http://images.wukate.com/8ca24b25-94e9-443b-af23-f92ec5742c35539345966153592340.jpg"
        },
        {
          "goods_id": 3,
          "goodsName": "皮皮虾",
          "goodsLabel": "海鲜",
          "goods_stock": 100,
          "goods_num": 0,
          "goods_price": 18,
          "goodsImg": "http://images.wukate.com/8ca24b25-94e9-443b-af23-f92ec5742c35539345966153592340.jpg"
        },
        {
          "goods_id": 4,
          "goodsName": "皮皮虾",
          "goodsLabel": "海鲜",
          "goods_stock": 0,
          "goods_num": 0,
          "goods_price": 18,
          "goodsImg": "http://images.wukate.com/8ca24b25-94e9-443b-af23-f92ec5742c35539345966153592340.jpg"
        },
        {
          "goods_id": 5,
          "goodsName": "皮皮虾",
          "goodsLabel": "海鲜",
          "goods_stock": 100,
          "goods_num": 0,
          "goods_price": 18,
          "goodsImg": "http://images.wukate.com/8ca24b25-94e9-443b-af23-f92ec5742c35539345966153592340.jpg"
        },
        {
          "goods_id": 6,
          "goodsName": "皮皮虾",
          "goodsLabel": "海鲜",
          "goods_stock": 100,
          "goods_num": 0,
          "goods_price": 18,
          "goodsImg": "http://images.wukate.com/8ca24b25-94e9-443b-af23-f92ec5742c35539345966153592340.jpg"
        },
        {
          "goods_id": 7,
          "goodsName": "皮皮虾",
          "goodsLabel": "海鲜",
          "goods_stock": 100,
          "goods_num": 0,
          "goods_price": 18,
          "goodsImg": "http://images.wukate.com/8ca24b25-94e9-443b-af23-f92ec5742c35539345966153592340.jpg"
        },
        {
          "goods_id": 8,
          "goodsName": "皮皮虾",
          "goodsLabel": "海鲜",
          "goods_stock": 100,
          "goods_num": 0,
          "goods_price": 18,
          "goodsImg": "http://images.wukate.com/8ca24b25-94e9-443b-af23-f92ec5742c35539345966153592340.jpg"
        }
      ]
    }
  },
  methods:{
    onClickLeft(){
      this.$router.push({ path:'/'})
    }
  }
}
</script>

<style lang="stylus">
  html, body, #goods
    height: 100%
</style>
