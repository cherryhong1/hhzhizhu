<template>
  <nav class="navbar navbar-dark bg-primary">
    <a href="#" class="nav-brand">
      <img src="@/assets/logo.png" alt="" style="width:3rem">
    </a>
    <ul v-if="user.isLogin">
        <li class="nav-item">
          <dropdown :title="`你好，${user.name}`">
            <dropdownItem>新建文章</dropdownItem>
            <dropdownItem :isDisabled="true">编辑文章</dropdownItem>
            <dropdownItem>删除文章</dropdownItem>
          </dropdown>
        </li>
    </ul>
    <ul v-else>
      <li class="nav-item d-inline-block">
        <button type="button" class="btn btn-primary">登录</button>
      </li>
      <li class="nav-item d-inline-block">
        <button type="button" class="btn btn-primary">注册</button>
      </li>
    </ul>
  </nav>
</template>

<script lang='ts'>
import { defineComponent, PropType } from 'vue'
import dropdown from './dropDown.vue'
import DropdownItem from './dropdownItem.vue'
export interface UserInfo {
  isLogin: boolean;
  id? : string;
  name?: string;
}
export default defineComponent({
  name: 'Nav',
  components: {
    dropdown,
    DropdownItem
  },
  props: {
    user: {
      type: Object as PropType<UserInfo>,
      required: true
    }
  }
})
</script>

<style>

</style>
