module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        headerBackground: "#0A0A0D",
        darkSurface: "#1F1A24",
      },
      fontFamily: {
        notosans: ["Noto Sans"],
      },
      screens: {
        "custom-lg": "1500px", // Define a custom large screen breakpoint at 1200px
      },
    },
  },
  plugins: [],
};
