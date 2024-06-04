const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      keyframes: {
        AppLogoSpan: {
          "from": { transform: 'rotate(0deg)' },
          "to": { transform: 'rotate(360deg)' }
        },
        HeartBeat: {
          "0%": { transform: 'scale(.75)' },
          "20%": { transform: 'scale(1)' },
          "40%": { transform: 'scale(.75)' },
          "60%": { transform: 'scale(1)' },
          "80%": { transform: 'scale(.75)' },
          "to": { transform: 'scale(.75)' }
        },
        Rotate: {
          "from": { transform: 'rotate(0deg)' },
          "to": { transform: 'scale(1.4) rotate(15deg)' }
        }
      },
      animation: {
        AppLogoSpan: 'AppLogoSpan infinite 20s linear',
        HeartBeat: 'HeartBeat 1s ease infinite',
        // Rotate: 'Rotate 0.6s ease 1 forwards',
        // Rotate: 'Rotate 0.6s ease 1 forwards'
        Rotate: 'Rotate 0.6s ease-in-out 1 forwards'
      },
      colors: {
        primary: {
          light: "rgb(var(--primary-light) / <alpha-value>)",
          DEFAULT: "rgb(var(--primary) / <alpha-value>)",
          dark: "rgb(var(--primary-dark) / <alpha-value>)",
        },
        secondary: {
          light: "rgb(var(--secondary-light) / <alpha-value>)",
          DEFAULT: "rgb(var(--secondary) / <alpha-value>)",
          dark: "rgb(var(--secondary-dark) / <alpha-value>)",
        }
      }
    },
    screens: {
      'mobile_md': '360px',
      'mobile_xl': '460px',
      ...defaultTheme.screens,
    },
  },
  plugins: [],
}
