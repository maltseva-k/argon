<template>
    <div>
      <button type="submit" @click="logout">Выйти из системы</button>
      <div class="flex justify-around g-x-2">
        <card-for-dashboard />
        <card-for-dashboard />
        <card-for-dashboard />
        <card-for-dashboard />
      </div>
      <div class="container flex justify-between">
        <div class="basis-2/3">
          <p>график</p>
        </div>
        <div class="basis-1/3">
          <p>диаграма</p>
        </div>
      </div>
      <div class="flex justify-between gap-x-8">
        <div class="basis-2/3">
          <table-with-hover-state />
        </div>
        <div class="basis-1/3">
          <table-with-scale />
        </div>
      </div>
    </div>
</template>

<script>

import CardForDashboard from '@/components/CardForDashboard'
import TableWithHoverState from '@/components/TableWithHoverState'
import TableWithScale from '@/components/TableWithScale'

export default {
  name: 'DashboardPage',
  components: {
    CardForDashboard,
    TableWithHoverState,
    TableWithScale
  },
  methods: {
    async logout () {
      await this.$store.dispatch('logout')
      console.log('вы вышли из системы!')
      await this.$router.push('/login')
    }
  }
}
</script>
