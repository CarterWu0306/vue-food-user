<template>
  <div class="register">
    <div class="registerForm">
      <van-cell-group>
        <van-field
          v-model="registerForm.username"
          label="用户名:"
          placeholder="请输入用户名"
          required>
        </van-field>
        <van-field
          v-model="registerForm.password"
          type="password"
          label="密码:"
          placeholder="请输入密码"
          :error-message="errorPwdMsg"
          required>
        </van-field>
        <van-field
          v-model="registerForm.userPhone"
          label="手机号:"
          placeholder="请输入手机号"
          :error-message="errorPhoneMsg"
          required>
        </van-field>
        <van-field
          v-model="registerForm.nickName"
          label="昵称:"
          placeholder="请输入用户名"
          required>
        </van-field>
        <van-field
          v-model="registerForm.realName"
          label="真实姓名:"
          placeholder="请输入用户名"
          required>
        </van-field>
        <van-field
          v-model="registerForm.userEmail"
          label="邮箱:"
          placeholder="请输入邮箱">
        </van-field>
      </van-cell-group>
      <div class="avatar">
        <span class="avatarLabel">头像:</span>
        <van-uploader class="img"
                      v-model="fileList"
                      :after-read="afterRead"
                      :max-count="1"></van-uploader>
      </div>
      <div class="btn">
        <van-button round type="primary" size="large" @click="confirmReg">确认注册</van-button>
      </div>
    </div>
  </div>
</template>

<script>
    import { uploadUserImage, addUser } from '@/api/user'
    export default {
        name: "Register",
        data() {
            return{
                registerForm: {
                    username : '',
                    password: '',
                    nickName: '',
                    realName: '',
                    avatar: '',
                    userPhone: '',
                    userEmail: '',
                    userType: 3
                },
                fileList: [],
                errorPwdMsg: '',
                errorPhoneMsg: '',
            }
        },
        methods:{
            afterRead(file) {
                let formdata = new FormData()
                formdata.append("file", file.file)
                uploadUserImage(formdata).then(response =>{
                    file.content = response.data
                    this.registerForm.avatar = response.data
                })
            },
            confirmReg(){
                this.errorPwdMsg = '';
                this.errorPhoneMsg = '';
                if (this.registerForm.username === '' || this.registerForm.password === '' || this.registerForm.nickName === '' || this.registerForm.realName === ''){
                    this.$notify({ type: 'warning', message: '请填写所有必填项' });
                }else if (this.registerForm.password.length<6){
                    this.errorPwdMsg = '密码必须大于6位'
                }else if (!(/^1[3456789]\d{9}$/.test(this.registerForm.userPhone))){
                    this.errorPhoneMsg = '手机号格式不正确'
                }else {
                    addUser(this.registerForm).then(response => {
                        this.$notify({ type: 'success', message: response.message });
                        this.$router.push({ path:'/login'})
                    }).catch(() => {
                    })
                }
            }
        }
    }
</script>

<style lang="stylus" scoped>
  .register{
    .registerForm{
      margin-top 1rem
      .van-cell{
        line-height 1rem
      }
      .avatar{
        .avatarLabel{
          font-size 15px
          margin-left 15px
        }
        .img{
          margin-left 1.2rem
          margin-top .3rem
        }
      }
      .btn{
        width 80%
        margin-left 10%
        margin-top 1rem
      }
    }
  }
</style>
