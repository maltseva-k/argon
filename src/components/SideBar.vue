<template>
  <aside class=" mx-5 mx-auto md:ml-5 md:w-64 mb-2" aria-label="Sidebar">
    <div class="lg:py-4 py-3 px-2 bg-white bg-opacity-60 md:bg-opacity-100 rounded-xl dark:bg-gray-800 font-sans text-xl w-full">
      <a href="#" class="hidden md:flex justify-center items-center w-full p-2">
        <div class="w-6 h-5 bg-transparent hover:shadow-md">
          <img src="../images/LogoArgon.svg" class="bg-transparent container" alt="Argon Logo">
        </div>
        <span class="ml-2 self-center font-bold whitespace-nowrap dark:text-white">argon</span>
      </a>
      <ul class="md:pt-4 flex justify-between md:justify-start md:flex-col gap-5 md:gap-2 md:mt-4 space-y-2 md:border-t border-gray-200 dark:border-gray-700">
        <li class="items-center">
          <router-link
            active-class="bg-blue-600 text-slate-50"
            :to="{ name: 'home' }" class="mt-2 flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-700">
            <div class="w-10 h-10 bg-blue-600 rounded-lg flex justify-center items-center align-middle text-white">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path></svg>
            </div>
            <span class="flex-1 ml-3 whitespace-nowrap hidden md:inline lg:inline">Dashboard</span>
          </router-link>
        </li>
        <li class="items-center ">
          <router-link
            active-class="bg-blue-600 text-slate-50"
            :to="{ name: 'table' }" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-700">
            <div class="w-10 h-10 bg-blue-600 rounded-lg flex justify-center items-center align-middle text-white">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
            </div>
            <span class="flex-1 ml-3 whitespace-nowrap hidden md:inline lg:inline">Tables</span>
          </router-link>
        </li>
        <li>
          <router-link
            active-class="bg-blue-600 text-slate-50"
            :to="{ name: 'profile' }" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-700">
            <div class="w-10 h-10 bg-blue-600 rounded-lg flex justify-center items-center align-middle text-white">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
            </div>
            <span class="flex-1 ml-3 whitespace-nowrap hidden md:inline lg:inline">Profile</span>
          </router-link>
        </li>
      <li>
        <div @click="logout" class="cursor-pointer flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-700">
          <div class="w-10 h-10 bg-blue-600 rounded-lg flex justify-center items-center align-middle text-white">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
          </div>
            <button type="button" @click="logout" class="ml-3 whitespace-nowrap hidden md:inline lg:inline p-0 m-0">Logout</button>
        </div>
      </li>
      </ul>
    </div>
  </aside>
</template>

<script>
export default {
  methods: {
    async logout () {
      await this.$store.dispatch('logout')
      await this.$router.push('/login')
    }
  }
}
</script>
