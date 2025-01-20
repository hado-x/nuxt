<script setup lang="ts">
const counterStore = useCounterStore()
</script>

<template>
  <div class="w-screen flex-col gap-4 text-white h-screen flex justify-center items-center border bg-gray-900">
    {{ counterStore.count }}

    <div class="flex gap-2">
      <UButton icon="heroicons:plus" @click="counterStore.counterPlus" />
      <UButton icon="heroicons:minus" @click="counterStore.counterMinus" />
    </div>
  </div>
</template>
