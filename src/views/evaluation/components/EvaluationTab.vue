<template>
  <div class="evaluation-tab">
    <van-tabs
      color="#1989fa"
      type="card">
      <van-tab title="全部">
        <evaluation-content></evaluation-content>
      </van-tab>
      <van-tab title="好评">
        <evaluation-content starLevel="highLevel"></evaluation-content>
      </van-tab>
      <van-tab title="中差评">
        <evaluation-content starLevel="lowLevel"></evaluation-content>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import EvaluationContent from "./EvaluationContent";
export default {
    name: "EvaluationTab",
    components:{
        EvaluationContent
    }
}
</script>

<style lang="stylus" scoped>

</style>
