// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  plugins: ["~/plugins/fontawesome.js"],
  vite: {
    plugins: [tailwindcss()],
  },
  modules: ["@nuxt/ui", "@nuxtjs/leaflet", "@nuxt/fonts"],
  fonts: {
    families: [
      {
        name: "Raleway",
        weights: ["400", "700"],
        provider: "google",
      },
      {
        name: "Ubuntu",
        weights: ["400", "700"],
        provider: "google",
      },
      {
        name: "Cardo",
        weights: ["400", "700"],
        provider: "google",
      },
    ],
  },
});
