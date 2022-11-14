/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mersadBold: ["mersad-bold", "sans-serif"],
        mersadRg: ["mersad-rg", "sans-serif"],
        mersadLight: ["mersad-light", "sans-serif"],

      },
    },
  },
  plugins: [],
};
