/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'sans': [ 'Deathstar', 'Verdana', 'Geneva', 'Tahoma', 'sans-serif'],
    }
  },
  plugins: [require("daisyui")],
}
