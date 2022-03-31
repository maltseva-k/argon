<template>
    <div class="w-full pt-20 pb-20 bg-no-repeat bg-top bg-[url('/src/images/BackgroundCity.png')]">
      <main class="w-full">
        <main-loader v-if="isLoading"/>
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
