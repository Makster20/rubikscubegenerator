/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.{html,js}',
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['suse']
      },
      fontSize: {
        xxs: '10px'
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}

