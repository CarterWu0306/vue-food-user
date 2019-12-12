<template>
    <div class="page">
      <div class="evaluation-card-background">
        <div class="evaluation-card">
          <div class="card-font">
            您对该订单满意吗?
          </div>
          <div class="rate">
            <van-rate
              v-model="value"
              allow-half
              size="40"
              void-icon="star"
              void-color="#eee">
            </van-rate>
          </div>
        </div>
      </div>
      <div class="toast-font">
        请上传图片
      </div>
      <div class="uploadImg">
        <van-uploader
          v-model="fileList"
          multiple
          :max-count="6">
        </van-uploader>
      </div>
      <div class="content">
        <van-cell-group>
          <van-field
            v-model="content"
            rows="2"
            :autosize="{ maxHeight: 100, minHeight: 100 }"
            label="评价内容"
            type="textarea"
            maxlength="100"
            placeholder="请输入评价内容"
            show-word-limit>
          </van-field>
        </van-cell-group>
      </div>
      <van-button round class="btn" type="warning">提交评价</van-button>
    </div>
</template>

<script>
    export default {
        name: "EvaluationPage",
        data() {
            return {
                value: 5,
                fileList: [],
                content: ''
            }
        }
    }
</script>

<style lang="stylus" scoped>
  .page{
    .evaluation-card-background{
      padding 10px
      .evaluation-card{
        background-color #ffffff
        box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
        padding 10px
        .card-font{
          text-align center
          font-size 20px
          font-weight bold
          padding-bottom 5px
        }
        .rate{
          text-align center
        }
      }
    }
    .toast-font{
        text-align center
        font-size 20px
        font-weight 500
        padding-bottom 5px
        padding-top 5px
    }
    .uploadImg{
      height 5rem
      margin-top .5rem
      margin-left 1.5rem
    }
    .content{
      padding-left .5rem
    }
    .btn{
      width 90%
      margin-left 5%
      margin-top 2rem
    }
  }
</style>
