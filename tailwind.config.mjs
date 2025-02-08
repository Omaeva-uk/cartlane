/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bgbrown: "#F5F5F5",
        aboutText: "#ECECEC", 
      },
      backgroundColor: {
        gridCardBlack: "#151515",
        gridCardBrown: "#CBCBCB",
      }
    },
  },
  plugins: [],
};
