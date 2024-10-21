/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        inter:"Inter"
      }
      ,
      backgroundColor:{
        Green: "hsl(75, 94%, 57%)",
        White: "hsl(0, 0%, 100%)",
        "grey-700": "hsl(0, 0%, 20%)",
        "grey-800": "hsl(0, 0%, 12%)",
        "grey-900": "hsl(0, 0%, 8%)",
      },
      textColor:{
        Green: "hsl(75, 94%, 57%)",
        White: "hsl(0, 0%, 100%)",
        "grey-700": "hsl(0, 0%, 20%)",
        "grey-800": "hsl(0, 0%, 12%)",
        "grey-900": "hsl(0, 0%, 8%)",
      },
      fontSize:{
        "14":"14px"
      },
      fontWeight:{
        "400":400,
        "600":600,
        "700":700
      }
    },
  },
  plugins: [],
}