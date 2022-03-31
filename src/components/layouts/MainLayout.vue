<template>
  <div class="bg-no-repeat bg-[url('/src/images/BackgroundMain.png')] bg-slate-50 w-full">
    <div class="flex flex-col md:flex-row pt-5"
    >
      <side-bar
      />
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
