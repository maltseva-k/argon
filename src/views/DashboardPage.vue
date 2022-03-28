<template>
  <main-loader v-if="loader" />
    <div v-else>
      <div class="flex justify-around g-x-2 mb-5">
        <money-card
          v-for="item in dashboardItems"
          :key="item.card"
          :increment="item.increment"
          :indicator="item.indicator"
          class="w-1/4 shadow-lg shadow-grey-300/50 hover:border-blue-500 hover:shadow-xl"
        >
          <template v-slot:icon>
            <img :src="item.icon" class="w-3/4 h-3/4" alt="Money card">
          </template>
        </money-card>

        <users-card
          :increment="usersCard.increment"
          :indicator="usersCard.indicator"
          class="w-1/4 shadow-lg shadow-grey-300/50 hover:border-blue-500 hover:shadow-xl"
        />
        <client-card
          :increment="clientCard.increment"
          :indicator="clientCard.indicator"
          class="w-1/4 shadow-lg shadow-grey-300/50 hover:border-blue-500 hover:shadow-xl"
        />
        <sale-card
          :increment="salesCard.increment"
          :indicator="salesCard.indicator"
          class="w-1/4 shadow-lg shadow-grey-300/50 hover:border-blue-500 hover:shadow-xl"
        />
      </div>
      <div class="w-full flex justify-between gap-x-8">
        <div class="basis-2/3 p-0">
          <img src="../images/SalesImageDashboard.png">
        </div>
        <div class="bg-white rounded-lg shadow-lg shadow-grey-300/50 pt-5 pb-5 basis-1/3 my-2">
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
import MoneyCard from '@/components/MoneyCard'
import ClientCard from '@/components/ClientCard'
import SaleCard from '@/components/SaleCard'
import UsersCard from '@/components/UsersCard'
import MainLoader from '@/components/MainLoader'
import TotalSaleScale from '@/components/TotalSaleScale'

export default {
  name: 'DashboardPage',
  data () {
    return {
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
    TotalSaleScale,
    MainLoader,
    UsersCard,
    SaleCard,
    ClientCard,
    MoneyCard,
    TableVisitorsDashboard,
    SocialTable
  },
  computed: {
    dashboardItems () {
      return [
        {
          ...this.moneyCard,
          icon: require('../images/MoneyCard.svg')
        }
      ]
    }
  },
  async mounted () {
    this.orders = await this.$store.dispatch('fetchOrders')
    this.visitors = await this.$store.dispatch('fetchVisitors')
    this.statistic = await this.$store.dispatch('fetchStatistic')
    this.moneyCard = this.statistic[0]
    this.usersCard = this.statistic[1]
    this.clientCard = this.statistic[2]
    this.salesCard = this.statistic[3]
    this.loader = false
  }
}
</script>
