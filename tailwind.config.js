/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purple1: "#1b1429",
        purple2: "#140F23",
        footer: "#0a0416",
        navbar: "#1b1a2ea9",
      },
      fontFamily: {
        raleway: ["Raleway", "arial"],
      },
      boxShadow: {
        spec: "0px 0px 5px 5px rgba(0 0 0 / 0.05)",
        navbar: "0px 10px 10px 0px rgba(9, 5, 29, 0.171)",
      },
      transformOrigin: {
        custom: "70% 70%",
      },
      animation: {
        wave: "wave 2.1s infinite ",
      },
      keyframes: {
        wave: {
          "0%": { transform: "rotate(0deg)" },
          "10%": { transform: "rotate(14deg)" },
          "20%": { transform: "rotate(-8deg)" },
          "30%": { transform: "rotate(14deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(10deg)" },
          "60%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
    },
  },
  plugins: [],
};
