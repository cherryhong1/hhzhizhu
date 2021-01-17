<template>
  <ul class="row columnList mt-3 .d-flex">
    <li v-for="item in columnList" :key="item.id" class="col-3 card mb-3">
      <img :src="item.avatar" :alt="item.title" class="card-img-top mx-auto mt-3 rounded-circle">
      <div class="card-body">
      <h3 class="card-title">{{item.title}}</h3>
      <h6 class="card-text">{{item.description}}</h6>
      <a href="#" target="_blank" rel="noopener noreferrer" class="btn btn-primary">查看详情</a>
      </div>
      </li>
  </ul>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
export interface ColumnProps {
  id: number;
  title: string;
  avatar?: string;
  description: string;
}
export default defineComponent({
  name: 'ColumnList',
  props: {
    list: {
      type: Array as PropType<ColumnProps[]>,
      require: true
    }
  },
  setup (props) {
    const columnList = computed(() => {
      if (props.list) {
        return props.list.map(column => {
          if (!column.avatar) {
            column.avatar = require('@/assets/logo.png')
            // column.avatar = 'https://images.dog.ceo/breeds/mastiff-bull/n02108422_3647.jpg'
          }
          return column
        })
      }
    })
    return {
      columnList
    }
  }
})
</script>

<style scoped>
.columnList img{
  width: 6rem;
  height: 6rem;
  /* border-radius: 50%; */
}
</style>
