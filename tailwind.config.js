/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{Home,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        fullSpin: 'fullSpin 20s linear infinite',
        fastSpin: 'fastSpin 2s linear infinite',
      },
      keyframes: {
        fullSpin: {
          '100%': {
            transform: "rotate(-360deg)",
          },

        },
        fastSpin: {
          '100%': {
            transform: "rotate(-360deg)",
          },
        },
      },



    },
  },
  plugins: [],
}

