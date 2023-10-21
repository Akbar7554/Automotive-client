/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans- serif"
      }
    },
  },
  plugins: [require("daisyui"), require('flowbite/plugin')],
}

