const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'xxs': '535px',
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        'green-1': 'rgba(124, 231, 123, 0.28)',
        'green-2': '#0bb40a'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}