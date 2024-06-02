/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",  
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: {
          100: "#1A1A1A",
          200: "#2C2E33",
        },
        textSecondary: "#B3B3B3",
      },
    },
  },
  plugins: [],
};
