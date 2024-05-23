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
        customHover: '#7DDF07',
        curtomButton: '#6AD023'
      },
      fontFamily: {
        secular: ['Secular One'],
        roboto: ['Roboto']
      },
      backgroundImage: {
        customServer: "url('./src/pages/Login/assets/servers.jpg')",
      },
      backgroundColor: {
        'green-70': 'rgba(125, 223, 7, 0.7)',
      },
    
    },
  },
  plugins: [],
}