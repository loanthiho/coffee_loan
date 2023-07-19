const defaultTheme = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    screens: {
      'xs': '480px',
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily:{
        Karla: ['Karla','sans serif']
      },
      colors:{
        'light-coffee': "#c89f94",
        'coffee':{
          50: "#e8d6d0",
          200: "#c89f94",
          400: "#a25f4b",
          600: "#744b838"
        } 

      },
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-100%);' },
          '100%': { transform: 'translateY(0);' },
        },
        fadeIn:{fom: {opacity: 0}, to:{opacity: 1}}
      },
      animation:{
        slideDown: "sliderDown.5s ease-in-out",
        fadeIn: "sliderDown.5s ease-in-out"
      }
       
    },
    backgroundImage:{
      'slider-bg': 'url("./img/slider_2-bg.jpg")'
    }
  },
  plugins: [],
}

