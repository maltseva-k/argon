<template>
  <footer class="flex bg-white inset-x-0 p-4 border-transparent md:items-center md:justify-around md:p-6 dark:bg-gray-800">
    <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 made by <a href="https://github.com/maltseva-k" target="_blank" class="hover:underline">maltseva_k</a>
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
      <li>
        <router-link :to="{name: 'StubPage'}" class="mr-4 hover:underline md:mr-6 ">About</router-link>
      </li>
      <li>
        <router-link :to="{name: 'StubPage'}" class="mr-4 hover:underline md:mr-6">Blog</router-link>
      </li>
      <li>
        <router-link :to="{name: 'StubPage'}" class="mr-4 hover:underline md:mr-6">Licensing</router-link>
      </li>
      <li>
        <router-link :to="{name: 'StubPage'}" class="hover:underline">Contact</router-link>
      </li>
    </ul>
  </footer>
</template>
