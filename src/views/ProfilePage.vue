<template>
  <main-loader v-if="loader" />
  <div v-else>
    <div class="flex justify-around gap-x-5">
      <setting-card-for-profile
        class="w-1/3"
      />
      <create-a-new-card
        class="w-1/3"
        @createProject="createProject"
      />
    </div>
    <div class="container bg-white border rounded-lg shadow-lg shadow-grey-300/50 p-5 mt-10">
      <h2 class="mb-5 text-xl uppercase font-bold font-sans tracking-wide text-slate-900">My projects</h2>
        <ul
          :key="updateCount"
          class="flex justify-around w-full h-full">
            <li
              v-for="project in projectsOnThisPage"
              :key="project.id"
              class="w-1/3"
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
    /* this.usersProjects = (await this.$store.dispatch('fetchThisUsersProjects')) || []
    if (this.usersProjects.length <= 3) {
      this.projectsOnThisPage = this.usersProjects
    }
    if (this.usersProjects.length > 3) {
      this.projectsOnThisPage = this.usersProjects.slice(0, 3)
      this.showPaginate = true
      this.isPrevDisabled = true
    }
    this.isPrevDisabled = true */
    this.loader = false
  },
  methods: {
    async updateProjectsList () {
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
    },
    deleteProject (id) {
      this.projectsOnThisPage = this.projectsOnThisPage.filter(p => p.id !== id)
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
      // slice([begin[, end]])
    }
  }
}
</script>
