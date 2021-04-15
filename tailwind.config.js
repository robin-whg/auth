const colors = require("tailwindcss/colors");
module.exports = {
  important: true,
  purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
  darkMode: "class", // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      blue: colors.blue,
      green: colors.emerald,
      indigo: colors.indigo,
      red: colors.red,
      yellow: colors.yellow,
    },
    extend: {
      colors: {
        primary: {
          lightest: colors.indigo[100],
          light: colors.indigo[400],
          DEFAULT: colors.indigo[500],
          dark: colors.indigo[600],
          darkest: colors.indigo[800],
        },
        secondary: {
          lightest: colors.gray[200],
          light: colors.gray[400],
          DEFAULT: colors.gray[500],
          dark: colors.gray[600],
          darkest: colors.gray[700],
        },
        success: {
          lightest: colors.emerald[100],
          light: colors.emerald[400],
          DEFAULT: colors.emerald[500],
          dark: colors.emerald[600],
          darkest: colors.emerald[800],
        },
        info: {
          lightest: colors.blue[100],
          light: colors.blue[400],
          DEFAULT: colors.blue[500],
          dark: colors.blue[600],
          darkest: colors.blue[800],
        },
        danger: {
          lightest: colors.red[100],
          light: colors.red[400],
          DEFAULT: colors.red[500],
          dark: colors.red[600],
          darkest: colors.red[800],
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
