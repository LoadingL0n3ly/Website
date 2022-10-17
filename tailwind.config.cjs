const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        mainRed : '#731d1d',
		    mainYellow : '#e2b52b',
        mainRedT: 'rgba(87, 29, 29, 0.7)',
      },
      fontFamily: {
        quincyCf: ['quincy-cf', 'sans-serif']
      },
      screens: {
        'axl' : '1900px',
        '3xl' : "2300px",
        '4xl' : "2600px",
        '5xl' : "3000px",
        '5.5xl' : "3500px",
        '6xl' : "4000px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
  darkMode: "class",
};
