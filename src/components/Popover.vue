<template>
  <div>
    <div @click="togglePopover" class="popover-trigger">
      <slot name="trigger">Show Popover</slot>
    </div>

    <div
      v-show="popoverVisible"
      class="absolute z-50 right-2 animate-in fade-in zoom-in"
    >
      <slot name="content">Popover Content</slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const popoverVisible = ref(false);

function togglePopover() {
  popoverVisible.value = !popoverVisible.value;
}
</script>
