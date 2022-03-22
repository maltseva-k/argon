<template>
  <div>
    <div class="flex justify-start ml-10">
      <setting-card-for-profile
        class="w-1/2 min-h-min"/>
    </div>
    <div class="container">
      <h2>My projects</h2>
      <div class="flex justify-around">
        <ul class="flex justify-around">
            <li
              v-for="project in usersProjects"
              :key="project.id"
              class="min-w-min min-h-min"
              >
              <users-project-card
                :title="project.title"
                :budget="project.budget"
                :status="project.status"
                :completion="project.completion"
                 />
            </li>
        </ul>
        <create-a-new-card class="min-w-min min-h-min items-center" />
      </div>
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
      usersProjects: []
    }
  },
  async mounted () {
    this.usersProjects = (await this.$store.dispatch('fetchThisUsersProjects')) || []
  }
}
</script>
