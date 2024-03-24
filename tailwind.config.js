/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js}",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        'beis': '#FFEED9',
        'blue': '#0025CE',
        'green': '#00BF63',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}