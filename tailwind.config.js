/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"]
    },
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      '2xl': '1440px',
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '100%',
        md: '100%',
        lg: '960px',
        xl: '1140px',
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        primary: "#49B6FF",
        secondary: "#9B64FF",
        tertiary: "#728DFF",
        tertiaryLight: "#728DFF30",
        neutralDark: "#343f52",
        neutral: "#697387",
        neutralLight: "#aab0bc",
        twitter: "#1da1f2",
        facebook: "#4267B2",
        youtube: "#ff0000",
        instagram: "#c32aa3",
      },
      boxShadow: {
        btn: "0px .5rem .75rem 0px #343f5220",
        nav: "0px .75rem 1rem 0px #343f5210",
      },
      backgroundImage: {
        gradientBg1: "url('./assets/bg1.jpeg')",
        gradientBg2: "url('./assets/bg2.jpeg')",
      },
      gridTemplateColumns: {
        'hero': "1fr .7fr"
      },
    },
  },
  plugins: [],
}

