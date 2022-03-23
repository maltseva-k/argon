<template>
  <nav class="flex" aria-label="Breadcrumb">
    <ol class="inline-flex items-center space-x-1 md:space-x-3">
      <li class="inline-flex items-center">
        <router-link :to="{name: 'home'}" class="inline-flex items-center text-sm font-medium flex text-white hover:text-gray-900">
          <img class="w-4 h-4 mr-2" src="../images/DashboardIcon.svg" alt="Dashboard Icon">
          Dashboard
        </router-link>
      </li>
      <li v-if="this.$route.name === 'table'">
        <div class="flex items-center">
          <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
          <router-link :to="{name: 'table'}" class="inline-flex items-center text-sm font-medium flex text-white hover:text-gray-900">
            Tables
          </router-link>
        </div>
      </li>
      <li v-if="this.$route.name === 'profile'">
        <div class="flex items-center">
          <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
          <router-link :to="{name: 'profile'}" class="inline-flex items-center text-sm font-medium flex text-white hover:text-gray-900">
            Profile
          </router-link>
        </div>
      </li>
    </ol>
  </nav>
</template>
