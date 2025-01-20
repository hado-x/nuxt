export const useCounterStore = defineStore('counter', () => {
  const count = ref<number>(0)

  const counterPlus = () => {
    count.value++
  }

  const counterMinus = () => {
    count.value--
  }

  return {
    count,
    counterPlus,
    counterMinus,
  }
})
