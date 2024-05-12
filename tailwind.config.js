/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlack: '#111213',
        customHover: '#7DDF07'
      },
      fontFamily: {
        secular: ['Secular One']
      }
    },
  },
  plugins: [],
}