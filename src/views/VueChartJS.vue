<template>
  <section class="container">
    <h1>Demo examples of vue-chartsjs</h1>
    <div class="columns">
      <div class="column">
        <h3>Line Chart</h3>
        <line-chart></line-chart>
      </div>
      <div class="column">
        <h3>Bar Chart</h3>
        <bar-chart></bar-chart>
      </div>
    </div>
  </section>
</template>
<script>
import LineChart from "../components/LineChart.vue";
import BarChart from "../components/BarChart.vue";
export default {
  components: { LineChart, BarChart },
  name: "vue-charts-js",
};
</script>