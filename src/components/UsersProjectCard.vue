<template>
  <div class="min-h-full bg-white rounded-lg border hover:border-gray-200 hover:shadow-md dark:bg-gray-800 dark:border-gray-700 border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
    <div class=" p-5">
      <div class="flex flex-row md:flex-col lg:flex-row justify-between uppercase">
        <h5 class="text-xl lg:text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> {{ title }}</h5>
        <p class="font-sans rounded-md self-start text-sm text-gray-700 dark:text-gray-400 bg-gray-200 p-1 lg:p-2 lg:rounded-lg">
        {{ status }}
      </p>
      </div>
      <p class="mb-3 text-gray-700 dark:text-gray-400 proportional-nums text-medium lg:text-xl font-sans">
        {{ budget + '$'}}
      </p>
      <scale-with-span
      :completion="completion"
      />
      <div class="flex justify-end mt-4">
        <button-blue
          :buttonName="'Delete'"
          @onClick="deleteThisProject"
        >
          <template v-slot:icon>
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
          </template>
        </button-blue>
      </div>
    </div>
  </div>
</template>

<script>
import ScaleWithSpan from '@/components/ScaleWithSpan'
import ButtonBlue from '@/components/ButtonBlue/ButtonBlue'
export default {
  components: { ButtonBlue, ScaleWithSpan },
  props: {
    title: {
      type: String
    },
    budget: {

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
      this.$emit('deleteProject', this.id)
    }
  }
}
</script>
