/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        header: ["Playfair Display", "serif"],
        body: ["Hanken Grotesk", "sans-serif"],
        jetbrains: ["JetBrains Mono", "monospace"],
      },
      colors: {
        blackish: "#222121",
        backGround: "#D9D9D9",
        secondary: "#5e5e5e",
        red: "#BA1A1A",
      },
    },
  },
  plugins: [],
};


