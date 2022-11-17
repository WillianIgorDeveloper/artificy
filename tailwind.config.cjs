/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'serif': ['Euphoria Script', 'cursive'],
      'sans': [ 'Fira Sans', 'sans-serif'],
      'mono': [ 'Fira Code', 'monospace'],
    },
    extend: {
      transitionProperty: {
        'height': 'height',
      }
    },
  },
  plugins: [
    require('tailwind-dracula')(),
    require('tailwind-scrollbar'),
  ],
}