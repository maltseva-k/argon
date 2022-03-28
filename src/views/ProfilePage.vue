<template>
  <main-loader v-if="loader" />
  <div v-else>
    <div class="flex justify-around">
      <setting-card-for-profile
        class="w-1/3 min-h-min bg-white rounded-lg shadow-lg shadow-grey-300/50 p-5 border border-gray-200 shadow-md"/>
      <create-a-new-card
        @createProject="createProject"
        class="w-1/3 min-h-min bg-white rounded-lg shadow-lg shadow-grey-300/50 p-5 border border-gray-200 shadow-md" />
    </div>
    <div class="container bg-white border rounded-lg shadow-lg shadow-grey-300/50 p-5 mt-10 ml-5">
      <h2 class="mb-5 text-xl uppercase font-bold font-sans tracking-wide text-slate-900">My projects</h2>
        <ul
          :key="updateCount"
          class="flex justify-around w-full h-full">
            <li
              v-for="project in projectsOnThisPage"
              :key="project.id"
              class="w-1/3 min-w-min max-w-sm bg-white rounded-lg border hover:border-gray-200 hover:shadow-md dark:bg-gray-800 dark:border-gray-700"
              >
              <users-project-card
                @deleteProject="deleteProject"
                :title="project.title"
                :budget="project.budget"
                :status="project.status"
                :completion="project.completion"
                :id="project.id"
                 />
            </li>
        </ul>
      <paginate-buttons
        v-if="showPaginate"
        :key="updateCount"
        @showPrevPage="showPrevPage"
        @showNextPage="showNextPage"
        :isPrevDisabled="isPrevDisabled"
        :isNextDisabled="isNextDisabled"
      />
    </div>
  </div>
</template>
<script>
import CreateANewCard from '@/components/CreateANewCard'
import SettingCardForProfile from '@/components/SettingCardForProfile'
import UsersProjectCard from '@/components/UsersProjectCard'
import MainLoader from '@/components/MainLoader'
import PaginateButtons from '@/components/PaginateButtons'

export default {
  components: { PaginateButtons, MainLoader, UsersProjectCard, SettingCardForProfile, CreateANewCard },
  data () {
    return {
      usersProjects: [],
      projectsOnThisPage: [],
      showPaginate: false,
      updateCount: 0,
      thisPage: 1,
      startEl: 0,
      finishEl: 3,
      amountOfProjectsOnPage: 3,
      isPrevDisabled: false,
      isNextDisabled: false,
      loader: true
    }
  },
  async mounted () {
    this.usersProjects = (await this.$store.dispatch('fetchThisUsersProjects')) || []
    if (this.usersProjects.length <= 3) {
      this.projectsOnThisPage = this.usersProjects
    }
    if (this.usersProjects.length > 3) {
      this.projectsOnThisPage = this.usersProjects.slice(0, 3)
      this.showPaginate = true
      this.isPrevDisabled = true
    }
    this.isPrevDisabled = true
    this.loader = false
  },
  methods: {
    deleteProject (id) {
      this.updateCount += 1
      this.usersProjects = this.usersProjects.filter(p => p.id !== id)
    },
    async createProject () {
      this.usersProjects = await this.$store.dispatch('fetchThisUsersProjects')
    },
    showPrevPage () {
      this.thisPage -= 1
      this.isNextDisabled = false
      if (this.thisPage === 1) {
        this.isPrevDisabled = true
      }
      this.startEl -= this.amountOfProjectsOnPage
      this.finishEl -= this.amountOfProjectsOnPage
      this.projectsOnThisPage = this.usersProjects.slice(this.startEl, this.finishEl)
      this.updateCount += 1
    },
    showNextPage () {
      this.thisPage += 1
      this.isPrevDisabled = false
      this.startEl += this.amountOfProjectsOnPage
      this.finishEl += this.amountOfProjectsOnPage
      if (this.finishEl >= this.usersProjects.length - 1) {
        this.isNextDisabled = true
      }
      this.projectsOnThisPage = this.usersProjects.slice(this.startEl, this.finishEl)
      this.updateCount += 1
      // slice([begin[, end]])
    }
  }
}
</script>
