<template>
  <div class="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 py-5 px-10">
      <h2 class="mb-5 text-xl uppercase font-bold font-sans tracking-wide text-slate-900">Create a new project</h2>
      <form @submit.prevent="createProject" class="w-full">
        <label for="title" class="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300">Title</label>
        <input
          v-model="title"
          type="text" name="title" id="title"
          class="rounded-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="First project" required="">
        <label for="budget" class="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300">Budget</label>
        <input
          v-model="budget"
          type="text" name="budget" id="budget" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="10000" required="">
        <label for="status" class="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300">Status</label>
        <select
          v-model="status"
          required
          id="status"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
        >
          <option disabled>select status</option>
          <option value="working" selected>working</option>
          <option value="canceled">canceled</option>
          <option value="done">done</option>
        </select>
        <label for="completion" class="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300">Completion</label>
        <input
          v-model="completion"
          type="text" name="completion" id="completion" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="10%" required="">
        <div class="flex justify-end mt-2">
          <button type="submit" class="mt-2 ml-auto inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Add project
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
          </button>
        </div>
      </form>
    </div>
    <create-project-modal
    />

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
      this.$emit('createProject')
    }
  }
}
</script>
