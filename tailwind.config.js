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
        primary: "#0369a1",
        "main-bg": "#f6f3fc",
        "ring-color": "#f3effa",
      },
      backgroundImage: {
        "gradient-main-bg": `linear-gradient(90deg, rgba(3,105,161,1) 0%, rgba(3,112,161,1) 29%, rgba(3,17,161,1) 66%, rgba(3,99,161,1) 100%)`,
      },
    },
  },
  plugins: [],
};
