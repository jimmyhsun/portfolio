<template>
  <section id="hero" class="relative overflow-hidden">
    <!-- Background Gradient -->
    <div class="absolute inset-0 -z-10">
      <div class="absolute inset-0 bg-gradient-to-br from-primary-light via-white to-purple-50"></div>
      <div class="absolute right-0 top-0 -z-10 h-[600px] w-[600px] rounded-full bg-primary/5 blur-3xl"></div>
      <div class="absolute bottom-0 left-0 -z-10 h-[400px] w-[400px] rounded-full bg-accent-purple/5 blur-3xl"></div>
    </div>

    <div class="mx-auto max-w-7xl px-6 py-12 sm:py-24 lg:py-32">
      <div class="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <!-- Content -->
        <div class="animate-slide-up text-center lg:text-left">
          <!-- Status Badge -->
          <div class="mb-6 inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2">
            <span class="relative flex h-2.5 w-2.5">
              <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
              <span class="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500"></span>
            </span>
            <span class="text-sm font-medium text-green-700">{{ t('hero.available') }}</span>
          </div>

          <!-- Headline -->
          <h1 class="text-display text-gray-900">
            {{ t('hero.greeting') }} <span class="text-primary">{{ store.profile.name }}</span>
          </h1>
          <p class="text-headline mt-4 text-gray-700">
            {{ t('hero.title') }}
          </p>
          
          <!-- Tagline -->
          <p class="mt-6 text-lg text-gray-600 sm:text-xl">
            {{ t('hero.tagline') }}
          </p>

          <!-- CTA Buttons -->
          <div class="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
            <a 
              href="#projects"
              class="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-lg font-semibold text-white shadow-stitch-lg transition-all hover:bg-primary-dark hover:shadow-stitch-xl sm:w-auto"
            >
              {{ t('hero.viewWork') }}
              <svg 
                class="h-5 w-5 transition-transform group-hover:translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a 
              href="#contact"
              class="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-gray-300 bg-white px-8 py-4 text-lg font-semibold text-gray-700 transition-all hover:border-primary hover:text-primary sm:w-auto"
            >
              {{ t('hero.getInTouch') }}
            </a>
          </div>

          <!-- Trust Indicators -->
          <div class="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500 lg:justify-start">
            <div class="flex items-center gap-2">
              <svg class="h-5 w-5 text-accent-green" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span>{{ t('hero.experience') }}</span>
            </div>
            <div class="flex items-center gap-2">
              <svg class="h-5 w-5 text-accent-green" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span>{{ t('hero.projects') }}</span>
            </div>
            <div class="flex items-center gap-2">
              <svg class="h-5 w-5 text-accent-green" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span>{{ t('hero.remote') }}</span>
            </div>
          </div>
        </div>

        <!-- Visual Element / Avatar Area -->
        <div class="relative animate-fade-in lg:order-last">
          <div class="relative mx-auto aspect-square max-w-md">
            <!-- Decorative rings -->
            <div class="absolute inset-0 animate-pulse rounded-full border-2 border-dashed border-primary/20"></div>
            <div class="absolute inset-4 rounded-full border-2 border-primary/30"></div>
            
            <!-- Avatar placeholder -->
            <div class="absolute inset-8 flex items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent-purple shadow-stitch-xl">
              <span class="text-8xl font-bold text-white">{{ store.profile.name.charAt(0) }}</span>
            </div>

            <!-- Floating badges -->
            <div class="absolute -right-4 top-12 rounded-stitch bg-white px-4 py-2 shadow-stitch-lg">
              <div class="flex items-center gap-2">
                <IconsIconRocket class="h-6 w-6 text-primary" />
                <span class="font-medium text-gray-700">Vue 3</span>
              </div>
            </div>
            <div class="absolute -left-4 top-1/2 rounded-stitch bg-white px-4 py-2 shadow-stitch-lg">
              <div class="flex items-center gap-2">
                <IconsIconCloud class="h-6 w-6 text-orange-500" />
                <span class="font-medium text-gray-700">AWS</span>
              </div>
            </div>
            <div class="absolute -right-4 bottom-20 rounded-stitch bg-white px-4 py-2 shadow-stitch-lg">
              <div class="flex items-center gap-2">
                <IconsIconDocker class="h-6 w-6" />
                <span class="font-medium text-gray-700">Docker</span>
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

const store = usePortfolioStore()
const { t } = useI18n()
</script>
