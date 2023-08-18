/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },

    extend: {
      colors: {
        MainCol: "#1638D8",
      },
    },
    animation: {
      disappear: "disappear 3s linear forwards",
      elDisappear1: "elementDisappear1 8s linear forwards",
      elDisappear2: "elementDisappear2 8s linear 4s forwards",
      elDisappear3: "elementDisappear3 8s linear forwards",
    },
  },
  plugins: [],
};
