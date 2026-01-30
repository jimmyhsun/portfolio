<template>
  <header class="sticky top-0 z-50 border-b border-gray-200/50 bg-white/95 backdrop-blur-md">
    <nav class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
      <!-- Logo -->
      <a href="/" class="text-xl font-bold text-gray-900 transition-colors hover:text-primary">
        Jimmy
        <span class="text-primary">.</span>
      </a>

      <!-- Desktop Navigation Links -->
      <div class="hidden items-center gap-6 md:flex">
        <a
          href="#about"
          class="text-sm font-medium text-gray-600 transition-colors hover:text-primary"
        >
          {{ t('nav.about') }}
        </a>
        <a
          href="#skills"
          class="text-sm font-medium text-gray-600 transition-colors hover:text-primary"
        >
          {{ t('nav.skills') }}
        </a>
        <a
          href="#projects"
          class="text-sm font-medium text-gray-600 transition-colors hover:text-primary"
        >
          {{ t('nav.projects') }}
        </a>

        <!-- Language Switcher -->
        <LanguageSwitcher />

        <a
          href="#contact"
          class="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-white shadow-stitch transition-all hover:bg-primary-dark hover:shadow-stitch-lg"
        >
          {{ t('nav.contact') }}
        </a>
      </div>

      <!-- Mobile Menu Button -->
      <button
        type="button"
        class="rounded-stitch-sm p-2 text-gray-600 transition-colors hover:bg-gray-100 md:hidden"
        aria-label="Toggle menu"
        @click="isMobileMenuOpen = !isMobileMenuOpen"
      >
        <!-- Hamburger Icon -->
        <svg
          v-if="!isMobileMenuOpen"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        <!-- Close Icon -->
        <svg v-else class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </nav>

    <!-- Mobile Menu Dropdown -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div v-if="isMobileMenuOpen" class="border-t border-gray-100 bg-white px-6 py-4 md:hidden">
        <div class="flex flex-col gap-4">
          <a
            href="#about"
            class="text-base font-medium text-gray-600 transition-colors hover:text-primary"
            @click="closeMobileMenu"
          >
            {{ t('nav.about') }}
          </a>
          <a
            href="#skills"
            class="text-base font-medium text-gray-600 transition-colors hover:text-primary"
            @click="closeMobileMenu"
          >
            {{ t('nav.skills') }}
          </a>
          <a
            href="#projects"
            class="text-base font-medium text-gray-600 transition-colors hover:text-primary"
            @click="closeMobileMenu"
          >
            {{ t('nav.projects') }}
          </a>

          <!-- Mobile Language Switcher -->
          <div class="flex items-center gap-2 pt-2">
            <span class="text-sm text-gray-400">{{ t('nav.language') || '語言' }}:</span>
            <LanguageSwitcher />
          </div>

          <!-- Mobile CTA Button -->
          <a
            href="#contact"
            class="mt-2 rounded-full bg-primary px-5 py-3 text-center text-sm font-medium text-white shadow-stitch transition-all hover:bg-primary-dark"
            @click="closeMobileMenu"
          >
            {{ t('nav.contact') }}
          </a>
        </div>
      </div>
    </Transition>
  </header>

  <!-- Mobile Menu Backdrop (click to close) -->
  <Transition
    enter-active-class="transition duration-200 ease-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition duration-150 ease-in"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-if="isMobileMenuOpen"
      class="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
      @click="closeMobileMenu"
    ></div>
  </Transition>
</template>

<script setup lang="ts">
const { t } = useI18n()

// Mobile menu state
const isMobileMenuOpen = ref(false)

// Close mobile menu
const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

// Close mobile menu on route change
const route = useRoute()
watch(
  () => route.path,
  () => {
    closeMobileMenu()
  }
)
</script>
