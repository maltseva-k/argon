<template>
    <div>
      <div class="flex justify-between">
        <card-for-dashboard />
        <card-for-dashboard />
        <card-for-dashboard />
        <card-for-dashboard />
      </div>
      <div class="container flex justify-between">
        <div>
          <p>график</p>
        </div>
        <div>
          <p>диаграма</p>
        </div>
      </div>
      <div class="flex justify-between">
        <div class="basis-1/2">

        </div>
        <div class="basis-1/2">

        </div>
      </div>
    </div>
</template>

<script>

import CardForDashboard from '@/components/CardForDashboard'

export default {
  name: 'DashboardPage',
  components: {
    CardForDashboard
  }
}
</script>
