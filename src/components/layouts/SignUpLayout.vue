<template>
  <div class="max-h-screen">
    <div class="-z-10 h-96 bg-no-repeat bg-cover bg-center rounded-3xl bg-top mt-5 mr-5 ml-5 bg-[url('/src/images/BackgroundCitySmall.png')]">
    </div>
    <div class="absolute top-5 w-full pl-5 pr-5">
      <main>
        <main-loader v-if="isLoading" />
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
