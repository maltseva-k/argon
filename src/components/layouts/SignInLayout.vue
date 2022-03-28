<template>
    <div class="pt-40 pb-40 bg-no-repeat bg-top bg-[url('/src/images/BackgroundCity.png')]">
      <main >
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
