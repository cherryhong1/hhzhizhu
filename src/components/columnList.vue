<template>
  <ul>
    <li v-for="item in list" :key="item.id">
      <img :src="item.avatar" :alt="item.title">
      <h3>{{item.title}}</h3>
      <h6>{{item.description}}</h6>
      <a href="#" target="_blank" rel="noopener noreferrer">查看详情</a>
      </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
export interface ColumnProps {
  id: number;
  title: string;
  avatar: string;
  description: string;
}
export default defineComponent({
  name: 'ColumnList',
  props: {
    list: {
      type: Array as PropType<ColumnProps[]>,
      require: true
    }
  }
})
</script>

<style>

</style>
