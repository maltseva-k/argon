<template>
  <nav-bar />
  <div class="flex">
    <side-bar />
    <main>
      <main-loader v-if="isLoading"/>
      <router-view />
    </main>
  </div>
  <footer-of-page />
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
