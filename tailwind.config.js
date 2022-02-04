/* eslint-disable import/no-extraneous-dependencies */
// const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Gilroy', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
