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
    },
  },
  plugins: [],
};
