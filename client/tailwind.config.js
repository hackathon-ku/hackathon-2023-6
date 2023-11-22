/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'primaryGreen': {
        50: '#74d4c7',
        100: '#5ccdbe',
        200: '#45c5b5',
        300: '#38b4a4',
        400: '#309d8f',
        500: '#226e64',
        600: '#1b574f',
        700: '#143f4a',
        800: '#0c2824',
      },
      'secondaryGreen': {
        50: '#e8edc5',
        100: '#dfe6ae',
        200: '#d6df97',
        300: '#cdd87f',
        400: '#c4d168',
        500: '#b0c03b',
        600: '#9ba934',
        700: '#85912b',
        800: '#707a25',
      },
    },
    extend: {},
  },
  plugins: [],
}

