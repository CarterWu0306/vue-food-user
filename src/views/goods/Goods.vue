<template>
  <div class="goods" id="goods">
    <van-nav-bar
      title="菜单页面"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft">
    </van-nav-bar>
    <div style="height: 15.2rem">
      <menu-body :goodsList="goodsList" :labelList="labelList" v-if="flag"></menu-body>
    </div>
    <shop-cart :goodsList="goodsList"></shop-cart>
  </div>
</template>

<script>
import ShopCart from './components/ShopCart'
import menuBody from './components/MenuBody'
import { getAllGoodsList, selGoodsLabel } from '@/api/goods'
export default {
    name: 'goods',
    components: {
      menuBody,
      ShopCart
    },
    data () {
      return{
          labelList: [],
          goodsList: [],
          flag: false
      }
    },
    methods:{
        selGoodsLabel(){
            selGoodsLabel().then(response => {
                this.labelList = response.data
            }).catch((err) => {
                console.log(err)
            })
        },
        getAllGoodsList(){
            getAllGoodsList().then(response => {
                const data = response.data;
                data.forEach(item => {
                    item.goods_num = 0
                });
                this.goodsList = data
                this.flag = true
            }).catch(() => {
                this.flag = true
            })
        },
        onClickLeft(){
            this.$router.push({ path:'/'})
        }
    },
    mounted() {
        this.selGoodsLabel();
        this.getAllGoodsList();
    }
}
</script>

<style lang="stylus">
  html, body, #goods
    height: 100%
</style>
