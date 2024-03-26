/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lexend: ["Lexend", "sans-serif"],
        playball: ["var(--font-playball)"],
        pokova: ["var(--font-podkova)"],
      },
      colors: {
        primary: "#f787e3",
        secondary: "#ecc6ec",
        accent: "#fc45e7",
      },
    },
  },
  plugins: [],
};
