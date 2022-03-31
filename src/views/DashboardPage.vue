<template>
  <main-loader v-if="loader" />
    <div v-else>
      <div class="flex flex-col gap-2 lg:flex-row md:flex-col sm:flex-col justify-around lg:g-x-5 md:gap-4 lg:gap-5 mb-5">
        <card-for-dashboard
          v-for="item in statistic"
          :key="item.card"
          :title="item.title"
          :increment="item.increment"
          :indicator="item.indicator"
          :card="item.card"
          class="w-1/2 lg:w-1/4"
          />
      </div>
      <div class="w-full flex justify-between gap-x-8">
        <div class="basis-2/3 p-0 bg-white text-scale-900 items-center rounded-lg shadow-lg shadow-grey-300/50 pt-5">
          <h2 class="mb-5 pl-5 text-xl uppercase font-bold font-sans tracking-wide text-slate-900">Sales overview</h2>
          <chart-dashboard :thisYear="thisYear" :lastYear="lastYear" :thisYearSales="thisYearsSales" :lastYearSales="lastYearsSales" />
        </div>
        <div class="bg-white rounded-lg shadow-lg shadow-grey-300/50 pt-5 pb-5 basis-1/3">
          <h3 class="text-lg pl-5 font-bold font-sans tracking-wide text-slate-300">PERFORMANCE</h3>
          <h2 class="mb-5 pl-5 text-xl uppercase font-bold font-sans tracking-wide text-slate-900">Total orders</h2>
          <total-sale-scale />
        </div>
      </div>
      <div class="flex justify-between gap-x-8">
        <div class="bg-white rounded-lg shadow-lg shadow-grey-300/50 pt-5 pb-5 mt-5 basis-2/3">
          <h2 class="mb-5 pl-5 text-xl uppercase font-bold font-sans tracking-wide text-slate-900">Page visits</h2>
          <table-visitors-dashboard
          :visitors="visitors"
          />
        </div>
        <div class="bg-white rounded-lg shadow-lg shadow-grey-300/50 pt-5 pb-5 mt-5 basis-1/3">
          <h2 class="mb-5 pl-5 text-xl uppercase font-bold font-sans tracking-wide text-slate-900">Social traffic</h2>
          <social-table />
        </div>
      </div>
    </div>
</template>

<script>

import SocialTable from '@/components/SocialTable'
import TableVisitorsDashboard from '@/components/TableVisitorsDashboard'
import MainLoader from '@/components/MainLoader'
import TotalSaleScale from '@/components/TotalSaleScale'
import CardForDashboard from '@/components/CardForDashboard'
import { defineAsyncComponent } from 'vue'
const ChartDashboard = defineAsyncComponent(() => import('@/components/ChartDashboard'))

export default {
  name: 'DashboardPage',
  data () {
    return {
      thisYear: 2022,
      lastYear: 2021,
      thisYearsSales: [],
      lastYearsSales: [],
      orders: [],
      visitors: [],
      moneyCard: {},
      usersCard: {},
      clientCard: {},
      salesCard: {},
      statistic: [],
      loader: true
    }
  },
  components: {
    CardForDashboard,
    TotalSaleScale,
    MainLoader,
    TableVisitorsDashboard,
    SocialTable,
    ChartDashboard
  },
  async mounted () {
    this.orders = await this.$store.dispatch('fetchOrders')
    this.visitors = await this.$store.dispatch('fetchVisitors')
    this.statistic = await this.$store.dispatch('fetchStatistic')
    this.lastYearsSales = await this.$store.dispatch('fetchSales', this.lastYear)
    this.thisYearsSales = await this.$store.dispatch('fetchSales', this.thisYear)

    this.loader = false
  }
}
</script>
