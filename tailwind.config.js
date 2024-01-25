/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#23BCFB",
      },
      fontSize: {
        title: ["4rem", "70.4px"],
        small: ["0.875rem", "0.875rem"],
      },
      gridTemplateColumns: {
        header: "2fr 3fr 2fr",
      },
    },
  },
  plugins: [],
};
