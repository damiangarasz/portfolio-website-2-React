/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // Jeśli używasz Vite/plain HTML
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      form: [],
    },
    extend: {
      colors: {
        primary: {
          dark: "#CD4B2F",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
