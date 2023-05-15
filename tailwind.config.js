/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Montserrat', 'sans-serif'],
        'regular': ['MontserratRegular', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

