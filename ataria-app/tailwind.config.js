/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors:{
        'ataria-color': '#2BE1CC'
      },
      margin:{
        'custom': '80px'
      },
      width:{
        '50%' : '50%'
      },
      height: {
        '112px' : '112px'
      },
      fontFamily: {
        custom: ['Barlow Semi Condensed', 'sans-serif']
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

