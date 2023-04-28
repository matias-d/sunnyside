/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'moderate-blue' : '#19536b',
        'dark-blue' : '#23303e',
        'dark-gray-blue' : '#818498',
        'dark-cyan' : '#25564b',
        'moderate-cyan' : '#458c7e',
        'gray-blue' : '#5a636c',
        'gray-text' : '#a7abae',
        'dark-desatured' : '#23303e',
        'cyan-light' : '#8BD3C5'
      }
    },
    fontFamily : {
      'barlow' : ['Barlow', 'sans-serif'],
      'fraunces' : ['Fraunces', 'serif']
    }
  },
  plugins: [],
}