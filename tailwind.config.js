/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Acme: ["Acme", "sans-serif"],
      },
    },
  },
  plugins: [],
};
