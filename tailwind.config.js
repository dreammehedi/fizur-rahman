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
        "main-bg": "#f6f3fc",
      },
      backgroundImage: {
        "gradient-main-bg": `linear-gradient(90deg, rgba(135,80,247,1) 0%, rgba(135,80,208,1) 35%, rgba(0,0,15,1) 100%)`,
      },
    },
  },
  plugins: [],
};
