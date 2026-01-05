/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#a855f7", // Purple-500
        secondary: "#ec4899", // Pink-500
        "background-light": "#f8fafc", // Slate-50
        "background-dark": "#0f0518", // Deep Purple/Black
        "surface-dark": "#1e102f",
        "surface-light": "#ffffff",
      },
      fontFamily: {
        display: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
