<template>
  <form
    @submit.prevent="SubmitHandler"
    class="bg-white rounded-3xl p-5 shadow-md">
    <div class="mb-3 text-center">
      <h2 class="text-lg font-bold leading-loose mb-3">Sign In with</h2>
      <div class="flex justify-center gap-3">
        <div class="w-20 h-20 bg-white border-1 border border-gray-300 rounded-lg">
          <button>
            <img class="w-10 h-10 mx-auto mt-4" src="../images/FacebookIcon.svg" alt="FacebookIcon">
          </button>
        </div>
        <div class="w-20 h-20 bg-white border-1 border border-gray-300 rounded-lg">
          <button>
            <img class="w-10 h-10 mx-auto mt-4" src="../images/AppleIcon.svg" alt="AppleIcon">
          </button>
        </div>
        <div class="w-20 h-20 bg-white border-1 border border-gray-300 rounded-lg">
          <button type="button" @click="LoginUserWithGoogle">
            <img class="w-8 h-7 mx-auto mt-6" src="../images/GoogleIcon.svg" alt="GoogleIcon">
          </button>
        </div>
      </div>
      <p class="text-gray-300 text-lg font-bold leading-loose mt-3">or</p>
    </div>
    <div class="mb-6">
      <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
      <input
        v-model="email"
        type="text" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required="">
    </div>
    <div class="mb-6">
      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Password</label>
      <input
        v-model="password"
        type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
    </div>
    <div class="flex items-start mb-6">
      <div class="flex items-center h-5">
        <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required="">
      </div>
      <div class="ml-3 text-sm">
        <label for="remember" class="font-medium text-gray-900 dark:text-gray-300">Remember me</label>
      </div>
    </div>
    <button type="submit" class=" w-full text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-800 dark:border-gray-700">
      Sign In
    </button>
    <div class="flex justify-center gap-2">
      <p class="text-gray-300 font-medium text-base mt-3">Don’t have an account?</p>
      <router-link :to="{name: 'register'}" class="text-base text-gray-800 font-medium mt-3">Sign up</router-link>
    </div>
  </form>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async SubmitHandler () {
      const formData = {
        email: this.email,
        password: this.password
      }
      console.log(formData)
      await this.$store.dispatch('loginUser', formData)
      await this.$router.push('/')
    },
    async LoginUserWithGoogle () {
      console.log('вход через гугл')
      await this.$store.dispatch('loginUserWithGoogle')
      await this.$router.push('/')
    }
  }
}
</script>
