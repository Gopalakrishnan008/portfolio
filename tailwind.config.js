/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./public/assets/js/main.js",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "bgcolor":"#1b1f24",
        "textcolor":"#12bdff"
      },
    },
  },
  plugins: [],
}

