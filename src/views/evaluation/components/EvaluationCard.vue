<template>
  <div class="evaluation-card-background">
    <div class="evaluation-card">
      <div class="card-font">
        店铺评分
      </div>
      <div class="score">
        {{value.toFixed(1)}}
      </div>
      <van-rate
        v-model="value"
        allow-half
        :readonly="true"
        void-icon="star"
        void-color="#eee">
      </van-rate>
      <div class="card-font-total">
        共{{total}}条评价
      </div>
    </div>
  </div>
</template>

<script>
import { sumEvaluation } from '@/api/evaluation'
export default {
    name: "EvaluationCard",
    data(){
        return{
            value: 5.0,
            total: 0
        }
    },
    methods:{
        sumEvaluation(){
            sumEvaluation().then(response => {
                const data = response.data;
                console.log(data)
                this.value = data.avgScore;
                this.total = data.total;
            })
        }
    },
    mounted() {
        this.sumEvaluation()
    }
}
</script>

<style lang="stylus" scoped>
  .evaluation-card-background{
    padding 10px
    .evaluation-card{
      background-color #ffffff
      box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
      padding 10px
      .score{
        font-size: 50px;
        color: #ff9900;
        float: left;
        margin-right: 20px;
      }
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
