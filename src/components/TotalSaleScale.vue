<template>
  <main-loader v-if="loading" />
  <div v-else class="p-5">
    <ul>
      <li v-for="order in orders" :key="order.id">
        <div class="flex justify-between mb-1 mt-1">
          <span class="text-base font-medium text-blue-700 dark:text-white">{{ order.month }}</span>
          <span class="text-sm font-medium text-blue-700 dark:text-white">{{ order.sales }}</span>
        </div>

        <div class="w-full h-4 bg-slate-300 rounded-full dark:bg-gray-700">
          <div
            class="h-4 bg-blue-500 rounded-full dark:bg-gray-300"
            :style="{width: (100 * (order.sales) / totalSale) + '%' }"
          >

          </div>
        </div>
      </li>
    </ul>

  </div>

</template>

<script>
import MainLoader from '@/components/MainLoader'

export default {
  components: { MainLoader },
  data () {
    return {
      loading: true,
      orders: [],
      totalSale: 0
    }
  },

  async mounted () {
    this.orders = await this.$store.dispatch('fetchOrders')
    for (let i = 0; i < this.orders.length; i++) {
      const salesInMonth = (this.orders[i]).sales
      if (salesInMonth > this.totalSale) {
        this.totalSale = salesInMonth
      }
    }
    this.loading = false
  }
}
</script>
