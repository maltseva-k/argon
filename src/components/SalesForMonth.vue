<template>
  <div>
      <div class="w-full h-full bg-gray-50 flex justify-around">
        <div
          v-for="order in orders"
          :key="order.index"
          class="w-5 bg-orange-400"
          :style="{height: order.sales}"
        > {{ order.sales }}
          <div
            class="w-3 "
            :style="{height: order.sales}"
          >
            {{ order.month }}
          </div>
         </div>
      </div>
    </div>
</template>
<script>
export default {
  props: {
    orders: {
      type: Array
    }
  }
}

</script>

<!--
<div class="shadow-lg rounded-lg overflow-hidden">
<div class="py-3 px-5 bg-gray-50">Bar chart</div>
<canvas class="p-10" id="chartBar"></canvas>
</div>

&lt;!&ndash; Required chart.js &ndash;&gt;
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

&lt;!&ndash; Chart bar &ndash;&gt;
<script>
const labelsBarChart = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
];
const dataBarChart = {
  labels: labelsBarChart,
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "hsl(252, 82.9%, 67.8%)",
      borderColor: "hsl(252, 82.9%, 67.8%)",
      data: [0, 10, 5, 2, 20, 30, 45],
    },
  ],
};

const configBarChart = {
  type: "bar",
  data: dataBarChart,
  options: {},
};

var chartBar = new Chart(
  document.getElementById("chartBar"),
  configBarChart
);
</script>
-->
