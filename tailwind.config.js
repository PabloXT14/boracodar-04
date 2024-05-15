/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      colors: {
        zinc: {
          200: '#E1E1E6',
        },
        primary: {
          500: '#00B37E',
          600: '#07847E',
        },
        secondary: {
          500: '#633BBC',
          900: '#282843',
          950: '#1A1924',
        },
      },
    },
  },
  plugins: [],
}
