/** @type {import('tailwindcss').config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#9576F6",
          200: "#757EF7",
          300: "#BBB5F8",
          400: "#D9D9D9",
          500: "#A174F7",
          600: "#000000",
        },
      },
    },
  },
  plugins: [],
}
