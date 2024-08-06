/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1b376c",
        secondary: "#dbd7d7",
        "bg-color": "#ffffffff",
        "active-item-bg": "#0075FF",
        "active-item-color": "#0038FF",
      },
    },
  },
  plugins: [],
};
