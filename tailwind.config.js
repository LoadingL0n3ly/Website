const colors = require('tailwindcss/colors')

module.exports = {
  enabled: true,
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      fontWeight: {
        black: 900,
      },
      colors: {
        'blurple' : "#5865F2",
        'blurplel' : "#5D6AFF",
        'twt' : "#1DA1F2",
        'twtl' : "#0da3ff",
        'rblx' : "#7dd3fc",
        'rblxl' : "#a1e1ff",
        'rblss' : "#fafafa",
        'bg' : "#0d0d0d",
        'mt' : "#fafafa",
        gray: {
          900: '#202225',
          800: '#2f3136',
          700: '#36393f',
          600: '#4f545c',
          400: '#d4d7dc',
          300: '#e3e5e8',
          200: '#ebedef',
          100: '#f2f3f5',
        },
      },
      spacing: {
        88: '22rem',
      },
      fontFamily: {
        'noto': ['Gill Sans MT']
      }
    },
  },
  variants: {},
  plugins: [],
};
