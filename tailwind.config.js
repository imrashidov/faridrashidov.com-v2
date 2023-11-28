/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purple1: "#1b1429",
        purple2: "#140F23",
      },
      fontFamily: {
        raleway: ["Raleway", "arial"],
      },
    },
  },
  plugins: [],
};
