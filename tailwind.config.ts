import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial-hero':
          'radial-gradient(ellipse 50% 50% at 50% 0%, var(--tw-gradient-stops))',
      },
      colors: {
        robin: {
          red: '#FF3A2C',
          orange: '#FFA237',
          yellow: '#FFC929',
        },
        rusty: {
          950: '#141313',
          900: '#1B1A19',
          800: '#2A2827',
          700: '#464343',
          600: '#5B5856',
          500: '#7A7775',
          400: '#AAA7A5',
          300: '#D8D6D4',
          200: '#E7E6E4',
          100: '#F5F5F4',
          50: '#FAFAFA',
        },
      },
      fontFamily: {
        gilroy: ['var(--font-gilroy)', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [forms(), typography()],
} satisfies Config;
