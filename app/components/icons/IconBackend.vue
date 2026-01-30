<template>
  <svg 
    :class="props.class" 
    viewBox="0 0 24 24" 
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <!-- Backend/Server icon -->
    <rect x="3" y="3" width="18" height="6" rx="1.5" stroke="currentColor" stroke-width="2" fill="none"/>
    <rect x="3" y="15" width="18" height="6" rx="1.5" stroke="currentColor" stroke-width="2" fill="none"/>
    <circle cx="6.5" cy="6" r="1" fill="currentColor"/>
    <circle cx="6.5" cy="18" r="1" fill="currentColor"/>
    <path d="M10 6h7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M10 18h7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M12 9v6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
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
