<template>
  <div class="bg-no-repeat bg-[url('/src/images/BackgroundMain.png')] bg-slate-50 max-h-screen">
    <div class="flex pt-5"
    style="height: 100%">
      <side-bar
        class="ml-5"/>
      <div class="w-full pl-5 pr-5">
        <nav-bar
        class="ml-3 mb-5 font-medium"
        />
        <main>
          <main-loader v-if="isLoading"/>
          <router-view
          class="h-full"
          />
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import SideBar from '@/components/SideBar'
import MainLoader from '@/components/MainLoader'

export default {
  name: 'MainLayout',
  components: {
    MainLoader,
    NavBar,
    SideBar
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
