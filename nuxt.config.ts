// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  pages: true,
  modules: [
    'nuxt-icon',
    'nuxt-lodash',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/supabase'
  ],
  supabase: {
    redirectOptions: {
      login: '/auth',
      callback: '/',
      exclude: ['/', '/item/*']
    }
  },
  runtimeConfig: {
    public: {
      stripePk: process.env.STRIPE_PK_KEY
    }
  },
  app: {
    head: {
      script: [
        {
          src: 'https://js.stripe.com/v3/', defer: true
        }
      ],
    }
  },
  nitro: {
    preset: 'node-server',
    storage: {
      data: { driver: 'vercelKV' }
    },
    vercel: {
      config: { 
        bypassToken: process.env.VERCEL_BYPASS_TOKEN
      }
    }
  }
})
