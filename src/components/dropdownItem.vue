<template>
  <li class="dropdown-item" :class="isDisabled?'isDisabled':''">
    <slot></slot>
  </li>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'DropdownItem',
  props: {
    isDisabled: {
      type: Boolean
    }
  }
})
</script>

<style scoped>
.dropdown-item.isDisabled{
  color: #6f6f6f;
  background: transparent;
  pointer-events: none;
}
</style>
