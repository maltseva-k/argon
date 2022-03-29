<template>
  <button @click="onClick" type="button" class="ml-3 inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
    {{ buttonName }}
    <slot name="icon"></slot>
  </button>
</template>

<script>
export default {
  props: {
    buttonName: {
      type: String
    }
  },
  methods: {
    onClick () {
      this.$emit('onClick')
    }
  }
}
</script>
