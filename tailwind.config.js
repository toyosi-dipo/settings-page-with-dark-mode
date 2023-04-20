/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        xs: "480px",
        "2xl": "1440px",
      },
      fontFamily: ["'Satoshi'", "sans - serif"],
      spacing: { 15: "3.75rem" },
      colors: {
        "primary-100": "#F0F8FE",
        "primary-200": "#BBDFFD",
        "primary-300": "#8FCBFD",
        "primary-400": "#61B6FC",
        "primary-500": "#1097FB",
        "primary-600": "#1189EC",
        "primary-700": "#0E76D9",
        "primary-800": "#0B5EAE",
        "gray-100": "#F9FAFB",
        "gray-200": "#F2F4F7",
        "gray-300": "#E4E7EC",
        "gray-400": "#D0D5DD",
        "gray-500": "#98A2B3",
        "gray-600": "#667085",
        "gray-700": "#344054",
        "gray-800": "#101828",
        "dark-bg-1": "#242424",
        "dark-bg-2": "#1E1E1E",
        "stroke-1": "#363638",
        "stroke-2": "#E2E4E8",
        primary: "#ECEDF0",
        secondary: "#AEAEB2",
        tertiary: "#7C7C80",
      },
    },
  },
  plugins: [],
};