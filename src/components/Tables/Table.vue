<template>
    <div>
    <h3>Table</h3>
    <table>
    <tr>
        <th>Col1</th>
        <th>Col2</th>
        <th>Col3</th>
    </tr>
    <tr v-for="(raw, key) in tableData" :key="key">
        <td>{{ raw.col1 }}</td>
        <td>{{ raw.col2 }}</td>
        <td>{{ raw.col3 }}</td>
    </tr>
</table>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { SampleTable } from '@/types';

export default defineComponent({
  name: "Table",
  props: {},
  data() {
      return {
          tableData: [
              {
                  col1: "#1",
                  col2: 123,
                  col3: "test description"
              },
              {
                  col1: "#2",
                  col2: 999,
                  col3: "hogehoge"
              }
          ] as SampleTable[]
      }
  },
});
</script>

<style>
table{
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
}

table tr{
  border-bottom: solid 1px #eee;
  cursor: pointer;
}

table tr:hover{
  background-color: #d4f0fd;
}

table th,table td{
  text-align: center;
  width: 25%;
  padding: 15px 0;
}
</style>