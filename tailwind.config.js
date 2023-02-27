/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "spotlight-hover":
          "radial-gradient(800px circle at var(--cursor-x) var(--cursor-y), rgba(255, 255, 255, 0.06), transparent 40%)",
        "spotlight-borders":
          "radial-gradient(600px circle at var(--cursor-x) var(--cursor-y), rgba(255, 255, 255, 0.4), transparent 40%)",
      },
    },
  },
  plugins: [],
};
