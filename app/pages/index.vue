<template>
  <div>
    <!-- Hero Section -->
    <HeroSection />

    <!-- About Section (Brief) -->
    <section id="about" class="py-12 sm:py-18">
      <div class="mx-auto max-w-7xl px-6">
        <div class="mx-auto max-w-3xl text-center">
          <span
            class="inline-block rounded-full bg-accent-orange/10 px-4 py-1.5 text-sm font-medium text-accent-orange"
          >
            {{ t('about.badge') }}
          </span>
          <h2 class="text-headline mt-4 text-gray-900">
            {{ t('about.title') }}
          </h2>
          <p class="mt-6 text-lg leading-relaxed text-gray-600">
            {{ t('about.bio1') }}
          </p>
          <p class="mt-4 text-lg leading-relaxed text-gray-600">
            {{ t('about.bio2') }}
          </p>
        </div>

        <!-- Stats -->
        <div class="mt-16 grid grid-cols-2 gap-8 lg:grid-cols-4">
          <div class="card p-8 text-center">
            <p class="text-4xl font-bold text-primary">4+</p>
            <p class="mt-2 text-sm text-gray-600">{{ t('about.stats.years') }}</p>
          </div>
          <div class="card p-8 text-center">
            <p class="text-4xl font-bold text-primary">50+</p>
            <p class="mt-2 text-sm text-gray-600">{{ t('about.stats.projects') }}</p>
          </div>
          <div class="card p-8 text-center">
            <p class="text-4xl font-bold text-primary">30+</p>
            <p class="mt-2 text-sm text-gray-600">{{ t('about.stats.clients') }}</p>
          </div>
          <div class="card p-8 text-center">
            <p class="text-4xl font-bold text-primary">99%</p>
            <p class="mt-2 text-sm text-gray-600">{{ t('about.stats.satisfaction') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <SkillsGrid />

    <!-- Projects Section -->
    <ProjectShowcase />

    <!-- Contact Section -->
    <ContactSection />
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

// Page-level SEO (inherits from app.vue but can override)
useSeoMeta({
  title: 'Home',
})
</script>
