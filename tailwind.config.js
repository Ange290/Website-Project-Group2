const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src//*.{html,js}",
    "./src/sections/**/*.{html,js}",
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['"Outfit"', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        0.9: "0.938rem",
        2: "2rem",
        10: "10rem",
        6.5: "6.5rem",
        17: "17rem",
      },
      colors: {
        secondary: "#00642d",
      },
      height: {
        1.4: "1.438rem",
        2.3: "2.344rem",
      },
      width: {
        3.9: "3.97rem",
      },
    },
  },
  plugins: [],
};
