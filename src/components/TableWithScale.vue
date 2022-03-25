<template>
  <div class="flex flex-col cursor-default">
    <div class="overflow-x-auto">
      <div class="inline-block min-w-full align-middle">
        <div class="overflow-hidden ">
          <table class="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
            <thead class="bg-gray-100 dark:bg-gray-700">
            <tr>
              <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                Project title
              </th>
              <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                Budget
              </th>
              <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                Status
              </th>
              <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                Completion
              </th>
            </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
            <tr
              v-for="project in projects"
              :key="project.id"
              class="hover:bg-gray-100 dark:hover:bg-gray-700">
              <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {{ project.title }}
              </td>
              <td class="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                {{ project.budget }}
              </td>
              <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {{ project.status }}
              </td>
              <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <div>

                  <div class="flex justify-between mb-1">
                    <span class="text-sm font-medium text-blue-700 dark:text-white">{{ project.completion }}</span>
                  </div>
                  <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div class="bg-blue-600 h-2.5 rounded-full" :style="{width: project.completion}"></div>
                  </div>

                </div>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    projects: {
      type: Array
    }
  }
}
</script>
