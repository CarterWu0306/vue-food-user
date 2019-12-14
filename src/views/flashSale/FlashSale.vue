<template>
  <div>
    <van-button class="loginBtn" v-show="!isLogin" plain type="info" to="login">去登录</van-button>
    <div v-show="isLogin" v-for="item in flashSaleList" :key="item.flashSaleId">
      <div class="evaluation-card-background">
        <div class="evaluation-card">
          <div class="card-font">
            秒杀积分
          </div>
          <div class="score">
            {{item.score}}
          </div>
          <span class="card-font-total">
            开始时间{{formatDate(item.startTime)}}
          </span>
          <van-button style="margin-left: 2rem" disabled round type="warning" v-if="formatDate(item.startTime)>formatDate(new Date())">秒杀</van-button>
          <van-button style="margin-left: 2rem" round type="warning" v-if="formatDate(item.startTime)<=formatDate(new Date())" @click="rush(item.flashSaleId)">秒杀</van-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import { getFlashSaleList, rush } from "@/api/flashSale"
    import moment from 'moment'
    export default {
        name: "FlashSale",
        data(){
            return{
                listQuery: {
                    page: 1,
                    limit: 100
                },
                flashSaleList: []
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
            formatDate(date){
                if (date === undefined){
                    return ''
                }
                return moment(date).format('YYYY-MM-DD HH:mm:ss')
            },
            getFlashSaleList(){
                if (this.$store.getters.token){
                    getFlashSaleList(this.listQuery).then(response => {
                        this.flashSaleList = response.data
                    })
                }
            },
            rush(flashSaleId){
                rush({ flashSaleId:flashSaleId, userId: Number(this.$store.getters.userId) }).then(response => {
                    this.$notify({ type: 'success', message: response.message });
                    this.getFlashSaleList()
                })
            }
        },
        mounted() {
            this.getFlashSaleList()
        }
    }
</script>

<style lang="stylus" scoped>
  .loginBtn{
    margin-left 40%
    margin-top 40%
  }
  .evaluation-card-background{
    padding 10px
    .evaluation-card{
      background-color #ffffff
      box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
      padding 10px
      .card-font{
        font-size 18px
        font-weight bold
      }
      .card-font-total{
        font-size 14px
      }
    }
  }
</style>
