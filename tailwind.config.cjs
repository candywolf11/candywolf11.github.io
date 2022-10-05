/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Inter, Avenir, Helvetica, Arial, sans-serif',
      },
      colors: {
        brand: 'rgb(var(--color-brand) / <alpha-value>)'
      }
    },
  },
  plugins: [],
};
