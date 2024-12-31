/** @type {import('tailwindcss').Config} */
import animations from "@midudev/tailwind-animations";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      scrollBehavior: {
        auto: 'auto', // Disable smooth scrolling globally
      },
    },
  },
  plugins: [animations],
};
