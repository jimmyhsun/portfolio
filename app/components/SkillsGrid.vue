<template>
  <section id="skills" class="relative py-12 sm:py-18">
    <!-- Background -->
    <div class="absolute inset-0 -z-10 bg-gradient-to-b from-white via-gray-50/50 to-white"></div>

    <div class="mx-auto max-w-7xl px-6">
      <!-- Section Header -->
      <div class="mx-auto max-w-2xl text-center">
        <span
          class="inline-block rounded-full bg-primary-light px-4 py-1.5 text-sm font-medium text-primary"
        >
          {{ t('skills.badge') }}
        </span>
        <h2 class="text-headline mt-4 text-gray-900">
          {{ t('skills.title') }}
        </h2>
        <p class="mt-4 text-lg text-gray-600">
          {{ t('skills.subtitle') }}
        </p>
      </div>

      <!-- Skills Grid by Category -->
      <div class="mt-16 space-y-16">
        <div v-for="category in categories" :key="category.key" class="animate-slide-up">
          <!-- Category Header -->
          <div class="mb-8 flex items-center gap-3">
            <IconsIconFrontend v-if="category.key === 'frontend'" class="h-8 w-8 text-primary" />
            <IconsIconBackend v-if="category.key === 'backend'" class="h-8 w-8 text-purple-600" />
            <IconsIconCloud v-if="category.key === 'cloud'" class="h-8 w-8 text-orange-500" />
            <h3 class="text-title text-gray-900">{{ category.label }}</h3>
          </div>

          <!-- Skills Cards -->
          <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div
              v-for="skill in getSkillsByCategory(category.key)"
              :key="skill.id"
              class="card group flex h-full cursor-pointer flex-col p-6 transition-all hover:border-primary/20"
            >
              <!-- Skill Icon & Name -->
              <div class="flex items-center gap-3">
                <IconsIconVue
                  v-if="skill.id === 'vue'"
                  class="h-6 w-6 transition-transform group-hover:scale-110"
                />
                <IconsIconNuxt
                  v-if="skill.id === 'nuxt'"
                  class="h-6 w-6 transition-transform group-hover:scale-110"
                />
                <IconsIconTypeScript
                  v-if="skill.id === 'typescript'"
                  class="h-6 w-6 transition-transform group-hover:scale-110"
                />
                <IconsIconSystemDesign
                  v-if="skill.id === 'system-design'"
                  class="h-6 w-6 transition-transform group-hover:scale-110"
                />
                <IconsIconPython
                  v-if="skill.id === 'python'"
                  class="h-6 w-6 transition-transform group-hover:scale-110"
                />
                <IconsIconNestJS
                  v-if="skill.id === 'nestjs'"
                  class="h-6 w-6 transition-transform group-hover:scale-110"
                />
                <IconsIconAWS
                  v-if="skill.id === 'aws'"
                  class="h-6 w-6 transition-transform group-hover:scale-110"
                />
                <IconsIconDocker
                  v-if="skill.id === 'docker'"
                  class="h-6 w-6 transition-transform group-hover:scale-110"
                />
                <h4 class="font-semibold text-gray-900">{{ skill.name }}</h4>
              </div>

              <!-- Description - flex-grow to push proficiency bar to bottom -->
              <p class="mt-3 flex-grow text-sm text-gray-600">
                {{ skill.description }}
              </p>

              <!-- Proficiency Bar - always at bottom -->
              <div class="mt-4">
                <div class="flex items-center justify-between text-xs">
                  <span class="text-gray-500">{{ t('skills.proficiency') }}</span>
                  <span class="font-medium text-gray-700">{{ skill.proficiency }}%</span>
                </div>
                <div class="mt-1.5 h-1.5 overflow-hidden rounded-full bg-gray-100">
                  <div
                    class="h-full rounded-full bg-gradient-to-r from-primary to-accent-purple transition-all duration-500"
                    :style="{ width: `${skill.proficiency}%` }"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { usePortfolioStore } from '@/stores/portfolio'
import type { Skill } from '@/stores/portfolio'

const store = usePortfolioStore()
const { t } = useI18n()

// Define categories
const categories = computed(
  () =>
    [
      { key: 'frontend', label: t('skills.categories.frontend') },
      { key: 'backend', label: t('skills.categories.backend') },
      { key: 'cloud', label: t('skills.categories.cloud') },
    ] as const
)

// Type-safe filter function
const getSkillsByCategory = (categoryKey: string): Skill[] => {
  return store.skills.filter((s: Skill) => s.category === categoryKey)
}
</script>
