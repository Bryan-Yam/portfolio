/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        "3xl": "0px 0px 50px rgba(255, 255, 255, 0.4)",
        "4xl": "0px 0px 50px rgba(255, 255, 255, 0.7)",
      },
      boxShadow: {
        magnet:
          "2px 3px 3px 0px rgba(0, 0, 0, 0.50), 3px 4px 0px 0px rgba(0, 0, 0, 0.25), 0.5px 0.5px 0px 1px #000, 3px 3px 5px 0px #FFF inset, 2px 2px 0px 0px #FFF inset",
      },
      colors: {
        "goated-purple": "#C51AF0",
        "text-purple": "#DE78F7",
        "hover-purple": "#D452F4",
        "kinda-white": "#EEF0F2",
        "kinda-black": "#0E0E0E",
        "3-gray": "#333333",
        "ice-blue": "#00B7FF",
        "kinda-gray": "#D2D4DB",
        "landing-purple": "#8143E7",
        "landing-hover-purple": "#641CD9",
        "book-bg": "#111211",
        "default-bg": "#121212",
        "game-bg": "#292929",
        "landing-project": "#1E1E1E",
      },
      backgroundImage: {
        default:
          "linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0.92) 30%, #000000 70%, rgba(0, 0, 0, 0.95) 85%, #000000 100%);",
      },
      animation: {
        type: "type .2s ease-out .8s infinite alternate both",
      },
      keyframes: {
        type: {
          "0%": { transform: "translateX(0ch)" },
          "5%, 15%": { transform: "translateX(3ch)" },
          "20%, 35%": { transform: "translateX(6ch)" },
          "40%, 55%": { transform: "translateX(9ch)" },
          "60%, 75%": { transform: "translateX(12ch)" },
          "80%, 95%": { transform: "translateX(15ch)" },
          "100%": { transform: "translateX(20ch)" },
          /* "55%, 60%": { transform: "translateX(18ch)" },
          "65%, 70%": { transform: "translateX(21ch)" },
          "75%, 80%": { transform: "translateX(24ch)" },
          "85%, 90%": { transform: "translateX(27ch)" },
          "95%, 100%": { transform: "translateX(30ch)" }, */
        },
      },
    },
    fontFamily: {
      headers: ["Quicksand", "sans-serif"],
      body: ["Assistant", "sans-serif"],
      body2: ["Overpass", "sans-serif"],
      productsans: ["Product Sans", "sans-serif"],
      handwriting: ["Shadows Into Light", "cursive"],
    },
    screens: {
      sm: "640px",

      md: "744px",

      lg: "1366px",

      xl: "1920px",

      "2xl": "1536px",

      custom: "1000px",
    },
  },
  plugins: [],
};
