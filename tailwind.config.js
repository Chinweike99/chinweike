/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        mont: ["var(--font-mot)", ...fontFamily.sans],
      },
      colors:{
        primary: "#863496",
        primaryDark: "#58E609"
      },
      animation:{
        "spin-slow": "spin 6s linear infinite"
      }
    },
  },
  plugins: [],
}

