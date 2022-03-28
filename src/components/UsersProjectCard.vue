<template>
  <div class="max-w-sm min-w-min max-w-sm bg-white rounded-lg border hover:border-gray-200 hover:shadow-md dark:bg-gray-800 dark:border-gray-700 bg-white rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
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
      <scale-with-span
      :completion="completion"
      />
      <div class="flex justify-end mt-4">
        <delete-button
          @onClick="deleteThisProject"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ScaleWithSpan from '@/components/ScaleWithSpan'
import DeleteButton from '@/components/DeleteButton'
export default {
  components: { DeleteButton, ScaleWithSpan },
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
      console.log('click')
      await this.$store.dispatch('deleteProject', this.id)
      console.log(this.id)
      this.$emit('deleteProject', this.id)
    }
  }
}
</script>
