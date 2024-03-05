/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
      }
    },
    extend: {
      colors: {
        DarkGrayishBlue: "hsl(227, 12%, 61%)",
        VeryDarkBlue: "hsl(233, 12%, 13%)",
        VeryPaleRed: "hsl(13, 100%, 96%)",
        VaryLightGray: "hsl(0, 0%, 98%)",
        BrightRed: "hsl(12, 88%, 59%)",
        DarkBlue: "hsl(228, 39%, 23%)",
      },
    },
  },
  plugins: [],
}

