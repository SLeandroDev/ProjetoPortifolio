/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["../pages/**/*.{html,js}"],
  theme: {
    extend: {
      dropShadow: {
      'shadowPadrao': '7px 4px 7px rgba(0, 0, 0, 0.31)'
    }},
    colors: {'azulPadrao': '#023D68', 'white': '#FFFFFF', 'preto': '#000000'}
  },
  plugins: [],
}

