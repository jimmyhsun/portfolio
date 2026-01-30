<template>
  <section id="contact" class="relative overflow-hidden py-24 sm:py-32">
    <!-- Background -->
    <div class="absolute inset-0 -z-10 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
    <div class="absolute right-0 top-0 -z-10 h-[500px] w-[500px] rounded-full bg-primary/10 blur-3xl"></div>
    <div class="absolute bottom-0 left-0 -z-10 h-[400px] w-[400px] rounded-full bg-accent-purple/10 blur-3xl"></div>

    <div class="mx-auto max-w-7xl px-6">
      <div class="mx-auto max-w-2xl text-center">
        <!-- Header -->
        <span class="inline-block rounded-full bg-primary/20 px-4 py-1.5 text-sm font-medium text-primary-light">
          {{ t('contact.badge') }}
        </span>
        <h2 class="text-headline mt-4 text-white">
          {{ t('contact.title') }}
        </h2>
        <p class="mt-4 text-lg text-gray-300">
          {{ t('contact.subtitle') }}
        </p>

        <!-- CTA Button -->
        <div class="mt-10">
          <a 
            :href="`mailto:${store.profile.email}`"
            class="group inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-lg font-semibold text-gray-900 shadow-stitch-xl transition-all hover:bg-primary-light hover:text-primary"
          >
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            {{ t('contact.cta') }}
            <svg class="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        <!-- Contact Info -->
        <div class="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-gray-400">
          <div class="flex items-center gap-2">
            <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>{{ store.profile.email }}</span>
          </div>
          <div class="flex items-center gap-2">
            <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>{{ store.profile.location }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { usePortfolioStore } from '@/stores/portfolio'

const store = usePortfolioStore()
const { t } = useI18n()
</script>
