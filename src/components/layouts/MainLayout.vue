<template>
  <div class="bg-no-repeat bg-[url('/src/images/BackgroundMain.png')]">

    <div class="flex">
      <side-bar />
      <div>
        <nav-bar />
        <main class="w-full">
          <main-loader v-if="isLoading"/>
          <router-view />
        </main>
      </div>
    </div>
    <footer-of-page />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import SideBar from '@/components/SideBar'
import FooterOfPage from '@/components/FooterOfPage'
import MainLoader from '@/components/MainLoader'

export default {
  name: 'MainLayout',
  components: {
    MainLoader,
    NavBar,
    SideBar,
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
