<template>
  <div class="lg:w-1/3 sm:w-3/5 mx-auto w-4/5 min-w-min bg-white rounded-2xl p-10 mb-10 shadow-md">
    <div class="mt-2 text-center align-middle font-sans font-bold text-9xl tracking-wide text-blue-500 ml-auto mr-auto mb-20 ">404</div>
    <div class="text-medium text-center text-xl font-sans align-middle mt-auto ml-auto mb-auto">
      <h1 class="mt-2 font-bold text-lg mb-2">Page Not Found</h1>
      <p>Looks like you've followed a broken link or entered a URL that doesn't exist on this site.</p>
        <router-link :to="{ name: 'home' }" class="hover:underline text-blue-500 mt-5  w-full text-center -ml-5 pl-0 flex justify-center items-center font-bold">
          <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
          Back to our site
        </router-link>
    </div>
  </div>
</template>
