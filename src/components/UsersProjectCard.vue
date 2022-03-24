<template>
  <div class="max-w-sm bg-white rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
    <div class="p-5">
      <div class="flex justify-between uppercase">
        <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> {{ title }}</h5>
        <p class="font-sans text-sm text-gray-700 dark:text-gray-400 bg-gray-200 p-2 rounded-lg">
        {{ status }}
      </p>
      </div>
      <p class="mb-3 text-gray-700 dark:text-gray-400 proportional-nums text-medium text-xl font-sans">
        {{ budget + '$'}}
      </p>
      <div>

        <div class="flex justify-between mb-1">
          <span class="text-sm font-medium text-blue-700 dark:text-white">{{ completion }}</span>
        </div>
        <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
          <div class="bg-blue-600 h-2.5 rounded-full" :style="{width: completion}"></div>
        </div>

      </div>
      <div class="flex justify-end mt-4">
        <button type="button" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Update
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
        </button>
        <button type="button" @click="deleteThisProject" class="ml-3 inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Delete
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    },
    budget: {
      type: String
    },
    status: {
      type: String
    },
    completion: {
      type: String
    },
    id: {
      type: String
    }
  },
  methods: {
    async deleteThisProject () {
      await this.$store.dispatch('deleteProject', this.id)
      console.log(this.id)
      this.$emit('deleteProject', this.id)
    }
  }
}
</script>
