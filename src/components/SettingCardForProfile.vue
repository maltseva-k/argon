<template>
  <div class="relative bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 min-h-min bg-white rounded-lg shadow-lg shadow-grey-300/50 p-5 border border-gray-200 shadow-md">
    <h2 class="1 text-xl uppercase font-bold font-sans tracking-wide text-slate-900">About me</h2>
    <message-component
      v-if="isMessageVisible"
      :message="'Personal data updated successfully'"
    />
    <form>
      <div>
        <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
        <div class="flex">
      <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
       </span>
          <input
            v-model="name"
            :class="{'border-red-500': v$.name.$error}"
            type="text" id="name" autocomplete="off" class="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Bonnie Green">
        </div>
        <span
          v-if="v$.name.$error"
          class="text-sm text-red-500"
        >
        {{ v$.name.$errors[0].$message }}
        </span>
      </div>

      <div>
        <label for="email" class="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
        <div class="flex">
      <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"></path></svg>
       </span>
          <input
            v-model="email"
            :class="{'border-red-500': v$.email.$error}"
            type="text" id="email" autocomplete="off" class="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="bonnie_green@mail.ru">

        </div>
        <span
        v-if="v$.email.$error"
        class="text-sm text-red-500"
      >
        {{ v$.email.$errors[0].$message }}
        </span>
      </div>

      <div>
        <label for="function" class="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300">Function</label>
        <div class="flex">
      <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
       </span>
          <input
            v-model="userFunction"
            type="text" id="function" autocomplete="off" class="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="manager">
        </div>
      </div>
      <div class="flex justify-end mt-4">
        <button-blue
        :buttonName="'Update'"
        @onClick="updateUserInfo"
        >
          <template v-slot:icon>
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
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
import { required } from '@vuelidate/validators'

export default {
  components: { MessageComponent, ButtonBlue },
  data () {
    return {
      v$: useVuelidate(),
      name: '',
      email: '',
      userFunction: '',
      isMessageVisible: false
    }
  },
  validations () {
    return {
      name: { required },
      email: { required }
    }
  },
  async mounted () {
    const user = await this.$store.dispatch('fetchUserInfo')
    this.name = user.name
    this.email = user.email
    this.userFunction = user.userFunction
  },
  methods: {
    async updateUserInfo () {
      this.v$.$validate()
      if (!this.v$.$error) {
        const formData = {
          name: this.name,
          email: this.email,
          userFunction: this.userFunction
        }
        await this.$store.dispatch('updateUserInfo', formData)
        this.isMessageVisible = true
        this.closeMessage()
      }
    },
    closeMessage () {
      const vm = this
      setTimeout(function () {
        vm.isMessageVisible = false
      }, 1900)
    }
  }
}
</script>
