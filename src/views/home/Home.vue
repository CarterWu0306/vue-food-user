<template>
  <div class="home">
    <van-image
      width="100%"
      height="200"
      src="http://images.wukate.com/menuAd1.jpg">
    </van-image>
    <div class="flashSale">
      <van-image
        width="100%"
        height="100%"
        src="http://images.wukate.com/flashSale.jpg"
        @click="gotoFlashSale">
      </van-image>
    </div>
    <div class="home-font">
      欢迎
    </div>
  </div>
</template>

<script>

export default {
    name: 'home',
    components: {

    },
    methods:{
        gotoFlashSale(){
            this.$router.push({ path:'/flashSale'})
        }
    }
}
</script>

<style lang="stylus" scoped>
  .home{
    .home-font{
      text-align center
    }
  }
</style>
