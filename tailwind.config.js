/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Agdasima', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        rose: colors.rose
      }
    },
  },
  plugins: [],
}
