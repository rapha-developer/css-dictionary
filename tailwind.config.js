const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'bounce-slow': 'bounce 3s linear backwards',
        'ping-slow': 'ping 2s linear backwards',
        'spin-slow': 'spin 1.25s linear backwards',
        'fadeIn-slow': 'fadeIn 1.25s linear forwards',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        blue: {
          gray: {
            100: 'hsl(var(--clr-gray-blue-100) / <alpha-value>)', 
            200: 'hsl(var(--clr-gray-blue-200) / <alpha-value>)', 
            300: 'hsl(var(--clr-gray-blue-300) / <alpha-value>)', 
            400: 'hsl(var(--clr-gray-blue-400) / <alpha-value>)', 
            500: 'hsl(var(--clr-gray-blue-500) / <alpha-value>)', 
            600: 'hsl(var(--clr-gray-blue-600) / <alpha-value>)', 
            700: 'hsl(var(--clr-gray-blue-700) / <alpha-value>)', 
            800: 'hsl(var(--clr-gray-blue-800) / <alpha-value>)', 
            900: 'hsl(var(--clr-gray-blue-900) / <alpha-value>)', 
          }
        },
        dark: {
          100: 'hsl(var(--clr-dark-100) / <alpha-value>)', 
        },
        emerald: {
          50: 'hsl(var(--clr-emerald-50) / <alpha-value>)', 
          100: 'hsl(var(--clr-emerald-100) / <alpha-value>)', 
          200: 'hsl(var(--clr-emerald-200) / <alpha-value>)', 
          300: 'hsl(var(--clr-emerald-300) / <alpha-value>)', 
          400: 'hsl(var(--clr-emerald-400) / <alpha-value>)', 
          500: 'hsl(var(--clr-emerald-500) / <alpha-value>)', 
          600: 'hsl(var(--clr-emerald-600) / <alpha-value>)', 
          700: 'hsl(var(--clr-emerald-700) / <alpha-value>)', 
          800: 'hsl(var(--clr-emerald-800) / <alpha-value>)', 
          900: 'hsl(var(--clr-emerald-900) / <alpha-value>)', 
        },
        teal: {
          50: 'hsl(var(--clr-teal-50) / <alpha-value>)', 
          100: 'hsl(var(--clr-teal-100) / <alpha-value>)', 
          200: 'hsl(var(--clr-teal-200) / <alpha-value>)', 
          300: 'hsl(var(--clr-teal-300) / <alpha-value>)', 
          400: 'hsl(var(--clr-teal-400) / <alpha-value>)', 
          500: 'hsl(var(--clr-teal-500) / <alpha-value>)', 
          600: 'hsl(var(--clr-teal-600) / <alpha-value>)', 
          700: 'hsl(var(--clr-teal-700) / <alpha-value>)', 
          800: 'hsl(var(--clr-teal-800) / <alpha-value>)', 
          900: 'hsl(var(--clr-teal-900) / <alpha-value>)'
        },
        accent: {
          100: 'hsl(var(--clr-accent-100) / <alpha-value>)', 
          200: 'hsl(var(--clr-accent-200) / <alpha-value>)', 
          300: 'hsl(var(--clr-accent-300) / <alpha-value>)', 
        },
      },
      fontFamily: {
        'inter': ['Inter', 'ui-sans-serif', 'system-ui'],
        'monoton': ['monoton', 'ui-sans-serif', 'system-ui']
      },
      keyframes: {
        fadeIn: {
          'from': { opacity: '0', visibility: 'hidden' },
          'to': { opacity: '1', visibility: 'block' }
        }
      },
    },
  },
  plugins: [
    plugin(function({ addUtilities}) {
      addUtilities({
        '.dark-gradient-component': {
          'background': 'var(--gradient-100)',
          'color': 'white'
        },
        '.dark-gradient-categories': {
          'background': 'var(--gradient-categories-100)'
        },
        '.fire-gradient-courses': {
          'background': 'var(--gradient-courses-100)'
        },
        '.card-gradient-100': {
          'background': 'var(--gradient-card-100)'
        },
        '.card-gradient-200': {
          'background': 'var(--gradient-card-200)'
        },
        '.sidebar-height': {
          'min-height': 'calc(100% - 4rem)',
          'height': 'calc(100% - 4rem)',
        },
        '.sidebar-attributes': {
          'border-radius': '16px',
          'border': '2px solid hsl(var(--clr-accent-300))',
          'background': 'var(--gradient-100)'
        },
        '.sidebar-active-line': {
          'position': 'absolute',
          'top': '-3px',
          'right': '-1px',
          'height': 'calc(100% + 7px)',
          'width': '4px',
          'background': 'var(--gradient-line-100)',
          'border-radius': '4px'
        },
        '.sidebar-hr': {
          'width': '80%',
          'margin-inline': 'auto',
          'margin-block': '3rem',
          'borderBottom': '2px solid hsl(var(--clr-accent-100))',
          'border-radius': '0.25rem'
        },
        '.hero-gradient-color': {
          'background': 'var(--gradient-card-200)',
          'text-shadow': 'none',
          '-webkit-text-fill-color': 'transparent',
          '-webkit-background-clip': 'text',
          '-webkit-box-decoration-break': 'clone',
          'background-clip': 'text',
          'border-color': 'white',
        },
        '.hero-gradient-courses': {
          'text-shadow': 'none',
          '-webkit-text-fill-color': 'transparent',
          '-webkit-background-clip': 'text',
          '-webkit-box-decoration-break': 'clone',
          'background-clip': 'text',
          'border-color': 'white',
        },
      })
    })
  ],
}

