import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'dark-purple': '#24053E',
      'davys-gray': '#584D62',
      'exucalyptus': '#44FFA1',
      'ghost-white': '#FCF8FF',
    },
    extend: {
      fontFamily: {
        'fraunces': ['"Fraunces 9pt Thin"', "sans-serif"],
        'manrope': ['"Manrope ExtraLight"', "sans-serif"]
      }
    },
  },
  plugins: [],
};
export default config;
