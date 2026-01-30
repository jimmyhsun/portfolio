<template>
  <svg 
    :class="props.class" 
    viewBox="0 0 24 24" 
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <!-- Building/Architecture icon -->
    <path 
      d="M4 21V10l8-6 8 6v11H4z" 
      stroke="currentColor" 
      stroke-width="2" 
      fill="none"
    />
    <path 
      d="M9 21v-6h6v6" 
      stroke="currentColor" 
      stroke-width="2"
    />
    <path 
      d="M12 4v4" 
      stroke="currentColor" 
      stroke-width="2" 
      stroke-linecap="round"
    />
    <rect x="7" y="11" width="3" height="3" rx="0.5" fill="currentColor"/>
    <rect x="14" y="11" width="3" height="3" rx="0.5" fill="currentColor"/>
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
