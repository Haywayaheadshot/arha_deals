/** @type {import('tailwindcss').Config} */
export default {
  // content: ["./index.html", "./src/components/**/*.{js,ts,jsx,tsx}"],
  purge: ["index.html", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(0, 0%, 100%)",
        secondary: "#202020",
        tertiary: "#484848",
        "gray-100": "#BCB7B7",
        "blue-100": "#104A82",
        "blue-200": "#0074E4",
        "blue-300": "#288AE8",
        "yellow-100": "#CFAA1E",
        "yellow-200": "#F5CA23", 
        "yellow-300": "#96790E",
        "purple-100": "#6C5BB7",
        "purple-200": "#5847A3",
        "purple-300": "#423579",
        "line-t": "#949494",
        gameColors: {
          first: "#6A3C86",
          second: "#2E2E2E",
          third: "#D9AC25",
          fourth: "#B6B4B4",
          fifth: "#104A82",
        },
      },
      fontFamily: {
        brutal: ["Brutal Type", "sans-serif"],
      },
    },
  },
  plugins: [],
};
