<template>
  <nav class="navbar navbar-dark bg-primary">
    <a href="#" class="nav-brand">
      <img src="@/assets/logo.png" alt="" style="width:3rem">
    </a>
    <ul v-if="user.isLogin">
        <li class="nav-item">
          <button type="button" class="btn btn-primary">hello,{{user.name}}</button>
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
export interface UserInfo {
  isLogin: boolean;
  id? : string;
  name?: string;
}
export default defineComponent({
  name: 'Nav',
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
