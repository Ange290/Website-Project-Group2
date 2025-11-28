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
        x: "160px",
        6.5: "6.5rem",
        0.26: "4.16px",
        17: "17rem",
      },
      colors: {
        secondary: "#00642d",
      },
      height: {
        1.4: "1.4rem",
        1.8: "1.825rem",
        2.8: "2.84rem",
        2.3: "2.344rem",
        360: "360.5054626464844px",
        222: "222.86874389648438px",
        250: "250px",
        172: "172.51690673828125px",
        320: "320.47698974609375px",
        155: "155.59539794921875px",
      },
      width: {
        3.9: "3.97rem",
        299: "299.6346435546875px",
        216: "216.2652130126953px",
        267: "267px",
        297: "297.77740478515625px",
        167: "167.56427001953125px",
        97: "97.40189361572266px",
      },
      marginTop: {
        100: "100px",
      },
    },
  },
  plugins: [],
};
