/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // primary
        sherpa: "#014E56",
        flory: "#F67E7E",

        // secondary
        baked: "#79C8C7",
        casul: "#2C6269",
        cyprus: "#004047",
        daintree: "#012F34",
        swamp: "#002529",
      },
      fontFamily: {
        livvic: ["Livvic", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
