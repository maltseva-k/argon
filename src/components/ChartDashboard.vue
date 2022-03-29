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
    sales: {
      type: Array,
      default: null
    },
    orders: {
      type: Array,
      default: null
    }
  },
  mounted () {
    const ctx = this.$refs.canvas.getContext('2d')
    console.log(this.sales)
    // eslint-disable-next-line no-new
    new Chart(ctx, {
      type: 'line',
      data: {
        datasets: [
          {
            label: 'Sales 2021',
            data: this.sales,
            borderColor: 'rgb(51, 132, 207)'
          },
          {
            label: 'Sales 2022',
            data: this.orders,
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
data: {
datasets: [{
data: [{id: 'Sales', nested: {value: 1500}}, {id: 'Purchases', nested: {value: 500}}]
}]
},
options: {
parsing: {
xAxisKey: 'id',
yAxisKey: 'nested.value'
}
}
