/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        body: {
          100: 'hsl(var(--clr-body-color) / <alpha-value> )',
          200: 'hsl(var(--clr-body-two-color) / <alpha-value> )',
        },
        primary: 'hsl(var(--clr-primary-color) / <alpha-value> )',
        secondary: 'hsl(var(--clr-secondary-color) / <alpha-value> )',
        tertiary: 'hsl(var(--clr-tertiary-color) / <alpha-value> )',
        borderLine: 'hsl(var(--clr-border-color) / <alpha-value> )',
        dark: 'hsl(var(--clr-dark-color) / <alpha-value> )',
        grey: {
          100: 'hsl(var(--clr-grey-100) / <alpha-value> )',
          200: 'hsl(var(--clr-grey-200) / <alpha-value> )',
          300: 'hsl(var(--clr-grey-300) / <alpha-value> )',
          400: 'hsl(var(--clr-grey-400) / <alpha-value> )'
        }
      },
      borderRadius: {
        '2mxl': '1.25rem'
      },
      fontFamily: {
        'outfit': ['Outfit', 'system-ui', 'mono', 'sans']
      },
      fontSize: {
        'sm': '0.938rem',
        '6xl': '3.375rem'
      },
      lineHeight: {
        'normal': '1.4'
      },
    },
  },
  plugins: [],
}

