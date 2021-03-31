const colors = require('tailwindcss/colors')
module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        white: colors.white,
        gray: colors.trueGray,
        blue: colors.blue,
        green: colors.green,
        indigo: colors.indigo,
        red: colors.rose,
        yellow: colors.amber,
      },
    extend: {
      colors: {
        "primary-color": "var(--primary-color)",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
