/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBlue: '#0057FF'
      },
      fontFamily: {
        'sans': ['Open Sans', 'sans-serif'], 
        'poppins': ['Poppins', 'sans-serif'], 
      },
    },
  },
  plugins: [],
}