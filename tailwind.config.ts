import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },

      textColor: {
        logo: '#131313',
        sidebarMenu: '#5c5e64',
      },

      colors: {
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
      },
    },
  },
  plugins: [],
}
export default config
