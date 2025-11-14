/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: [
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: "#0D47A1",
          secondary: "#4CAF50",
          "background-light": "#F4F7F9",
          "background-dark": "#101822",
          "text-light": "#333333",
          "text-dark": "#E0E0E0",
          "border-light": "#E0E0E0",
          "border-dark": "#374151",
        },
        fontFamily: {
          display: ["Manrope", "sans-serif"],
        },
        borderRadius: {
          DEFAULT: "0.5rem",
          lg: "0.75rem",
          xl: "1rem",
          full: "9999px",
        },
      },
    },
  };
  