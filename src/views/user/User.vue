<template>
  <div class="user">
    <div class="head">
      <user-head></user-head>
    </div>
    <div class="cell">
      <user-cell></user-cell>
    </div>
    <van-button round class="btn" v-show="!isLogin" type="info" to="login">去登录</van-button>
    <van-button round class="btn" color="#88AED5" v-show="isLogin" type="info" @click="handleLogout">退出登录</van-button>
  </div>
</template>

<script>
import UserHead from "./components/UserHead"
import UserCell from "./components/UserCell"
export default {
    name: 'user',
    components: {
        UserHead,
        UserCell
    },
    computed:{
        isLogin(){
            if (this.$store.getters.token){
                return true
            }else{
                return false
            }
        }
    },
    methods:{
        handleLogout(){
            this.$dialog.confirm({
                message: '是否确认注销',
                confirmButtonText: '注销'
            }).then(() => {
                this.$store.dispatch('user/logout').then(() => {
                    this.$notify({ type: 'success', message: '注销成功' });
                }).catch(() => {

                })
            }).catch(() => {
                // on cancel
            });
        }
    }
}
</script>

<style lang="stylus">
  .btn{
    width 90%
    margin-left 5%
    margin-top 7rem
  }
</style>
