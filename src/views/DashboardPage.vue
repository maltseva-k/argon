<template>
  <main-loader v-if="loader" />
    <div v-else>
      <div class="flex justify-around g-x-2 mb-5">
        <money-card
          :increment="moneyCard.increment"
          :indicator="moneyCard.indicator"
          class="w-1/4 shadow-lg shadow-grey-300/50 hover:border-blue-500 hover:shadow-xl"
        />
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
      <div class="container flex justify-between">
        <div class="basis-2/3">
          <img src="../images/SalesImageDashboard.png">
        </div>
        <div class="bg-white rounded-lg shadow-lg shadow-grey-300/50 pt-5 pb-5 mt-3 basis-1/3">
          <h3 class="text-lg pl-5 font-bold font-sans tracking-wide text-slate-300">PERFORMANCE</h3>
          <h2 class="mb-5 pl-5 text-xl uppercase font-bold font-sans tracking-wide text-slate-900">Total orders</h2>
          <sales-for-month
          :orders="orders"
          />
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
      <div class="static bottom-0 left-0 w-full">
        <footer-of-page
        />
      </div>
    </div>
</template>

<script>

import SocialTable from '@/components/SocialTable'
import SalesForMonth from '@/components/SalesForMonth'
import TableVisitorsDashboard from '@/components/TableVisitorsDashboard'
import MoneyCard from '@/components/MoneyCard'
import ClientCard from '@/components/ClientCard'
import SaleCard from '@/components/SaleCard'
import UsersCard from '@/components/UsersCard'
import MainLoader from '@/components/MainLoader'
import FooterOfPage from '@/components/FooterOfPage'

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
      loader: true,
      coffeeLabels: ['One', 'Two', 'Free'],
      coffeeDatasets: [
        {
          name: 'Ben',
          values: [1, 3, 2]
        },
        {
          name: 'Tim',
          values: [1, 3, 1]
        }
      ]
    }
  },
  components: {
    FooterOfPage,
    MainLoader,
    UsersCard,
    SaleCard,
    ClientCard,
    MoneyCard,
    TableVisitorsDashboard,
    SalesForMonth,
    SocialTable
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
