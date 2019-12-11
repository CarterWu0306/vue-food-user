<template>
    <div class="menuBody" id="menuBody">
      <cube-scroll-nav
                :side="true">
            <ul class="prepend-header" slot="prepend">
              <van-swipe :autoplay="3000" indicator-color="white">
                <van-swipe-item v-for="(item,index) in menuAdList" :key="index">
                  <van-image
                    width="100%"
                    height="150"
                    :src="item">
                  </van-image>
                </van-swipe-item>
              </van-swipe>
            </ul>
            <cube-scroll-nav-panel
                    v-for="(item,index) in labelList"
                    :key="index"
                    :label="item"
                    :title="item">
                <ul>
                    <li v-for="(food,index) in goodsList">
                        <div v-show="food.goodsLabel === item">
                          <div class="food">
                            <van-overlay :show="show" v-show="food.goodsStock<=0" style="background-color: rgba(255,255,255,0.57)">
                              <div style="background-color: rgba(42,42,42,0.55);width: 2rem;height: 2rem;border-radius: 50%;color: white;line-height: 2rem;text-align: center;margin-top: 1rem;margin-left: .5rem;font-size: .6rem">
                                售罄
                              </div>
                            </van-overlay>
                            <van-card
                              :num="food.goods_num"
                              :price="food.goodsPrice"
                              :title="food.goodsName"
                              :thumb="food.goodsImg"
                              class="food-card"
                            >
                              <div slot="footer">
                                <van-button round type="info" size="small" style="min-width: 0.8rem;" v-show="food.goods_num" @click="decreaseFood(index)">-</van-button>
                                <van-button round type="info" size="small" style="min-width: 0.8rem;" @click="addFood(index)">+</van-button>
                              </div>
                            </van-card>
                            <van-divider />
                          </div>
                        </div>
                    </li>
                </ul>
            </cube-scroll-nav-panel>
        </cube-scroll-nav>
    </div>
</template>

<script>
export default {
    name: "menuBody",
    props: ['goodsList','labelList'],
    data() {
        return {
            show: true,
            menuAdList: [
                "http://images.wukate.com/menuAd1.jpg",
                "http://images.wukate.com/menuAd2.jpg",
                "http://images.wukate.com/menuAd3.jpg",
            ]
        }
    },
    methods: {
        addFood(index) {
          this.goodsList[index].goods_num++
        },
        decreaseFood(index) {
          if (this.goodsList[index].goods_num>0){
            this.goodsList[index].goods_num--
          }
        }
    }
}
</script>

<style lang="stylus">
  html, body, #menuBody
    height: 15.2rem

  .menuBody
    span
      font-size .5rem
    .cube-scroll-nav-panel-title{
      background-color #ffffff
      font-size .4rem
      padding-top .1rem
      font-weight bold
    }
    .van-overlay{
      top auto
      left auto
      height 3.9rem
    }
    .van-card{
      font-size .42rem
    }
    .van-card__title{
      margin-top .8rem
    }
    .van-button--small{
      font-size .65rem
    }
    .food
      .food-card
        background-color white
</style>
