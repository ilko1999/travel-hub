<template>
  <div
    class="w-10 h-10 flex justify-center content-center items-center rounded-full text-primary-foreground bg-primary text-2xl cursor-pointer select-none"
  >
    {{ userInitials }}
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const userInitials = ref('II');
</script>
