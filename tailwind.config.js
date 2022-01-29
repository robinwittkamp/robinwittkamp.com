/* eslint-disable import/no-extraneous-dependencies */
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      'blue-gray': colors.slate,
      'cool-gray': colors.gray,
      gray: colors.gray,
      'true-gray': colors.neutral,
      'warm-gray': colors.stone,
      red: colors.red,
      orange: colors.orange,
      yellow: colors.yellow,
      green: colors.green,
      blue: colors.blue,
    },
    extend: {},
  },
  plugins: [],
};
