/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        BannerBG: "#34383C",
        fieldBG: "#191E24",
        HomepageBG: "#000E14",
      },
    },
  },
  plugins: [],
};
