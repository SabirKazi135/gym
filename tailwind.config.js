/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./utils/**/*.{js,jsx,ts,tsx}",
    "./services/**/*.{js,jsx,ts,tsx}",
    "./store/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#E37528",
        primary_light: "#F2C6A7",
        background: "#FCFCFC",
        white: "#FFFFFF",
        black: "#363636",
        light_red: "#FFEAEA",
      },
      fontSize: {
        xs: "12px",
        sm: "14px",
        base: "16px",
        md: "18px",
        lg: "20px",
        xl: "22px",
        "2xl": "26px",
        "3xl": "30px",
      },
      borderRadius: {
        sm: "5px",
        md: "10px",
        lg: "30px",
        xl: "40px",
      },
      fontFamily: {
        light: ["MontserratLight"],
        regular: ["MontserratRegular"],
        medium: ["MontserratMedium"],
        semibold: ["MontserratSemiBold"],
        mbold: ["MontserratBold"],
      },
    },
  },
  plugins: [],
};
