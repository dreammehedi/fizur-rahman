/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
    },

    fontFamily: {
      sora: ["Sora", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#8750f7",
      },
    },
  },
  plugins: [],
};
