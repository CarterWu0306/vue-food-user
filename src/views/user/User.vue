<template>
  <div class="user">
    <div class="head">
      <user-head :userInfo="userInfo"></user-head>
    </div>
    <div class="cell">
      <user-cell :userInfo="userInfo"></user-cell>
    </div>
    <van-button round class="btn" v-show="!isLogin" type="info" to="login">去登录</van-button>
    <van-button round class="btn" color="#88AED5" v-show="isLogin" type="info" @click="handleLogout">退出登录</van-button>
  </div>
</template>

<script>
import UserHead from "./components/UserHead"
import UserCell from "./components/UserCell"
import { getInfo } from "@/api/user"
export default {
    name: 'user',
    components: {
        UserHead,
        UserCell
    },
    data() {
        return{
            userInfo: {
                avatar: 'http://images.wukate.com/defaultUser.jpg',
                nickName: '请登录',
                userScore: 0
            }
        }
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
        getUserInfo(){
            if (this.$store.getters.token) {
                getInfo().then(response => {
                    this.userInfo = response.data
                })
            }else{
                this.userInfo = {
                    avatar: 'http://images.wukate.com/defaultUser.jpg',
                    nickName: '请登录',
                    userScore: 0
                }
            }
        },
        handleLogout(){
            this.$dialog.confirm({
                message: '是否确认注销',
                confirmButtonText: '注销'
            }).then(() => {
                this.$store.dispatch('user/logout').then(() => {
                    this.$notify({ type: 'success', message: '注销成功' });
                    this.getUserInfo()
                }).catch(() => {

                })
            }).catch(() => {
                // on cancel
            });
        }
    },
    mounted() {
        this.getUserInfo()
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
