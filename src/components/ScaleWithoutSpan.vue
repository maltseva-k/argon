<template>
  <div class="w-full h-4 bg-slate-300 rounded-full dark:bg-gray-700">
    <div
      class="h-4 bg-blue-500 rounded-full dark:bg-gray-300"
      :style="{width: completion}"
    >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    completion: {
      type: String
    }
  }
}
</script>
