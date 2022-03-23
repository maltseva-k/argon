<template>
  <div class="h-screen">
    <div class="h-full bg-no-repeat bg-top bg-[url('/src/images/BackgroundCity.png')]">
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
import FooterOfPage from '@/components/FooterOfPage'
import MainLoader from '@/components/MainLoader'

export default {
  components: {
    MainLoader,
    FooterOfPage
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
