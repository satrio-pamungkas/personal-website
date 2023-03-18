/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./node_modules/flowbite/**/*.js", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "barlow": ["Barlow", "sans-serif"],
        "source-code": ["Source Code Pro", "monospace"],
        "oswald": ["Oswald", "sans-serif"]
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};