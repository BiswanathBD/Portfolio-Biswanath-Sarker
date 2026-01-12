/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#a755f6",
        secondary: "#eb4898",
        "background-light": "#f8fafc",
        "background-dark": "#0f0518",
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
