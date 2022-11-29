/* eslint-disable import/no-extraneous-dependencies */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    // fontFamily: {
    //   gilroy: ['Gilroy', ...defaultTheme.fontFamily.sans],
    // },
    extend: {
      backgroundImage: {
        'gradient-radial-hero':
          'radial-gradient(ellipse 80% 50% at 50% -20%, var(--tw-gradient-stops))',
      },
      colors: {
        robin: {
          red: '#FF3A2C',
          orange: '#FFA237',
          yellow: '#FFC929',
        },
      },
      fontFamily: {
        gilroy: ['var(--font-gilroy)', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
