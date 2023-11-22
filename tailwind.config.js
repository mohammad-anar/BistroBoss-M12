/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: ["corporate"],
  },
  theme: {
    extend: {},
    mytheme: {
      my_primary: "#FFFFFF",

      my_secondary: "#151515",

      my_accent: "#EEFF25",

      m_neutral: "#111827",

      action: "#BB8506",

      background:"#D9D9D9",
      footerbg1: "#1F2937",
      footerbg2: "#111827",
    },
  },
  plugins: [require("daisyui")],
};
