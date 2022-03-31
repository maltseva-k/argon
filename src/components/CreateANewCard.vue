<template>
  <div class="relative bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 py-5 px-10 min-h-min bg-white rounded-lg shadow-lg shadow-grey-300/50 p-5 border border-gray-200 shadow-md">
      <message-component
        v-if="isMessageVisible"
        :message="'Project successfully created'"
      />
      <h2 class="mb-1 text-xl uppercase font-bold font-sans tracking-wide text-slate-900">Create a new project</h2>
      <form class="w-full">
        <label for="title" class="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300">Title</label>
        <input
          v-model="title"
          :class="{'border-red-500': v$.title.$error}"
          type="text" name="title" id="title"
          autocomplete="off"
          class="rounded-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="First project" required="">

        <span
          v-if="v$.title.$error"
          class="text-sm text-gray-500"
        >
        {{ v$.title.$errors[0].$message }}
        </span>
        <div class="flex w-full gap-2 mt-1">
          <div class="block w-1/2">
            <label for="budget" class="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300">Budget, $</label>
            <input
              v-model="budget"
              :class="{'border-red-500': v$.budget.$error } "
              autocomplete="off"
              type="text" name="budget" id="budget" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="10000" required="">
            <span
              v-if="v$.budget.$error"
              class="text-sm text-gray-500"
            >
        {{ v$.budget.$errors[0].$message }}
        </span>
          </div>
          <div class="block w-1/2">
            <label for="completion" class="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300">Completion, $</label>
            <input
              v-model="completion"
              :class="{'border-red-500': v$.completion.$error}"
              autocomplete="off"
              type="number" name="completion" id="completion" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="10" required="">
            <span
              v-if="v$.completion.$error"
              class="text-sm text-gray-500"
            >
        {{ v$.completion.$errors[0].$message }}
        </span>
          </div>
        </div>

        <label for="status" class="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300">Status</label>
        <select
          v-model="status"
          :class="{'border-red-500': v$.status.$error}"
          id="status"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
        >
          <option disabled>select status</option>
          <option value="working" selected>working</option>
          <option value="canceled">canceled</option>
          <option value="done">done</option>
        </select>
        <span
          v-if="v$.status.$error"
          class="text-sm text-gray-500"
        >
        {{ v$.status.$errors[0].$message }}
        </span>
        <div class="flex justify-end mt-4">
          <button-blue
            :buttonName="'Add project'"
            @onClick="createProject"
            ><template v-slot:icon>
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
            </template>
          </button-blue>
        </div>
      </form>
    </div>

</template>

<script>

import ButtonBlue from '@/components/ButtonBlue/ButtonBlue'
import MessageComponent from '@/components/MessageComponent'
import useVuelidate from '@vuelidate/core'
import { required, between, minValue } from '@vuelidate/validators'

export default {
  components: { MessageComponent, ButtonBlue },
  data () {
    return {
      v$: useVuelidate(),
      isMessageVisible: false,
      title: '',
      budget: '',
      status: '',
      completion: ''
    }
  },
  validations () {
    return {
      title: { required },
      budget: { required, minValue: minValue(0) },
      status: { required },
      completion: { required, between: between(0, 100) }
    }
  },
  methods: {
    async createProject () {
      this.v$.$validate()
      if (!this.v$.$error) {
        const projectForm = {
          title: this.title,
          budget: this.budget,
          status: this.status,
          completion: this.completion + '%'
        }
        await this.$store.dispatch('createProject', projectForm)
        this.title = ''
        this.budget = ''
        this.status = ''
        this.completion = ''
        this.isMessageVisible = true
        this.closeMessage()
        this.$emit('createProject')
      }
    },
    closeMessage () {
      const vm = this
      setTimeout(function () {
        vm.isMessageVisible = false
        console.log('timeout')
      }, 1900)
    }
  }
}
</script>
