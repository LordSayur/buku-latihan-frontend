<template>
  <button
    class="block text-center py-1 px-4 font-semibold rounded"
    :class="`${getType} ${getSize}`"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
  import { computed, defineProps } from 'vue'
  import type { PropType } from 'vue'

  const props = defineProps({
    type: {
      type: String as PropType<'primary' | 'secondary'>,
      required: false,
      default: 'primary',
    },
    size: {
      type: String as PropType<'small' | 'medium' | 'large'>,
      required: false,
      default: 'medium',
    },
  })

  const getType = computed(() => `bg-${props.type}-100 text-${props.type}-500`)
  const getSize = computed(() => {
    const sizeMap = {
      small: 'sm',
      medium: 'base',
      large: 'xl',
    }
    return `text-${sizeMap[props.size]}`
  })
</script>
