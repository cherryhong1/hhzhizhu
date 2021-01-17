import { onMounted, onUnmounted, ref, Ref } from 'vue'
const OutSideClick = (ele: Ref<null| HTMLElement>) => {
  const isOutSideClick = ref(false)
  const handler = (e: MouseEvent) => {
    if (ele.value) {
      if (ele.value.contains(e.target as HTMLElement)) {
        isOutSideClick.value = false
      } else {
        isOutSideClick.value = true
      }
    }
  }
  onMounted(() => {
    document.addEventListener('click', handler)
  })
  onUnmounted(() => {
    document.removeEventListener('click', handler)
  })
  return isOutSideClick
}
export default OutSideClick
