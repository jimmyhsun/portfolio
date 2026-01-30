<template>
  <div class="flex min-h-screen flex-col">
    <!-- Navigation -->
    <AppHeader />

    <!-- Main Content -->
    <main class="flex-1">
      <slot />
    </main>

    <!-- Footer -->
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
// Layout is now clean and simple
// All logic is encapsulated in child components:
// - AppHeader: Navigation + Mobile menu
// - AppFooter: Footer content
// - LanguageSwitcher: Language toggle (used by AppHeader)
</script>
