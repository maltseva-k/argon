<template>
    <div class="text-center min-w-min lg:w-1/3 sm:w-3/5 mx-auto w-4/5 bg-white mt-36 mb-32 rounded-2xl p-11 shadow-md">
      <h1 class="mt-2 font-bold text-xl mb-2">Page under construction</h1>
      <p class="text-lg text-center font-sans align-middle mt-auto ml-auto mb-auto">Please, come back later</p>
      <router-link :to="{ name: 'home' }" class="hover:underline text-blue-500 mt-5  w-full text-center -ml-5 pl-0 flex justify-center items-center font-bold">
        <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
        Back to our site
      </router-link>
    </div>
</template>
