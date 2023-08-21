/** @type {import('tailwindcss').Config} */
const {fontFamily} = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)", ...fontFamily.sans],
        montserrat: ["var(--font-montserrat)", ...fontFamily.sans],
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(180deg, #000000 0.82%, #1e1b4b 129.1%)",
      },
      colors: {
        primary: {
          light: "#fff",
          DEFAULT: "#6d28d9",
          dark: "#3730a3",
        }
      }
    },
  },
  plugins: [],
}
