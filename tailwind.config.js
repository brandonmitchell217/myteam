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
      fontSize: {
        sm: ["0.938rem", { lineHeight: "1.25rem" }],
      },
    },
    backfaceVisibility: ["hidden"],
  },
  plugins: [],
};
