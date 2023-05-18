/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightgreen: "#919974",
        darkgreen: "#7C8046",
        background: "#F5E7CC",
        darkorange: "#E49052",
        lightorange: "#FFBA7C",
      },
      fontFamily: {
        comfortaa: ["Comfortaa", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
