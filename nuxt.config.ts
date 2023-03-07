// https://nuxt.com/docs/api/configuration/nuxt-config
// nuxt.config.js
export default defineNuxtConfig({
  // ... other options
  modules: ["@pinia/nuxt"],
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      "defineStore", // import { defineStore } from 'pinia'
      ["defineStore", "definePiniaStore"], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },
});
