<script setup lang="ts">
const isFetching = ref<boolean>(true)
</script>

<template>
  <div class="w-screen h-12 border bg-red-400">
    <UButton :loading="isFetching" :disabled="isFetching"  variant="soft" icon="heroicons:user" />
  </div>
</template>
