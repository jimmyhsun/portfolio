<template>
  <div class="min-h-screen bg-surface text-gray-800 antialiased">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
// Global SEO Configuration
useSeoMeta({
  title: 'Jimmy | 資深全端架構師',
  titleTemplate: '%s | Jimmy Portfolio',
  ogTitle: 'Jimmy | 資深全端架構師',
  description: '專業全端架構師，專精於 Vue3、Nuxt、Python、AWS 和 Docker。打造驅動商業成長的可擴展系統。',
  ogDescription: '專業全端架構師，專精於 Vue3、Nuxt、Python、AWS 和 Docker。打造驅動商業成長的可擴展系統。',
  ogImage: '/og-image.png',
  ogType: 'website',
  ogLocale: 'zh_TW',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Jimmy | 資深全端架構師',
  twitterDescription: '專業全端架構師，專精於 Vue3、Nuxt、Python、AWS 和 Docker。',
  twitterImage: '/og-image.png',
  robots: 'index, follow',
})

// JSON-LD Structured Data for SEO
useHead({
  link: [
    { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Noto+Sans+TC:wght@400;500;600;700&display=swap' },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Jimmy',
        url: 'https://yoursite.com',
        jobTitle: 'Senior Full-Stack Architect',
        description: 'Expert in building scalable systems with Vue3, Nuxt, Python, AWS, and Docker',
        knowsAbout: [
          'Vue.js',
          'Nuxt.js',
          'TypeScript',
          'Python',
          'NestJS',
          'AWS',
          'Docker',
          'System Design',
          'Cloud Architecture',
        ],
        sameAs: [
          'https://github.com/yourprofile',
          'https://linkedin.com/in/yourprofile',
        ],
      }),
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        name: 'Jimmy Freelance Architecture',
        description: 'Full-Stack Architecture and Cloud Solutions',
        provider: {
          '@type': 'Person',
          name: 'Jimmy',
        },
        areaServed: 'Worldwide',
        serviceType: [
          'Web Application Development',
          'Cloud Architecture',
          'System Design',
          'Technical Consulting',
        ],
      }),
    },
  ],
})
</script>

<style>
/* Page transitions */
.page-enter-active,
.page-leave-active {
  transition: all 0.3s ease-out;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
