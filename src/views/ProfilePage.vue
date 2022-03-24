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
              v-for="project in usersProjects"
              :key="project.id"
              class="w-1/3 max-w-sm bg-white rounded-lg border hover:border-gray-200 hover:shadow-md dark:bg-gray-800 dark:border-gray-700"
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
    </div>
    <div class="fixed bottom-0 left-0 w-full">
      <footer-of-page
      />
    </div>
  </div>
</template>
<script>
import CreateANewCard from '@/components/CreateANewCard'
import SettingCardForProfile from '@/components/SettingCardForProfile'
import UsersProjectCard from '@/components/UsersProjectCard'
import MainLoader from '@/components/MainLoader'
import FooterOfPage from '@/components/FooterOfPage'

export default {
  components: { FooterOfPage, MainLoader, UsersProjectCard, SettingCardForProfile, CreateANewCard },
  data () {
    return {
      usersProjects: [],
      updateCount: 0,
      loader: true
    }
  },
  async mounted () {
    this.usersProjects = (await this.$store.dispatch('fetchThisUsersProjects')) || []
    this.loader = false
  },
  methods: {
    deleteProject (id) {
      this.updateCount += 1
      this.usersProjects = this.usersProjects.filter(p => p.id !== id)
    },
    async createProject () {
      this.usersProjects = await this.$store.dispatch('fetchThisUsersProjects')
    }
  }
}
</script>
