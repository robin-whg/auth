module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: 'media', // or 'media' or 'class'
  theme: {
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
