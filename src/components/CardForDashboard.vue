<template>
  <div class="shadow-lg shadow-grey-300/50 hover:border-blue-500 hover:shadow-xl p-5 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
    <div class="flex justify-between mb-2 items-center">
      <div class="block">
        <h3 class="text-lg font-bold font-sans tracking-wide text-slate-300 pt-0">{{ title }}</h3>
        <p class="proportional-nums text-medium text-xl font-sans">{{ indicator }}</p>
      </div>
      <div class="w-12 h-12 bg-blue-600 rounded-lg flex justify-center items-center align-middle">
        <img :src="itemImage" class="w-3/4 h-3/4" :alt="card">
      </div>
    </div>
    <div class="flex justify-start text-sm">
      <p :class="colorOfText">{{ increment }}</p>
      <p class="ml-2 text-slate-300">Since last month</p>
      </div>
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
  data () {
    return {
      itemImage: '',
      colorOfText: 'text-green-500'
    }
  },
  mounted () {
    const fileName = this.card
    this.itemImage = require(`../images/${fileName}.svg`)
    if (this.increment.includes('-')) {
      this.colorOfText = 'text-red-500'
    } else {
      this.colorOfText = 'text-green-500'
    }
  }
}
</script>
