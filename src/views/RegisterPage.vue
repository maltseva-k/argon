<template>
    <div class="lg:w-1/3 sm:w-3/5 mx-auto w-4/5 h-full">
      <h1 class="font-bold text-white text-center text-2xl mb-1 lg:mb-1">Welcome!</h1>
      <p class="text-center text-white mb-1 lg:mb-2">
        Use these awesome forms to create new account in project for free.
      </p>
      <register-form />
    </div>
</template>

<script>
import RegisterForm from '@/components/RegisterForm'
export default {
  components: { RegisterForm }
}
</script>
