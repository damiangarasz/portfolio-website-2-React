/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html', // Jeśli używasz Vite/plain HTML lol
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      form: [],
    },
    extend: {
      colors: {
        primary: {
          dark: '#CD4B2F',
        },
      },
      keyframes: {
        slideIntro: {
          '0%': { transform: 'translateY(-100px)' },
          '100%': { transform: 'translateY(0px)' },
        },

        kafel1: {
          from: { transform: 'translateY(-300px)' },
          to: { transform: 'translateY(0px)' },
        },
        kafel2: {
          from: { transform: 'translateY(300px)' },
          to: { transform: 'translateY(0px)' },
        },
      },
      animation: {
        slideIntro: 'slideIntro 0.5s ease-in-out',
        kafel1: 'kafel1 0.5s ease-in-out forwards',
        kafel2: 'kafel2 0.5s ease-in-out forwards',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
