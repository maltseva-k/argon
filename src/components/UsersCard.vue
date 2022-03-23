<template>
  <div class="flex justify-between p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
    <div>
      <h3>TODAY’S USERS</h3>
      <p>{{ indicator }}</p>
      <div class="flex justify-start">
        <p>{{ increment }}</p>
        <p class="ml-2">Since last month</p>
      </div>
    </div>
    <div class="w-12 h-12 bg-blue-600 rounded-lg flex justify-center items-center align-middle">
      <img src="../images/UsersCard.svg" class="w-3/4 h-3/4" alt="Users card">
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
