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
        }
      },
      animation: {
        AppLogoSpan: 'AppLogoSpan infinite 20s linear',
        HeartBeat: 'HeartBeat 1s ease infinite'
      },
      colors: {
        primary: {
          light: "rgb(var(--primary-light) / <alpha-value>)",
          DEFAULT: "rgb(var(--primary) / <alpha-value>)",
          dark: "rgb(var(--primary-dark) / <alpha-value>)",
        }
      }
    },
  },
  plugins: [],
}
