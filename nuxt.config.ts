// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Enable SSR (default, but explicit for clarity)
  ssr: true,

  // Static generation for GitHub Pages
  nitro: {
    preset: 'github-pages',
  },

  // Nuxt 4 future compatibility
  future: {
    compatibilityVersion: 4,
  },

  // GitHub Pages base URL (uncomment and set your repo name when deploying)
  // app: {
  //   baseURL: '/portfolio/', // Replace 'portfolio' with your repo name
  // },

  // Modules
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', '@nuxtjs/i18n'],

  // App Configuration
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
  },

  // i18n Configuration
  i18n: {
    locales: [
      { code: 'zh-TW', name: '中文', file: 'zh-TW.json' },
      { code: 'en', name: 'English', file: 'en.json' },
    ],
    defaultLocale: 'zh-TW',
    lazy: true,
    langDir: 'locales',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
  },

  // Tailwind CSS configuration
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
  },

  // TypeScript configuration
  typescript: {
    strict: true,
    typeCheck: false,
  },

  // Dev tools
  devtools: { enabled: true },

  compatibilityDate: '2025-01-29',
})
