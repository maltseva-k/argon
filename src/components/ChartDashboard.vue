<template>
  <div>
    <canvas ref="canvas" class="w-full h-full p-5 pt-0"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js/auto'

export default {
  name: 'ChartDashboard',
  props: {
    lastYearSales: {
      type: Array,
      default: null
    },
    thisYearSales: {
      type: Array,
      default: null
    },
    thisYear: {
      type: String,
      default: null
    },
    lastYear: {
      type: String,
      default: null
    }
  },
  mounted () {
    const ctx = this.$refs.canvas.getContext('2d')
    // eslint-disable-next-line no-new
    new Chart(ctx, {
      type: 'line',
      data: {
        datasets: [
          {
            label: 'Sales' + this.lastYear,
            data: this.lastYearSales,
            borderColor: 'rgb(51, 132, 207)'
          },
          {
            label: 'Sales' + this.thisYear,
            data: this.thisYearSales,
            borderColor: 'rgb(20, 100, 112)'
          }
        ]
      },
      options: {
        parsing: {
          xAxisKey: 'month',
          yAxisKey: 'sales'
        }
      }
    })
  }
}
</script>
