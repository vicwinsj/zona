/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{vue,js,ts}", "./nuxt.config.{js,ts}"],
  theme: {
    extend: {
      colors: {
        copper: "#B87333",
        forest: "#0D3B2E",
      },
    },
  },
  plugins: [],
};
