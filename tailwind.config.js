/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "pattern-background-desktop": "url('assets/images/pattern-background-desktop.svg')",
      },
      maxHeight: {
        "custom-height": "75%",
      },
    },
    fontWeight: {
      "extra-light": 100,
      light: 300,
      normal: 400,
      medium: 500,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
    colors: {
      "pale-blue": "hsl(225, 100%, 94%)",
      "bright-blue": "hsl(245, 75%, 52%)",
      "v-pale-blue": "hsl(225, 100%, 98%)",
      "des-blue": "hsl(224, 23%, 55%)",
      "dark-blue": "hsl(223, 47%, 23%)",
      white: colors.white,
      slate: colors.slate,
      blue: colors.blue,
      gray: colors.gray,
    },
    fontFamily: {
      RedHatDisplay: ["Red Hat Display", "sans-serif"],
    },
  },
  plugins: [],
};
