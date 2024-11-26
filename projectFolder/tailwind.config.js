/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px", // Small screens, like phones
      md: "768px", // Medium screens, like tablets
      lg: "1024px", // Large screens, like laptops
      xl: "1280px", // Extra large screens, like desktops
      pResOne: "428px",
      pResTwo: "320px",
    },
    extend: {
      fontFamily: {
        "instrument-sans": ['"Instrument Sans"', "sans-serif"],
      },
      colors: {
        customBlue: "#1F92FF",
      },
    },
  },
  plugins: [],
};
