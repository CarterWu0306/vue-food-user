<template>
  <div class="login">
    <div class="avatar">
      <van-image
        round
        width="2.5rem"
        height="2.5rem"
        src="http://images.wukate.com/defaultUser.jpg">
      </van-image>
    </div>
    <div class="title">欢迎登录</div>
    <div class="loginForm">
      <van-cell-group>
        <van-field
          v-model="loginForm.username"
          placeholder="请输入用户名">
        </van-field>
        <van-field
          v-model="loginForm.password"
          type="password"
          placeholder="请输入密码">
        </van-field>
      </van-cell-group>
      <van-button round type="info" class="btn" @click="handleLogin">登录</van-button>
      <van-button round type="primary" class="btn" to="register">注册</van-button>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return{
                loginForm: {
                    username: '',
                    password: ''
                }
            }
        },
        methods: {
            handleLogin(){
                if (this.loginForm.username === '' || this.loginForm.password === ''){
                    this.$notify({ type: 'warning', message: '帐号或密码不能为空' });
                }else{
                    this.$store.dispatch('user/login', this.loginForm).then(response => {
                        this.$router.push({path: this.redirect || '/'})
                    }).catch(() => {
                    })
                }
            }
        }
    }
</script>

<style lang="stylus" scoped>
  .login{
    .avatar{
      text-align center
      margin-top 1rem
    }
    .title{
      text-align center
      margin-top .2rem
      color #78797b
    }
    .loginForm{
      margin-top 1rem
      .van-cell{
        line-height 1rem
      }
    }
    .btn{
      width 3rem
      margin-left 1.2rem
      margin-top .4rem
    }
  }
</style>
