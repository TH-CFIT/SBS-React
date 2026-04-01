/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'dhl-red': '#D40511',
        'dhl-yellow': '#FFCC00',
        'dhl-dark-red': '#AB000D',
      },
      fontFamily: {
        sans: ['Frutiger', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
