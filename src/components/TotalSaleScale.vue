<template>
  <main-loader v-if="loading" />
  <div v-else class="p-5">
    <ul>
      <li v-for="order in orders" :key="order.id">
        <div class="flex justify-between mb-1 mt-1">
          <span class="text-base font-medium text-blue-700 dark:text-white">{{ order.month }}</span>
          <span class="text-sm font-medium text-blue-700 dark:text-white">{{ order.sales }}</span>
        </div>
        <scale-without-span
          :completion="(100 * (order.sales) / totalSale) + '%'"
          class="h-6"
        />
      </li>
    </ul>

  </div>

</template>

<script>
import MainLoader from '@/components/MainLoader'
import ScaleWithoutSpan from '@/components/ScaleWithoutSpan'

export default {
  components: { ScaleWithoutSpan, MainLoader },
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
