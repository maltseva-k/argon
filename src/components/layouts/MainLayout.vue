<template>
  <div class="bg-no-repeat bg-[url('/src/images/BackgroundMain.png')]">
    <div class="flex pt-5">
      <side-bar
        class="ml-5"/>
      <div class="w-full pl-5 pr-5">
        <nav-bar
        class="ml-3 mb-5 font-medium"
        />
        <main>
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
