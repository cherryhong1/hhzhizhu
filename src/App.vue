<template>
  <div class="container">
    <Nav :user=user></Nav>
    <columnList :list=list></columnList>
 </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import columnList, { ColumnProps } from './components/columnList.vue'
import Nav, { UserInfo } from './components/nav.vue'
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
  },
  {
    id: 1,
    title: 'vue3',
    // avatar: 'http://placehold.it/50x50',
    description: '使用vue3编写仿知乎功能'
  },
  {
    id: 2,
    title: 'vue3',
    avatar: 'http://placehold.it/50x50',
    description: '使用vue3编写仿知乎功能'
  }
]
const testUser: UserInfo = {
  isLogin: true,
  name: 'lisha',
  id: 'lili'
}
export default defineComponent({
  name: 'App',
  components: {
    columnList,
    Nav
  },
  setup () {
    return {
      list: testData,
      user: testUser
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
  /* margin-top: 60px; */
}
</style>
