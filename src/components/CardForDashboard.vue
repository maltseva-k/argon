<!--
<template>
  <div class="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
    <h3>{{ title }}</h3>
    <div class="w-12 h-12 bg-blue-600 rounded-lg flex justify-center items-center align-middle">
      <img :src="itemImage" class="w-3/4 h-3/4" :alt="card">
    </div>
    <p>{{ indicator }}</p>
    <p>{{ increment }}</p><p>Since last month</p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    },
    increment: {
      type: String
    },
    indicator: {
      type: String
    },
    card: {
      type: String
    }
  },
  computed: {
    async itemImage () {
      const fileName = this.card
      console.log(fileName)
      console.log(require(`../images/${fileName}.svg`))
      return require(`../images/${fileName}.svg`)
      /* return require(`../images/${fileName}.svg`) */
    }
  }
}
</script>
-->
