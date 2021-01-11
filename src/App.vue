<template>
  <img alt="Vue logo" src="./assets/logo.png">
 <columnList :list=list></columnList>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import columnList, { ColumnProps } from './components/columnList'
const testData: ColumnProps[] = [
  {
    id: 1,
    title: 'vue3',
    avatar: 'http://placehold.it/50x50',
    description: '使用vue3编写仿知乎功能'
  },
  {
    id: 2,
    title: 'vue3',
    avatar: 'http://placehold.it/50x50',
    description: '使用vue3编写仿知乎功能'
  }
]
export default defineComponent({
  name: 'App',
  components: {
    columnList
  },
  setup () {
    return {
      list: testData
    }
  }

})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
