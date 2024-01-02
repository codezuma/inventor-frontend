/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors:{
        "select-color":"var(--select-color)"
      }
    },
  },
  plugins: [],}

