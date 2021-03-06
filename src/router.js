import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import VueChartJS from "./views/VueChartJS.vue";
import VueChartKick from "./views/VueChartKick.vue"
import VueCharts from "./views/VueCharts.vue";

Vue.use(Router);


export default new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "Home",
            component: Home
        },
        {
            path: "/charts",
            name: "VueCharts",
            component: VueCharts
        },
        {
            path: "/chartjs",
            name: "VueChartJS",
            component: VueChartJS
        },
        {
            path: "/chartkick",
            name: "VueChartKick",
            component: VueChartKick
        }
    ]
});