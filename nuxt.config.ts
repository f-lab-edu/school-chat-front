// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  css: ["vuetify/styles", "@mdi/font/css/materialdesignicons.min.css"],
  build: {
    transpile: ["vuetify"],
  },
  devtools: { enabled: true },

  modules: [
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/scripts",
    "@nuxt/test-utils",
    "@nuxt/ui",
    "@nuxt/content",
    "@nuxt/image",
    "@pinia/nuxt",
  ],
});
