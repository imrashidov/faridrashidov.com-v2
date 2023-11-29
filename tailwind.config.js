/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purple1: "#1b1429",
        purple2: "#140F23",
        footer: "#0a0416",
      },
      fontFamily: {
        raleway: ["Raleway", "arial"],
      },
      boxShadow: {
        spec: "0px 0px 5px 5px rgba(0 0 0 / 0.05)",
      },
    },
  },
  plugins: [],
};
