/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      fontFamily: {
        'gill': ['Gill Sans', 'Gill Sans MT', 'Calibri', 'Trebuchet MS', 'sans-serif'],
      },
      screens: {
        'xsm': '375px', // Define a new screen size
        'xxs' : '320px',
        'small' : '200px',
      },

    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.relative-plus::after': {
          content: '"+"',
          fontSize: '34px',
          position: 'absolute',
          right: '20px',
          transition: 'transform 0.5s',
        },
      })
    }
  ],
}

