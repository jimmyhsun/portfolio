<template>
  <div class="flex items-center gap-1 rounded-full bg-gray-100 p-1">
    <NuxtLink
      v-for="loc in availableLocales"
      :key="loc.code"
      :to="switchLocalePath(loc.code)"
      :class="[
        'rounded-full px-3 py-1.5 text-xs font-medium transition-all cursor-pointer',
        currentLocale === loc.code
          ? 'bg-white text-primary shadow-sm'
          : 'text-gray-600 hover:text-gray-900',
      ]"
    >
      {{ loc.name }}
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
// Use Nuxt i18n composables
const switchLocalePath = useSwitchLocalePath()
const { locale: currentLocale } = useI18n()

// Define available locales (matches nuxt.config.ts)
const availableLocales = [
  { code: 'zh-TW', name: '中文' },
  { code: 'en', name: 'English' },
]
</script>
