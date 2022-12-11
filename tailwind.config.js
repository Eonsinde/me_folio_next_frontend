/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'app-porange': '#EC994B', // primary
        'app-sorange': '#FBEBDB', // secondary
        'app-dark': '#222224', // secondary
      }
    },
    fontFamily: {
      'dm-sans': ['Playfair Display', 'sans-serif'],
    },
  },
  plugins: [],
}