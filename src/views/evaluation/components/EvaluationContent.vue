<template>
  <div class="evaluationContent">
    <div class="content" v-for="(item,index) in evaluationList" :key="item.evaluationId">
      <van-divider :style="{ color: '#bebebe', borderColor: '#bebebe' }"></van-divider>
      <van-image
        round
        width="1rem"
        height="1rem"
        :src="item.avatar">
      </van-image>
      <span class="nickName">{{item.nickName}}</span>
      <div class="rate">
        <van-rate
          v-model="item.orderScore"
          allow-half
          :readonly="true"
          void-icon="star"
          void-color="#eee">
        </van-rate>
      </div>
      <div class="text">
        {{item.content}}
      </div>
      <div class="img">
        <span style="margin-right: .15rem" v-for="(i,s) in item.images" :key="s">
          <van-image
            width="100"
            height="100"
            :src="i"
            v-show="i!==''"
            @click="previewImg(index,s)">
        </van-image>
        </span>
      </div>
      <div class="reply" v-show="item.isReply === '1'">
        商家回复:
        <div class="replyContent">
          {{item.replyContent}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import { ImagePreview } from 'vant';
    import { getEvaluationByParams, sumEvaluation } from '@/api/evaluation'
    export default {
        name: "EvaluationContent",
        props: {
            starLevel: String
        },
        data() {
            return{
                listQuery: {
                    starLevel: ''
                },
                evaluationList: []
            }
        },
        methods:{
            previewImg(i,s){
                ImagePreview({
                    images: this.evaluationList[i].images,
                    startPosition: s,
                    onClose() {
                        // do something
                    }
                });
            },
            getEvaluationByParams(){
                getEvaluationByParams(this.listQuery).then(response => {
                    const data = response.data;
                    data.forEach(item => {
                        item.images = item.images.split(';')
                    });
                    this.evaluationList = data;
                }).catch(() => {

                })
            }
        },
        mounted() {
            if (this.starLevel){
                this.listQuery.starLevel = this.starLevel
            }
            this.getEvaluationByParams();
        }
    }
</script>

<style lang="stylus" scoped>
  .evaluationContent{
    .content{
      padding .5rem
      .nickName{
        font-size .6rem
        position absolute
        margin-top .2rem
        margin-left .2rem
      }
      .rate{
        margin-left 1.2rem
      }
      .text{
        font-size .5rem
        font-weight 300
        margin-left 1.2rem
        padding-top .1rem
        padding-bottom .1rem
      }
      .img{
        margin-left 1.2rem
        margin-top .2rem
      }
      .reply{
        font-size .4rem
        font-weight 600
        margin-left 1.2rem
        margin-top .2rem
        .replyContent{
          margin-top .2rem
        }
      }
    }
  }
</style>
