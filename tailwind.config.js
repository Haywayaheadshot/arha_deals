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
        "footer-one": "rgb(71,88,104)",
        "footer-two": "#22303E",
        black: "#000000",
      },
      fontFamily: {
        brutal: ["Brutal Type", "sans-serif"],
      },
      backgroundImage: {
        "home-bg": "url('/src/assets/homepage-image-mobile.png')",
        "sign-up-bg": "url('/src/assets/mountain.png')",
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
      minWidth: {
        rouselMin: "60vw",
        rousel: "80vw",
        "home-image": "90vw",
        "tab-image": "85vw",
        last: "35vw",
      },
      maxWidth: {
        rousel: "80vw",
        rouselMin: "60vw",
        "home-image": "90vw",
        "tab-image": "85vw",
        "home-image-low": "40vw",
        last: "20vw",
      },
      minHeight: {
        s: "20vh",
        sPlus: "40vh",
        m: "50vh",
        l: "70vh",
        xl: "80vh",
      },
      maxHeight: {
        s: "20vh",
        sPlus: "40vh",
        m: "50vh",
        l: "70vh",
        xl: "80vh",
      },
      screens: {
        // => @media (min-width: 481px) { ... }
        tablet: "481px",

        // => @media (min-width: 769px) { ... }
        laptop: "769px",

        // => @media (min-width: 1025px) { ... }
        desktop: "1025px",
      },
    },
  },
  plugins: [],
};
