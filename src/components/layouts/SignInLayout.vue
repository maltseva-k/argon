<template>
    <div class="pt-40 pb-40 bg-no-repeat bg-top bg-[url('/src/images/BackgroundCity.png')]">
      <main >
        <main-loader v-if="isLoading"/>
        <router-view />
      </main>
      <div class="bg-white absolute bottom-0 left-0 w-full">
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
