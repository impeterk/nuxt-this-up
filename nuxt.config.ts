import tailwindcss from '@tailwindcss/vite'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  vite: {
    plugins: [tailwindcss()],
  },
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/hints',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@comark/nuxt',
    '@nuxtjs/seo',
    'nuxt-auth-utils',
    '@nuxthub/core',
  ],
  css: ['~/assets/css/main.css'],
  fonts: {
    families: [{ name: 'Geist Mono Variable', provider: 'npm' }],
  },
  eslint: {
    config: {
      standalone: false,
    },
  },
  site: {
    name: 'localhost:3000',
    url: 'http://localhost:3000',
  },
  nitro: {
    experimental: {
      database: true,
    },
    database: {
      default: {
        connector: 'libsql',
        options: {
          url: 'libsql://db0-impeterk.aws-eu-west-1.turso.io',
          authToken: process.env.AUTH_TOKEN,
        },
      },
    },
    devDatabase: {
      default: {
        connector: 'bun-sqlite',
        options: {
          path: './db/dev.bun.sqlite',
        },
      },
    },
  },
  experimental: {
    viewTransition: true,
  },
})
