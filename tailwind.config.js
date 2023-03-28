/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '5px 0 5px rgba(0, 0, 0, 0.3)',
        '4xl': '0 0 5px rgba(0, 0, 0, 0.3)',
      },
      width: {
        '440px': '440px'
      },
      fontFamily: {
        'circ': 'Circular',
        'roboto': 'Roboto'
      }
    },
  },
  plugins: [],
}