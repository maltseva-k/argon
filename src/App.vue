<template>
  <component :is="layout" class="my_component">
    <router-view />
  </component>
  <footer-of-page class="my_footer" />
</template>

<script>
import { defineAsyncComponent } from 'vue'
import FooterOfPage from '@/components/FooterOfPage'

const SignInLayout = defineAsyncComponent(() => import('@/components/layouts/SignInLayout'))
const SignUpLayout = defineAsyncComponent(() => import('@/components/layouts/SignUpLayout'))
const MainLayout = defineAsyncComponent(() => import('@/components/layouts/MainLayout'))

export default {
  components: {
    FooterOfPage,
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
