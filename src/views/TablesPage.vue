<template>
  <div>
    <div>
      <table-with-hover-state />
    </div>
    <div class="mt-4">
      <table-with-scale
        :projects="projects"
      />
    </div>
  </div>
</template>
<script>
import TableWithHoverState from '@/components/TableWithHoverState'
import TableWithScale from '@/components/TableWithScale'
export default {
  components: {
    TableWithScale,
    TableWithHoverState
  },
  data () {
    return {
      projects: []
    }
  },
  async mounted () {
    this.projects = await this.$store.dispatch('fetchProjects')
    console.log(this.projects)
  }
}
</script>
