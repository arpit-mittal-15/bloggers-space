/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateRows: {
        'layout': '200px auto 200px'
      }
    },
  },
  plugins: [],
}

