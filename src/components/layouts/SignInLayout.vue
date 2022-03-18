<template>
  <div class="h-screen">
    <div class="h-full bg-no-repeat bg-top bg-[url('/src/images/BackgroundCity.png')]">
      <nav-bar />
      <main>
        <main-loader v-if="isLoading"/>
        <router-view />
      </main>
    </div>
    <div>
      <footer-of-page />
    </div>
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
