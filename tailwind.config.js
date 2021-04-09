const colors = require('tailwindcss/colors')
module.exports = {
  important: true,
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        white: colors.white,
        gray: colors.gray,
        blue: colors.blue,
        green: colors.emerald,
        indigo: colors.indigo,
        red: colors.red,
        yellow: colors.yellow,
        orange: colors.orange
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
