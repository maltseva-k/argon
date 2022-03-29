<template>
  <div>
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js/auto'

export default {
  name: 'ChartDashboard',
  props: {
    chartData: {
      type: Object,
      default: null
    },
    options: {
      type: Object,
      default: null
    }
  },
  mounted () {
    const ctx = this.$refs.canvas.getContext('2d')
    // eslint-disable-next-line no-new
    new Chart(ctx, {
      type: 'line',
      data: this.chartData,
      options: this.options
    })
  }
}
</script>
