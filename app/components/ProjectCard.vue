<template>
  <article class="card group overflow-hidden">
    <!-- Card Header with gradient -->
    <div class="relative h-48 bg-gradient-to-br from-primary via-primary-dark to-accent-purple p-6">
      <div class="absolute inset-0 bg-[url('data:image/svg+xml,...')] opacity-10"></div>
      <div class="relative">
        <h3 class="text-xl font-bold text-white">
          {{ t(`projects.items.${project.id}.title`) }}
        </h3>

        <!-- Featured Badge -->
        <div
          v-if="project.featured"
          class="mt-3 inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 backdrop-blur-sm"
        >
          <svg class="h-4 w-4 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            />
          </svg>
          <span class="text-xs font-medium text-white">{{ t('projects.featured') }}</span>
        </div>
      </div>
    </div>

    <!-- Card Body -->
    <div class="p-6">
      <!-- Problem -->
      <div class="mb-4">
        <h4
          class="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-red-500"
        >
          <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
          {{ t('projects.problem') }}
        </h4>
        <p class="mt-2 text-sm text-gray-600">
          {{ t(`projects.items.${project.id}.problem`) }}
        </p>
      </div>

      <!-- Solution -->
      <div class="mb-6">
        <h4
          class="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-accent-green"
        >
          <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          {{ t('projects.solution') }}
        </h4>
        <p class="mt-2 text-sm text-gray-600">
          {{ t(`projects.items.${project.id}.solution`) }}
        </p>
      </div>

      <!-- Tech Stack -->
      <div>
        <h4 class="text-xs font-semibold uppercase tracking-wider text-gray-400">
          {{ t('projects.techStack') }}
        </h4>
        <div class="mt-2 flex flex-wrap gap-2">
          <span
            v-for="tech in project.techStack"
            :key="tech"
            class="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 transition-colors hover:bg-primary-light hover:text-primary"
          >
            {{ tech }}
          </span>
        </div>
      </div>
    </div>

    <!-- Card Footer -->
    <div class="border-t border-gray-100 px-6 py-4">
      <div class="flex items-center justify-between">
        <a
          v-if="project.liveUrl"
          :href="project.liveUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary-dark"
        >
          <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
          {{ t('projects.viewLive') }}
        </a>
        <a
          v-if="project.githubUrl"
          :href="project.githubUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-1.5 text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
        >
          <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
            />
          </svg>
          {{ t('projects.source') }}
        </a>
        <span v-else class="text-sm italic text-gray-400">{{ t('projects.private') }}</span>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { Project } from '@/stores/portfolio'

interface Props {
  project: Project
}

defineProps<Props>()

const { t } = useI18n()
</script>
