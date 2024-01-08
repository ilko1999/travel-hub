<template>
  <component :is="props.as" :class="cn(containerclass, props.className)">
    <Loader
      v-if="props.loading"
      class="w-5 h-5 motion-reduce:animate-spin absolute"
    />
    <component
      :is="props.leftIcon"
      :class="['w-5 h-5 mr-2', props.loading && 'invisible']"
    />
    <span :class="[props.loading && 'invisible']">
      <slot />
    </span>

    <component
      :is="props.rightIcon"
      :class="['w-5 h-5 ml-2', props.loading && 'invisible']"
    />
  </component>
</template>

<script setup lang="ts">
import { computed } from '@vue/reactivity';
import { cva } from 'class-variance-authority';
import { cn } from '../../lib/utils';
import { Loader } from 'lucide-vue-next';
const props = defineProps({
  leftIcon: Object,
  rightIcon: Object,
  loading: Boolean,
  as: {
    type: [String, Object],
    default: 'button',
  },
  className: [String, Object],
  variant: {
    type: String,
    default: 'default',
  },
});

const containerclass = computed(() => {
  return cva(
    'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground min-h-[32] px-3 py-0.5 ',
    {
      variants: {
        variant: {
          default: 'bg-primary cursor-poiunter hover:bg-primary/90',
          destructive:
            'bg-destructive/50 text-destructive dark:border-destructive border-destructive/50 border-1',
          disabled: 'cursor-not-allowed bg-primary/40',
        },
      },
      defaultVariants: {
        variant: 'default',
      },
    }
  )({
    variant: props.variant,
  });
});
</script>
