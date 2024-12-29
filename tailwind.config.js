/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "bg-opacity": "rgb(252 165 165 / var(--tw-bg-opacity, 0.3))",
      },
    },
  },
  plugins: [],
};
