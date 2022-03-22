<template>
  <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
    <button
      @click="openCreateProjectModal"
      class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" data-modal-toggle="defaultModal">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
    </button>
    <div
      v-if="isModalOpen"
      class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <form @submit.prevent="createProject">
      <label for="title">Title</label>
      <input
        v-model="title"
        type="text" name="title" id="title" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="First project" required="">
      <label for="budget">Budget</label>
      <input
        v-model="budget"
        type="text" name="budget" id="budget" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="10000" required="">
      <label for="status">Status</label>
      <input
        v-model="status"
        type="text" name="status" id="status" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="In work" required="">
      <label for="completion">Completion</label>
      <input
        v-model="completion"
        type="text" name="completion" id="completion" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="10%" required="">
      <button type="submit">Add project</button>
      </form>
    </div>
    <create-project-modal
    />
  </div>
</template>

<script>
import CreateProjectModal from '@/components/CreateProjectModal'
export default {
  components: { CreateProjectModal },
  data () {
    return {
      isModalOpen: false,
      title: '',
      budget: '',
      status: '',
      completion: ''
    }
  },
  methods: {
    openCreateProjectModal () {
      this.isModalOpen = !this.isModalOpen
    },
    async createProject () {
      const projectForm = {
        title: this.title,
        budget: this.budget,
        status: this.status,
        completion: this.completion
      }
      await this.$store.dispatch('createProject', projectForm)
      this.title = ''
      this.budget = ''
      this.status = ''
      this.completion = ''
      console.log('Project create!')
    }
  }
}
</script>
