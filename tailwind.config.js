/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'native-green': '#40bb6a',
        'native-green-secondary': '#5dc581',
        'native-gray': '#656263',
        'native-gray-secondary': '#676465',
        'native-mint': '#aee2c0',
        'native-mint-light': '#e1f4e8',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
