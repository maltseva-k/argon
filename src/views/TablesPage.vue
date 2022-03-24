<template>
  <div class="h-full">
    <main-loader v-if="loader" />
    <div v-else>
      <div class="bg-white rounded-lg shadow-lg shadow-grey-300/50 pt-5 pb-5 mt-5 basis-2/3">

        <h2 class="mb-1 pl-5 text-xl uppercase font-bold font-sans tracking-wide text-slate-900">Authors Table</h2>
        <p v-if="!users.length" class="pl-5 text-sm text-slate-300 mb-5 ">no authors to display</p>
        <div v-else>
          <p class="pl-5 text-sm text-slate-300 mb-5 ">total {{ projects.length }} projects</p>
          <table-with-hover-state
            :users="users"
          />
        </div>
      </div>

      <div class="bg-white rounded-lg shadow-lg shadow-grey-300/50 pt-5 pb-5 mt-5 mb-5 basis-2/3">
        <h2 class="mb-1 pl-5 text-xl uppercase font-bold font-sans tracking-wide text-slate-900">Projects</h2>
        <p v-if="!projects.length" class="pl-5 text-sm text-slate-300 mb-5 ">no projects to display</p>
        <div v-else>
          <p class="pl-5 text-sm text-slate-300 mb-5 ">total {{ projects.length }} projects</p>
          <table-with-scale
            :projects="projects"
          />
        </div>
      </div>
    </div>
    <div class="fixed bottom-0 left-0 w-full">
      <footer-of-page
      />
    </div>
  </div>

</template>
<script>
import TableWithHoverState from '@/components/TableWithHoverState'
import TableWithScale from '@/components/TableWithScale'
import MainLoader from '@/components/MainLoader'
import FooterOfPage from '@/components/FooterOfPage'

export default {
  components: {
    FooterOfPage,
    MainLoader,
    TableWithScale,
    TableWithHoverState
  },
  data () {
    return {
      projects: [],
      users: [],
      loader: true
    }
  },
  async mounted () {
    this.projects = await this.$store.dispatch('fetchProjects') || []
    this.users = await this.$store.dispatch('fetchAllUsers') || []
    this.loader = false
    console.log(this.users)
  }
}
</script>
