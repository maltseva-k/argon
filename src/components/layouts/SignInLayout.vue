<template>
  <div class="bg-no-repeat rounded-b-3xl bg-top mt-5 bg-[url('/src/images/BackgroundCitySmall.png')]">
    <nav-bar />
    <main>
      <main-loader v-if="isLoading"/>
      <router-view />
    </main>
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
