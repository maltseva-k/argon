<template>
    <div>
      <div class="flex justify-around g-x-2">
        <money-card
          :increment="moneyCard.increment"
          :indicator="moneyCard.indicator"
          class="w-1/4"
        />
        <users-card
          :increment="usersCard.increment"
          :indicator="usersCard.indicator"
          class="w-1/4"
        />
        <client-card
          :increment="clientCard.increment"
          :indicator="clientCard.indicator"
          class="w-1/4"
        />
        <sale-card
          :increment="salesCard.increment"
          :indicator="salesCard.indicator"
          class="w-1/4"
        />
      </div>
      <div class="container flex justify-between">
        <div class="basis-2/3">
          <img src="../images/SalesImageDashboard.png">
        </div>
        <div class="basis-1/3">
          <sales-for-month
          :orders="orders"
          />
        </div>
      </div>
      <div class="flex justify-between gap-x-8">
        <div class="basis-2/3">
          <table-visitors-dashboard
          :visitors="visitors"
          />
        </div>
        <div class="basis-1/3">
          <social-table />
        </div>
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
      statistic: []
    }
  },
  components: {
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
    console.log(this.statistic)
    this.usersCard = this.statistic[1]
    this.clientCard = this.statistic[2]
    this.salesCard = this.statistic[3]
  }
}
</script>
