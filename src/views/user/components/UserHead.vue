<template>
  <div class="userHead">
    <div class="container">
      <van-image
        round
        width="2.5rem"
        height="2.5rem"
        src="http://images.wukate.com/defaultUser.jpg">
      </van-image>
      <span class="nickName">假装躺在云上好轻松</span>
    </div>
  </div>
</template>

<script>
    export default {
        name: "UserHead"
    }
</script>

<style lang="stylus" scoped>
  .userHead{
    background-color #5a4238
    height 5rem
    .container{
      padding-top 1.2rem
      padding-left .5rem
      .nickName{
        font-size .5rem
        color #f1f1f1
        position absolute
        margin-top 1rem
        margin-left .5rem
      }
    }
  }
</style>
