/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(0, 0%, 100%)",
        secondary: "#202020",
        tertiary: "#484848",
        box: "#5E6A72",
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
        "footer-one": "#22303E",
        "footer-two": "#22303E",
        black: "#000000",
      },
      fontFamily: {
        brutal: ["Brutal Type", "sans-serif"],
      },
      backgroundImage: {
        "home-bg": "url('/src/assets/homepage-image-mobile.png')",
      },
      fontWeight: {
        hairline: "100",
        extralight: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        "extra-bold": "800",
        black: "900",
      },
      maxWidth: {
        rousel: "80vw",
        "home-image": "90vw",
      },
    },
  },
  plugins: [],
};
