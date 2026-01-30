<template>
  <svg 
    :class="props.class" 
    viewBox="0 0 24 24" 
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <!-- Frontend/Monitor icon -->
    <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" stroke-width="2" fill="none"/>
    <path d="M8 21h8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    <path d="M12 17v4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    <path d="M7 8l3 2-3 2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M13 12h4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
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
