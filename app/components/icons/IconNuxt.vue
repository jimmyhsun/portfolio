<template>
  <svg 
    :class="props.class" 
    viewBox="0 0 24 24" 
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <!-- Nuxt triangle shape -->
    <path 
      d="M13.4 2.5c-.6-1-2.2-1-2.8 0L2.2 17c-.6 1 .2 2.5 1.4 2.5h6.8l5.2-9-2.2-8z" 
      fill="#00DC82"
    />
    <path 
      d="M17.6 8.5c-.5-.9-1.7-.9-2.2 0l-5.2 9h10.4c1 0 1.6-1.2 1-2l-4-7z" 
      fill="#00DC82"
      fill-opacity="0.6"
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
