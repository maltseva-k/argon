<template>
  <main-loader v-if="loader" />
  <div v-else>
    <div class="flex flex-col md:flex-row justify-around gap-5 w-full">
      <setting-card-for-profile
        class="w-full md:w-1/2 lg:w-1/3"
      />
      <create-a-new-card
        class="w-full md:w-1/2 lg:w-1/3"
        @createProject="createProject"
      />
    </div>
    <div class="container bg-white border rounded-lg shadow-lg shadow-grey-300/50 p-5 mt-10">
      <h2 class="mb-5 text-xl uppercase font-bold font-sans tracking-wide text-slate-900">My projects</h2>
        <ul
          :key="updateCount"
          class="flex flex-col md:flex-row gap-2 lg:gap-5 justify-around w-full">
            <li
              v-for="project in projectsOnThisPage"
              :key="project.id"
              class="w-full md:w-3/5 lg:w-1/3"
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
import UsersProjectCard from '@/components/UsersProjectCard'
import MainLoader from '@/components/MainLoader'
import PaginateButtons from '@/components/PaginateButtons'
import settingCardForProfile from '@/components/SettingCardForProfile'

export default {
  components: {
    PaginateButtons,
    MainLoader,
    UsersProjectCard,
    CreateANewCard,
    settingCardForProfile
  },
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
    await this.updateProjectsList()
    this.loader = false
  },
  methods: {
    async updateProjectsList () {
      this.usersProjects = (await this.$store.dispatch('fetchThisUsersProjects')) || []
      if (this.usersProjects.length <= 3) {
        this.projectsOnThisPage = this.usersProjects
        this.showPaginate = false
        this.thisPage = 1
      }
      if (this.usersProjects.length > 3) {
        this.projectsOnThisPage = this.usersProjects.slice(0, 3)
        this.showPaginate = true
        this.isPrevDisabled = true
        this.isNextDisabled = false
        this.resetPagination()
      }
    },
    resetPagination () {
      this.thisPage = 1
      this.startEl = 0
      this.finishEl = 3
    },
    deleteProject () {
      this.updateProjectsList()
      this.updateCount -= 2
    },
    async createProject () {
      this.updateProjectsList()
      this.updateCount += 2
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
    }
  }
}
</script>
