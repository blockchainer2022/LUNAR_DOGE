module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      textColor: {
        primary: "#F6A428",
      },
      backgroundColor: {
        primary: "#F6A428",
        primaryLight: "#FEC200",
        dark: {
          400: "#212425",
          500: "#191712",
          600: "#181818",
        },
        gray: {
          DEFAULT: "#374045",
        },
      },
      borderColor: {
        primary: "#F6A428",
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          lg: "1140px",
          xl: "1140px",
          "2xl": "1140px",
        },
      },
      fontfamily: {
        sans: ["Open Sans", "sans-serif"],
      },
      keyframes: {
        move: {
          "0%, 100%": { transform: "translateX(0%)" },
          "50%": { transform: "rotate(10%)" },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
