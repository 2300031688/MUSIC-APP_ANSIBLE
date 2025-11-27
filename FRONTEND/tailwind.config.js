/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'spotify-green': '#1DB954',
        'spotify-dark': '#191414',
        'spotify-text': '#FFFFFF',
        'spotify-gray': '#282828',
      },
    },
  },
  plugins: [],
};