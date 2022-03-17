<template>
  <div>
    <div>
      <table-with-hover-state />
    </div>
    <div class="mt-4">
      <table-with-scale />
    </div>
  </div>
</template>
<script>
import TableWithHoverState from '@/components/TableWithHoverState'
import TableWithScale from '@/components/TableWithScale'
export default {
  components: { TableWithScale, TableWithHoverState }
}
</script>
