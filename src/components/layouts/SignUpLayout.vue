<template>
  <div class="h-screen">
    <div class="h-96 bg-no-repeat bg-cover bg-center rounded-3xl bg-top mt-5 mr-5 ml-5 bg-[url('/src/images/BackgroundCitySmall.png')] ">
    </div>
    <main class="absolute z-10 w-full top-5">
        <main-loader v-if="isLoading" />
        <router-view />
      </main>
  </div>
</template>

<script>
import MainLoader from '@/components/MainLoader'

export default {
  components: {
    MainLoader
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
