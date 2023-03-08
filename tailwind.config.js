/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary-color": "var(--vt-c-red)",
        "secondary-color": "var(--vt-c-pink)",
        "inner-color": "var(--vt-c-white-soft)",
        "background-color": "var(--vt-c-white)",
        "backdrop-color": "var(--vt-c-white-mute)",
        "dark-inner-color": "var(--vt-c-black-mute)",
        "dark-background-color": "var(--vt-c-black)",
        "dark-backdrop-color": "var(--vt-c-black-soft)",
      },
    },
  },
  plugins: [],
};
