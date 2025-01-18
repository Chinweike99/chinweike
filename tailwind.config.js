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
        circularDark: "repeating-radial-gradient(rgba(255,255,255,0.4) 2px, #1b1b1b 8px, #1b1b1b 100px);",
        circularLightLg: "repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #ffffff 5px, #ffffff 80px);",
        circularDarkLg: "repeating-radial-gradient(rgba(255,255,255,0.4) 2px, #1b1b1b 8px, #1b1b1b 80px);",
        circularLightMd: "repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #ffffff 5px, #ffffff 60px);",
        circularDarkMd: "repeating-radial-gradient(rgba(255,255,255,0.4) 2px, #1b1b1b 8px, #1b1b1b 60px);",
        circularLightSm: "repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #ffffff 5px, #ffffff 40px);",
        circularDarkSm: "repeating-radial-gradient(rgba(255,255,255,0.4) 2px, #1b1b1b 8px, #1b1b1b 40px);",
        circularLightXs: "repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #ffffff 5px, #ffffff 20px);",
        circularDarkXs: "repeating-radial-gradient(rgba(255,255,255,0.4) 2px, #1b1b1b 8px, #1b1b1b 20px);"
      }
    },
    screens:{
      "2xl": {max: "1535px"},
      xl: {max: "1279px"},
      lg: {max: "1023px"},
      md: {max: "767px"},
      sm: {max: "639px"},
      xs: {max: "479px"}
    },
  },
  plugins: [],
}

