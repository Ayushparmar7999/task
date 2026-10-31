/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        'pioneer-dark-red': '#6C0000',
        'pioneer-green': '#009111',
        'pioneer-green-light': '#0CB731',
        'pioneer-orange': '#F5A623',
        'pioneer-orange-dark': '#E8961F',
        'pioneer-yellow': '#F9B731',
        'pioneer-bg-start': '#F9B731',
        'pioneer-bg-end': '#F5960A',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      maxWidth: {
        'mobile': '430px',
        'tablet': '600px',
        'desktop': '800px',
      },
    },
  },
  plugins: [],
};
