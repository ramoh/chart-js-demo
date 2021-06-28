<script>
import { Line } from "vue-chartjs";
// Exporting this so that it can be used as a component
var xValues = [50, 60, 70, 80, 90, 100];
var yValues = [7, 8, 18, 9, 6, 2, 12, 23];
export default {
  name: "line-chart",
  extends: Line,
  data() {
    return {
      dataCollection: {
        labels: xValues,
        datasets: [
          {
            fill: false,
            lineTension: 0,
            // label: "Data One Test",
            backgroundColor: "rgba(0,0,255,1.0)",
            borderColor: "rgba(0,0,255,0.1)",
            borderWidth: 3,
            //    pointBorderColor: "#249EBF",
            // Data to be represented on y-axis
            data: yValues,
          },
        ],
      },
      // Chart.js options that controls the appearances of the chart
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
              gridLines: {
                display: true,
              },
            },
          ],
          xAxes: [
            {
              gridLines: {
                display: false,
              },
            },
          ],
        },
        legend: {
          display: false,
        },
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
  mounted() {
    // renderChart function renders the chart with the datacollection and options object.
    this.renderChart(this.dataCollection, this.options);
  },
};
</script>