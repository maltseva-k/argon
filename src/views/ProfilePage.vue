<template>
  <div>
    <div class="flex justify-around">
      <setting-card-for-profile
        class="w-1/3 min-h-min bg-white rounded-lg shadow-lg shadow-grey-300/50 p-5 border border-gray-200 shadow-md"/>
      <create-a-new-card
        class="w-1/3 min-h-min bg-white rounded-lg shadow-lg shadow-grey-300/50 p-5 border border-gray-200 shadow-md" />
    </div>
    <div class="container bg-white rounded-lg shadow-lg shadow-grey-300/50 p-5 mt-5">
      <h2 class="mb-5 text-xl uppercase font-bold font-sans tracking-wide text-slate-300">My projects</h2>
        <ul
          :key="usersProjects.length"
          class="flex justify-around w-full h-full">
            <li
              v-for="project in usersProjects"
              :key="project.id"
              class="w-1/3 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
              >
              <users-project-card
                :title="project.title"
                :budget="project.budget"
                :status="project.status"
                :completion="project.completion"
                :id="project.id"
                 />
            </li>
        </ul>
    </div>
  </div>
</template>
<script>
import CreateANewCard from '@/components/CreateANewCard'
import SettingCardForProfile from '@/components/SettingCardForProfile'
import UsersProjectCard from '@/components/UsersProjectCard'

export default {
  components: { UsersProjectCard, SettingCardForProfile, CreateANewCard },
  data () {
    return {
      usersProjects: [],
      isModalOpen: false
    }
  },
  async mounted () {
    this.usersProjects = (await this.$store.dispatch('fetchThisUsersProjects')) || []
    console.log(this.usersProjects)
  },
  methods: {
    openModal () {
      this.isModalOpen = !this.isModalOpen
    }
  }
}
</script>
