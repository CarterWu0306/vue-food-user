<template>
  <div class="evaluation">
    <evaluation-card></evaluation-card>
    <evaluation-tab></evaluation-tab>
  </div>
</template>

<script>
import EvaluationCard from "./components/EvaluationCard";
import EvaluationTab from "./components/EvaluationTab";
export default {
  name: 'evaluation',
  components: {
    EvaluationCard,
      EvaluationTab
  }
}
</script>
