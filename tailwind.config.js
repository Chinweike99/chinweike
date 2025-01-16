/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily:{
        mont: ["var(--font-mot)", ...fontFamily.sans],
      },
      colors:{
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#863496",
        primaryDark: "#17BEBB"
      },
      animation:{
        "spin-slow": "spin 6s linear infinite"
      },
      backgroundImage: {
        circularLight: "repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #ffffff 5px, #ffffff 100px);",
        circularDark: "repeating-radial-gradient(rgba(255,255,255,0.4) 2px, #1b1b1b 8px, #1b1b1b 100px);"
      }
    },
  },
  plugins: [],
}

