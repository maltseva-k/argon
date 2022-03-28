<template>
  <div class="flex justify-between p-6 max-w-sm bg-white rounded-xl border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
    <div>
      <h3 class="text-lg font-bold font-sans tracking-wide text-slate-300"
      >
        TODAY’S MONEY
      </h3>
      <p
        class="proportional-nums text-medium text-xl font-sans mb-4"
      >{{ indicator }}</p>
      <div class="flex justify-start">
        <p class="text-sm text-green-500">{{ increment }}</p>
        <p class="ml-2 text-sm text-slate-300">Since last month</p>
      </div>
    </div>
    <div class="w-12 h-12 bg-blue-600 rounded-lg flex justify-center items-center align-middle">
      <slot name="icon"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    increment: {
      type: String
    },
    indicator: {
      type: String
    }
  }
  /*  computed: {
    async itemImage () {
      const fileName = this.card
      console.log(fileName)
      console.log(require(`../images/${fileName}.svg`))
      return require(`../images/${fileName}.svg`)
      /!* return require(`../images/${fileName}.svg`) *!/
    } */
}
</script>
