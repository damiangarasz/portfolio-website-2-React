/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,tsx,tsx,html}"],
  theme: {
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
