<template>
  <div>
    <nav-bar />
    <main>
      <main-loader v-if="isLoading"/>
      <router-view />
    </main>
    <footer-of-page />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import FooterOfPage from '@/components/FooterOfPage'
import MainLoader from '@/components/MainLoader'

export default {
  components: {
    MainLoader,
    FooterOfPage,
    NavBar
  },
  data () {
    return {
      isLoading: true
    }
  },
  mounted () {
    this.isLoading = false
  }
}
</script>
