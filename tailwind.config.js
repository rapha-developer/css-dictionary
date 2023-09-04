import plugin from 'tailwindcss/plugin';
import colors from 'tailwindcss/colors';
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      primary: {
        100: 'hsl(var(--clr-primary-100) / <alpha-value>)',
        200: 'hsl(var(--clr-primary-200) / <alpha-value>)',
        300: 'hsl(var(--clr-primary-300) / <alpha-value>)',
        400: 'hsl(var(--clr-primary-400) / <alpha-value>)',
        500: 'hsl(var(--clr-primary-500) / <alpha-value>)',
      },
      accent: {
        100: 'hsl(var(--clr-accent-100) / <alpha-value>)',
        200: 'hsl(var(--clr-accent-200) / <alpha-value>)',
        300: 'hsl(var(--clr-accent-300) / <alpha-value>)',
        400: 'hsl(var(--clr-accent-400) / <alpha-value>)',
      },
      backgrounds: {
        100: 'hsl(var(--clr-accent-100) / 0.06)',
        200: 'hsl(var(--clr-accent-200) / 0.04)',
        300: 'hsl(var(--clr-primary-100) / 0.62)',
        400: 'hsl(var(--clr-primary-500) / 0.62)',
        500: 'hsl(var(--clr-accent-500) / 0.69)',
      },
    },
    fontFamily: {
      'inter': ['Inter', 'system-ui', 'sans-serif'],
      'red-hart': ['Red Hat Display', 'system-ui', 'sans-serif']
    },
    extend: {},
  },
  plugins: [
    plugin(function ({ addComponents, addUtilities, theme }) {
      addComponents({
        '.propertyCard-container::-webkit-scrollbar': {
          '@apply w-2.5 h-2.5':{}
        },
        '.propertyCard-container::-webkit-scrollbar-thumb': {
          '@apply bg-accent-300 rounded-[10px] elevation-thumb-1': {}
        },
        '.propertyCard-container::-webkit-scrollbar-track': {
          '@apply bg-thumb-1': {}
        },
        '.propertyCard': {
          '@apply h-80 w-96 min-w-[250px] p-6 bg-white duration-200 snap-start clear-both relative cursor-pointer': {}
        },
        '.propertyCard-header': {
          '@apply mb-auto': {}
        },
        '.propertyCard-date': {
          '@apply font-red-hart text-sm font-normal mb-2 text-primary-100': {}
        },
        '.propertyCard-name': {
          '@apply font-red-hart text-xl font-semibold text-primary-200 duration-200': {}
        },
        '.propertyCard-name:hover': {
          '@apply text-accent-300': {}
        },
        '.propertyCard-description': {
          '@apply font-inter text-sm font-medium text-primary-100': {}
        },
      }),
      addUtilities({
        '.elevation-card-1': {
          boxShadow: `-1rem 0 2rem ${theme('colors.gray.300')}`, // elevation-1
        },
        '.elevation-thumb-1': {
          boxShadow: `inset 2px 2px 2px ${theme('colors.backgrounds.500')}, inset -2px -2px 2px ${theme('colors.accent.300')}`
        },
        '.bg-thumb-1': {
          background: `linear-gradient(90deg, ${theme('colors.backgrounds.500')}, ${theme('colors.backgrounds.500')} 1px, ${theme('colors.gray.200')} 0, ${theme('colors.gray.200')})`
        },
        '.propertyCard:focus-within~.propertyCard': {
          '@apply translate-x-[8rem]': {}
        },
        '.propertyCard:hover~.propertyCard': {
          '@apply translate-x-[8rem]': {}
        },
        '.propertyCard:hover': {
          '@apply translate-y-[-1rem]': {}
        },
        '.propertyCard:not(:first-child)': {
          '@apply -ml-32': {}
        },
      })
    }),
    
  ],
}

