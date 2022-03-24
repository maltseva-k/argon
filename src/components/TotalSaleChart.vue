<template>
  <div>
    <charts-css
      heading="Team's Coffee Count"
      type="bar"
      :labels="['Mon', 'Tue', 'Wed']"
      :datasets="datasets"
    />
  </div>
</template>
