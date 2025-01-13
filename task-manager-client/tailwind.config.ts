/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple1: '#6A5ACD',
        purple2: '#9370DB',
        purple3: '#352D67',
        footercolor: 'rgba(147, 112, 219, 0.2)',
        borderblue: '#A8D0E6',
      }
    },
  },
  plugins: [],
};
