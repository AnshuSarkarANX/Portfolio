/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        header_bodoni: ["Bodoni Moda", "serif"],
        body_hanken: ["Hanken Grotesk", "sans-serif"],
        label_syne: ["Syne", "sans-serif"],
      },
      colors: {
        blackish: "#222121",
      },
    },
  },
  plugins: [],
};


