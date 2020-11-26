<template>
      <Table></Table>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import Table from "@/components/Tables/Table.vue";

export default defineComponent({
  name: 'TableView',
  components: {
    Table
  },
  // data should be stored using vuex
  computed: {},
  methods: {}
});
</script>
