<template>
  <div id="app">
    <div style="overflow: auto">
      <!--<keep-alive>-->
        <router-view/>
      <!--</keep-alive>-->
    </div>
    <div class="tabbar" v-show="show">
      <van-tabbar v-model="active"
                  route>
        <van-tabbar-item replace to="/" name="home" icon="wap-home-o">主页</van-tabbar-item>
        <van-tabbar-item replace to="/goods" name="goods" icon="shopping-cart-o">菜单</van-tabbar-item>
        <van-tabbar-item replace to="/order" name="order" icon="description">订单</van-tabbar-item>
        <van-tabbar-item replace to="/evaluation" name="evaluation" icon="comment-o">评价</van-tabbar-item>
        <van-tabbar-item replace to="/user" name="user" icon="user-o">我的</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script>
export default {
    name: 'app',
    data() {
      return {
          active: 'home',
          show: true
      }
    },
    watch:{
        /*$route(to,from){
            if (to.path === '/login'){
                this.show = false;
            }
        }*/
    },
    computed:{
      judjeShow(){
        if (this.active === 'goods'){
          this.show = false
        }else{
          this.show = true
        }
      }
    },
    mounted() {
       /* if (this.$route.path === '/login'){
            this.show = false;
        }*/
    }
}
</script>

<style lang="stylus">
  html, body, #app
    height: 100%
  .van-nav-bar__text{
    font-size 14px
  }
  .tabbar{
    height: 1.333333rem
  }
</style>
