import { nextui } from '@nextui-org/theme'
import type { Config } from 'tailwindcss'

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './node_modules/@nextui-org/theme/dist/components/spinner.js',
  ],
  prefix: '',
  theme: {
    extend: {
      spacing: {
        '128': '512px',
      },
      textColor: {
        logo: '#131313',
        strong: '#333437',
        primary: '#5c5e64',
        sidebar: {
          DEFAULT: '#5c5e64',
          hightlight: '#000',
        },
        currency: '#43B682',
      },
      borderColor: {
        primary: '#d9d9d9',
        strong: '#333437',
        tabActive: '#F28000',
      },
      colors: {
        primary: '#F28000',
        secondary: '#43B682',
        contrast: '#F28000',
        danger: '#A94442',
        warning: '#F28000',
        divisor: '#d9d9d9',
        button: {
          primary: {
            DEFAULT: '#F28000',
            hover: '#df7400',
          },
          secondary: {
            DEFAULT: '#43B682',
            hover: '#3DA676',
          },
          filter: {
            DEFAULT: '#43B682',
            hover: '#3DA676',
          },
        },
        badge: {
          DEFAULT: '#F28000',
        },
        placeholder: {
          DEFAULT: '#ABB0B4',
        },

        gray: {
          50: '#fafafa',
          100: '#f6f6f6',
          200: '#d9d9d9',
          300: '#929397',
          400: '#7d7e83',
          500: '#5c5e64',
          600: '#54565b',
          700: '#414347',
          800: '#333437',
          900: '#27272a',
        },
        green: {
          50: '#ECF8F3',
          100: '#C5E8D8',
          200: '#A9DDC6',
          300: '#81CEAB',
          400: '#69C59B',
          500: '#43B682',
          600: '#3DA676',
          700: '#30815C',
          800: '#256448',
          900: '#1C4C37',
        },
        red: {
          50: '#F6ECEC',
          100: '#E4C5C4',
          200: '#D7A9A8',
          300: '#C58280',
          400: '#BA6968',
          500: '#A94442',
          600: '#9A3E3C',
          700: '#78302F',
          800: '#5D2524',
          900: '#471D1C',
        },
        blue: {
          50: '#f5f5ff',
          100: '#f0efff',
          200: '#e1deff',
          300: '#9e96ff',
          400: '#8e87e6',
          500: '#7e78cc',
          600: '#7771bf',
          700: '#5f5a99',
          800: '#474473',
          900: '#373559',
        },
      },
      boxShadow: {
        custom: '0 2px 18px -2px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    require('tailwindcss-animate'),
    nextui(),
  ],
} satisfies Config

export default config
