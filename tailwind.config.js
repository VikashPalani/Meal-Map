/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        'errorButton': '#6296F5',
        'offlinePink': '#F78181',
      },
    },
  },
  plugins: [],
}

