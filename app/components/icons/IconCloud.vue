<template>
  <svg 
    :class="props.class" 
    viewBox="0 0 24 24" 
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <!-- Cloud icon -->
    <path 
      d="M6.5 19a4.5 4.5 0 0 1-.5-8.97 6 6 0 0 1 11.76-1.57A4.5 4.5 0 1 1 17.5 19H6.5z" 
      stroke="currentColor" 
      stroke-width="2" 
      fill="none"
    />
  </svg>
</template>

<script setup lang="ts">
interface Props {
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  class: 'w-6 h-6'
})
</script>
