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
  variants: {
    extend: {
      outline: ["hover", "focus"],
    },
  },
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary-color": "var(--vt-c-red)",
        "secondary-color": "var(--vt-c-pink)",
        "inner-color": "var(--vt-c-white-soft)",
        "background-color": "var(--vt-c-white)",
        "backdrop-color": "var(--vt-c-white-mute)",
        "close-color": "var(--vt-c-white-close)",
        "dark-inner-color": "var(--vt-c-black-mute)",
        "dark-background-color": "var(--vt-c-black)",
        "dark-backdrop-color": "var(--vt-c-black-soft)",
        "dark-close-color": "var(--vt-c-black-close)",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
