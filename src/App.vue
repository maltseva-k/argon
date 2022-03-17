<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script>
import EmptyLayout from '@/components/layouts/EmptyLayout'
import MainLayout from '@/components/layouts/MainLayout'

export default {
  components: {
    EmptyLayout,
    MainLayout
  },
  computed: {
    layout () {
      return (this.$route.meta.layout || 'Empty') + '-layout'
    }
  }
}
</script>
