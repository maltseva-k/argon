<template>
  <transition name="message">
  <div class="absolute -top-16 right-10 p-4 mb-4 text-sm text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800" role="alert">
    <span class="font-medium">Info:</span> {{ message }}
  </div>
</transition>
</template>

<script>
export default {
  props: {
    message: {
      type: String
    }
  }
}
</script>

<style>
.message-enter-active,
.message-leave-active {
  transition: opacity 0.5s ease;
}

.message-enter-from,
.message-leave-to {
  opacity: 0;
}
</style>
