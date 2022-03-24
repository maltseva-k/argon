<template>
  <div class="container bg-white flex justify-between ml-auto mr-auto mt-auto rounded-2xl p-10 w-1/2">
    <div class="text-center font-sans font-bold text-8xl tracking-wide text-blue-500 ml-auto mr-auto">404</div>
    <div class="text-medium text-xl font-sans align-middle mt-auto mb-auto">
      <h1 class="mt-2">Страница не найдена</h1>
      <p>К сожалению, страница, которую Вы запросили, не существует.</p>
      <p>
        Вы можете перейти на <router-link :to="{ name: 'home' }" class="hover:text-blue-500">главную страницу</router-link>.
      </p>
    </div>
  </div>
</template>
