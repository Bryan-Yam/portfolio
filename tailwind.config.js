/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        "3xl": "0px 0px 50px rgba(255, 255, 255, 0.4)",
        "4xl": "0px 0px 50px rgba(255, 255, 255, 0.7)",
      },
      colors: {
        "goated-purple": "#C51AF0",
        "text-purple": "#DE78F7",
        "hover-purple": "#D452F4",
        "kinda-white": "#EEF0F2",
        "kinda-black": "#0E0E0E",
        "french-gray": "#373737",
        "ice-blue": "#00B7FF",
        "kinda-gray": "#D2D4DB",
        "landing-purple": "#8143E7",
        "landing-hover-purple": "#641CD9",
      },
      backgroundImage: {
        default:
          "linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0.92) 30%, #000000 70%, rgba(0, 0, 0, 0.95) 85%, #000000 100%);",
      },
      animation: {
        type: "type 2.7s ease-out .8s infinite alternate both",
      },
      keyframes: {
        type: {
          "0%": { transform: "translateX(0ch)" },
          "5%, 10%": { transform: "translateX(1ch)" },
          "15%, 20%": { transform: "translateX(3ch)" },
          "25%, 30%": { transform: "translateX(5ch)" },
          "35%, 40%": { transform: "translateX(7ch)" },
          "45%, 50%": { transform: "translateX(9ch)" },
          "55%, 60%": { transform: "translateX(11ch)" },
          "65%, 70%": { transform: "translateX(13ch)" },
          "75%, 80%": { transform: "translateX(15ch)" },
          "85%, 90%": { transform: "translateX(17ch)" },
          "95%, 100%": { transform: "translateX(25ch)" },
        },
      },
    },
    fontFamily: {
      custom: ["Quicksand", "sans-serif"],
      sans: ["Urbanist", "sans-serif"],
      heading: ["Product Sans", "sans-serif"],
      handwriting: ["Shadows Into Light", "cursive"],
    },
    screens: {
      sm: "640px",

      md: "768px",

      lg: "1024px",

      xl: "1280px",

      "2xl": "1536px",
    },
  },
  plugins: [],
};
