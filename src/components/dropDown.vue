<template>
  <div class="dropdown" ref="dropdownRef">
    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" @click="toggleIsOpen">{{title}}</button>
    <ul class="dropdown-menu" v-if="isOpen">
     <slot></slot>
    </ul>
  </div>
</template>

<script lang='ts'>
import { defineComponent, ref, watch } from 'vue'
import OutSideClick from '@/hooks/outsideClick'
export default defineComponent({
  name: 'Dropdown',
  props: {
    title: {
      type: String,
      require: true
    }
  },
  setup () {
    const isOpen = ref(false)
    const dropdownRef = ref<null | HTMLElement>(null)
    const toggleIsOpen = () => {
      isOpen.value = !isOpen.value
    }
    const isOutSideClick = OutSideClick(dropdownRef)
    watch(isOutSideClick, () => {
      if (isOutSideClick.value && isOpen.value) {
        isOpen.value = false
      } else {
        isOpen.value = true
      }
    })
    // const handle = (e: MouseEvent) => {
    //   console.log(dropdownRef.value)
    //   if (dropdownRef.value) {
    //     if (!(dropdownRef.value.contains(e.target as HTMLElement)) && isOpen.value === true) {
    //       isOpen.value = false
    //     }
    //   }
    // }
    // onMounted(() => {
    //   document.addEventListener('click', handle)
    // })
    // onUnmounted(() => {
    //   document.removeEventListener('click', handle)
    // })
    return {
      isOpen,
      toggleIsOpen,
      dropdownRef
    }
  }

})
</script>

<style scoped>
.dropdown-menu{
  display: block;
}
</style>
