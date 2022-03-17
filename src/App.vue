<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script>
import SignInLayout from '@/components/layouts/SignInLayout'
import SignUpLayout from '@/components/layouts/SignUpLayout'
import MainLayout from '@/components/layouts/MainLayout'

export default {
  components: {
    SignInLayout,
    SignUpLayout,
    MainLayout
  },
  computed: {
    layout () {
      return (this.$route.meta.layout || 'SignIn') + '-layout'
    }
  }
}
</script>
