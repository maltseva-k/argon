<template>
  <div class="h-full">
    <main-loader v-if="loader" />
    <div v-else>
      <div class="bg-white rounded-lg shadow-lg shadow-grey-300/50 pt-5 pb-5 mt-5 basis-2/3">

        <h2 class="mb-1 pl-5 text-xl uppercase font-bold font-sans tracking-wide text-slate-900">Authors Table</h2>
        <p v-if="!users.length" class="pl-5 text-sm text-slate-300 mb-5 ">no authors to display</p>
        <div v-else>
          <p class="pl-5 text-sm text-slate-300 mb-5 ">total {{ users.length }} authors</p>
          <table-with-hover-state
            :users="usersOnThisPage"
          />
        </div>
        <paginate-buttons
          v-if="showUsersPaginate"
          :key="updateUserCount"
          @showPrevPage="showPrevUsersPage"
          @showNextPage="showNextUsersPage"
        />
      </div>

      <div class="bg-white rounded-lg shadow-lg shadow-grey-300/50 pt-5 pb-5 mt-5 mb-5 basis-2/3">
        <h2 class="mb-1 pl-5 text-xl uppercase font-bold font-sans tracking-wide text-slate-900">Projects</h2>
        <p v-if="!projects.length" class="pl-5 text-sm text-slate-300 mb-5 ">no projects to display</p>
        <div v-else>
          <p class="pl-5 text-sm text-slate-300 mb-5 ">total {{ projects.length }} projects</p>
          <table-with-scale
            :projects="projectsOnThisPage"
          />
          <paginate-buttons
            v-if="showProjectPaginate"
            :key="updateProjectCount"
            @showPrevPage="showPrevProjectsPage"
            @showNextPage="showNextProjectsPage"
            :isPrevDisabled="isPrevProjectsDisabled"
            :isNextDisabled="isNextProjectsDisabled"
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
import PaginateButtons from '@/components/PaginateButtons'

export default {
  components: {
    PaginateButtons,
    FooterOfPage,
    MainLoader,
    TableWithScale,
    TableWithHoverState
  },
  data () {
    return {
      projects: [],
      users: [],
      loader: true,
      showUsersPaginate: false,
      showProjectPaginate: false,
      updateUserCount: 0,
      updateProjectCount: 0,
      projectsOnThisPage: [],
      amountOfProjectsOnPage: 3,
      thisProjectPage: 1,
      startProjectEl: 0,
      finishProjectEl: 3,
      usersOnThisPage: [],
      amountOfUsersOnPage: 3,
      thisUsersPage: 1,
      startUsersEl: 0,
      finishUsersEl: 3
    }
  },
  async mounted () {
    this.projects = await this.$store.dispatch('fetchProjects') || []
    if (this.projects.length > 1) {
      this.showProjectPaginate = true
      this.projectsOnThisPage = this.projects.slice(0, 3)
    }
    this.users = await this.$store.dispatch('fetchAllUsers') || []
    if (this.users.length > 1) {
      this.showUsersPaginate = true
      this.usersOnThisPage = this.users.slice(0, 3)
    }
    this.loader = false
    console.log(this.users)
  },
  methods: {
    showPrevProjectsPage () {
      this.thisProjectPage -= 1
      this.startProjectEl -= this.amountOfProjectsOnPage
      this.finishProjectEl -= this.amountOfProjectsOnPage
      /*       if (this.startEl < 0) {
        this.isPrevDisabled = true
        this.startEl = 0
        this.finishEl = this.amountOfProjectsOnPage
      } else {
        this.isPrevDisabled = false
      } */
      this.projectsOnThisPage = this.projects.slice(this.startProjectEl, this.finishProjectEl)
      this.updateProjectCount -= 1
    },
    showNextProjectsPage () {
      this.thisProjectPage += 1
      this.startProjectEl += this.amountOfProjectsOnPage
      this.finishProjectEl += this.amountOfProjectsOnPage
      /*       if (this.finishEl > this.usersProjects.length) {
        this.isNextDisabled = true
      } else {
        this.isNextDisabled = false
      } */
      this.projectsOnThisPage = this.projects.slice(this.startProjectEl, this.finishProjectEl)
      this.updateProjectCount += 1
      // slice([begin[, end]])
    },
    showPrevUsersPage () {
      this.thisUsersPage -= 1
      this.startUsersEl -= this.amountOfProjectsOnPage
      this.finishUsersEl -= this.amountOfProjectsOnPage
      /*       if (this.startEl < 0) {
        this.isPrevDisabled = true
        this.startEl = 0
        this.finishEl = this.amountOfProjectsOnPage
      } else {
        this.isPrevDisabled = false
      } */
      this.usersOnThisPage = this.users.slice(this.startUsersEl, this.finishUsersEl)
      this.updateUserCount -= 1
    },
    showNextUsersPage () {
      this.thisUsersPage += 1
      this.startUsersEl += this.amountOfUsersOnPage
      this.finishUsersEl += this.amountOfUsersOnPage
      /*       if (this.finishEl > this.usersProjects.length) {
        this.isNextDisabled = true
      } else {
        this.isNextDisabled = false
      } */
      this.usersOnThisPage = this.users.slice(this.startUsersEl, this.finishUsersEl)
      this.updateUserCount += 1
      // slice([begin[, end]])
    }
  }
}
</script>
