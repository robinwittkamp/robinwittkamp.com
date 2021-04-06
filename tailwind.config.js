/* eslint-disable import/no-extraneous-dependencies */
const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      'blue-gray': colors.blueGray,
      'cool-gray': colors.coolGray,
      gray: colors.Gray,
      'true-gray': colors.trueGray,
      'warm-gray': colors.warmGray,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
