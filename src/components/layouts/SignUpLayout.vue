<template>
  <div class="relative w-full">
    <div class="h-96 bg-no-repeat bg-cover bg-center lg:rounded-3xl bg-top mt-5 mr-0 ml-0 lg:mr-5 lg:ml-5 bg-[url('/src/images/BackgroundCitySmall.png')]">
    </div>
    <main class="w-full absolute top-5">
        <main-loader v-if="isLoading" />
        <router-view />
    </main>
    <div class="bottom-0 h-60 p-20 mb-10 bg-transparent">
  </div>
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
