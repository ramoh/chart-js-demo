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
    <div class="columns">
      <div class="column">
        <h3>Bubble Chart</h3>
        <bubble-chart></bubble-chart>
      </div>
      <div class="column">
        <h3>Reactivity - Live update upon change in datasets</h3>
        <reactive :chart-data="dataCollection"></reactive>
        <button class="button is-primary" @click="fillData()">Randomize</button>
      </div>
    </div>
  </section>
</template>
<script>
import LineChart from "../components/LineChart.vue";
import BarChart from "../components/BarChart.vue";
import BubbleChart from "../components/BubbleChart.vue";
import Reactive from "../components/Reactive.vue";
//const xLables = Array.from(Array(60), (x, index) => index + 1);
const yLabels = [];
const xLabels1 = [];

const randomNumberGenerator = (max, min) => {
  return Math.random() * (max - min) + min;
};
export default {
  components: { LineChart, BarChart, BubbleChart, Reactive },
  name: "vue-charts-js",
  data() {
    return {
      // instantiating dataCollection with null
      dataCollection: null,
    };
  },
  created() {
    // anytime the vue instance if created, call the fillData() function
    this.fillData();
  },
  mounted() {
    // add a element to y lables at regular interval.
    // per 500 milliseconds
    const updatePrice = setInterval(() => {
      yLabels.push(randomNumberGenerator(75, 85));

      let time = new Date();
      xLabels1.push(time.toLocaleTimeString());
      this.fillData();
      if (yLabels.length === 45) {
        clearInterval(updatePrice);
      }
    }, 1000);
  },
  methods: {
    fillData() {
      this.dataCollection = {
        // Data for the y-axis of the chart
        labels: xLabels1,
        datasets: [
          {
            fill: false,
            label: "Stock price",
            backgroundColor: "rgba(0,128,0,1.0)",
            borderColor: "rgba(0,128,0,0.4)",
            borderWidth: 1,
            //  backgroundColor: "#f87979",
            // Data for the x-axis of the chart
            data: yLabels,
          },
        ],
      };
      //
    },
    getRandomInt() {
      // JS function to generate numbers to be used for the chart
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5;
    },
  },
};
</script>