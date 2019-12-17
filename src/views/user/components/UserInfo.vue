<template>
  <div>
    <div>
      <van-nav-bar
        title="个人资料"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft">
      </van-nav-bar>
    </div>
    <div style="text-align: center">
      <van-uploader :after-read="afterRead">
        <van-image
          round
          width="2.5rem"
          height="2.5rem"
          :src="userForm.avatar">
        </van-image>
      </van-uploader>
    </div>
    <div>
      <van-cell-group>
        <van-field
          :value="userForm.username"
          label="用户名"
          left-icon="contact"
          readonly>
        </van-field>
        <van-field
          :value="userForm.nickName"
          label="昵称"
          left-icon="smile-o"
          readonly>
        </van-field>
        <van-field
          :value="userForm.realName"
          label="真实姓名"
          left-icon="fire-o"
          readonly>
        </van-field>
        <van-field
          :value="userForm.password"
          label="密码"
          left-icon="closed-eye"
          type="password"
          readonly>
          <van-button slot="button" size="small" type="primary" @click="changePwd">修改密码</van-button>
        </van-field>
        <van-field
          :value="userForm.userPhone"
          label="手机号"
          left-icon="phone-o"
          readonly>
        </van-field>
      </van-cell-group>
    </div>
    <van-dialog
      v-model="show"
      title="请输入新密码"
      show-cancel-button
      :beforeClose="beforeClose"
    >
      <van-field
        v-model="password"
        placeholder="请输入"
        type="password">
      </van-field>
    </van-dialog>
  </div>
</template>

<script>
    import { uploadUserImage, updateUser, changePwd } from '@/api/user'
    export default {
        name: "UserInfo",
        data() {
            return{
                userForm: {},
                show: false,
                password: ''
            }
        },
        methods: {
            onClickLeft(){
                this.$router.push({ path:'/user'})
            },
            getParams () {
                let routerParams = this.$route.params
                this.userForm = routerParams
            },
            afterRead(file){
                let formdata = new FormData()
                formdata.append("file", file.file)
                uploadUserImage(formdata).then(response =>{
                    file.content = response.data
                    this.userForm.avatar = response.data
                    updateUser({ userId: this.userForm.userId, avatar: response.data, username: this.userForm.username, userType: 3 }).then(response => {
                        this.$notify({ type: 'success', message: '头像更换成功' });
                    })
                })
            },
            changePwd(){
                this.show = true
            },
            beforeClose(action, done){
                if(action === 'confirm') {
                    changePwd({ userId: this.userForm.userId, password: this.password}).then(response => {
                        this.$notify({ type: 'success', message: response.message + '!请重新登录!' });
                    })
                    done() //关闭
                    this.$store.dispatch('user/logout').then(() => {
                        this.$router.push({ path:'/login'})
                    }).catch(() => {

                    })
                }else if(action === 'cancel') {
                    done() //关闭
                }
            }
        },
        mounted() {
            this.getParams()
        }
    }
</script>

<style scoped>

</style>
