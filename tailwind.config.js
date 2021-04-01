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
        primary: {
          lightest: 'var(--primary-lightest)',
          light: 'var(--primary-light)',
          DEFAULT: 'var(--primary)',
          dark: 'var(--primary-dark)',
          darkest: 'var(--primary-darkest)'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
