<template>
  <section id="projects" class="relative py-24 sm:py-12">
    <!-- Background -->
    <div class="absolute inset-0 -z-10 bg-surface-dim"></div>

    <div class="mx-auto max-w-7xl px-6">
      <!-- Section Header -->
      <div class="mx-auto max-w-2xl text-center">
        <span
          class="inline-block rounded-full bg-accent-purple/10 px-4 py-1.5 text-sm font-medium text-accent-purple"
        >
          {{ t('projects.badge') }}
        </span>
        <h2 class="text-headline mt-4 text-gray-900">
          {{ t('projects.title') }}
        </h2>
        <p class="mt-4 text-lg text-gray-600">
          {{ t('projects.subtitle') }}
        </p>
      </div>

      <!-- Projects Grid -->
      <div class="mt-16 grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
        <ProjectCard
          v-for="project in store.featuredProjects"
          :key="project.id"
          :project="project"
          class="animate-slide-up"
        />
      </div>

      <!-- View All Link -->
      <!-- <div class="mt-12 text-center">
        <a 
          href="#" 
          class="inline-flex items-center gap-2 text-lg font-medium text-primary transition-colors hover:text-primary-dark"
        >
          {{ t('projects.viewAll') }}
          <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div> -->
    </div>
  </section>
</template>

<script setup lang="ts">
import { usePortfolioStore } from '@/stores/portfolio'

const store = usePortfolioStore()
const { t } = useI18n()
</script>
