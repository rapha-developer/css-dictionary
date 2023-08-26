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
  plugins: [],
}

