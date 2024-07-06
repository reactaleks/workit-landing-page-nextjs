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
        'fraunces': ['Fraunces', "sans-serif"],
        'manrope': ['Manrope', "sans-serif"]
      },
      fontSize: {
        'feature-number': '20px',
        'feature-heading': '28px',
        'feature-description': '16px',
        'action-heading-tablet': '48px',
      },
      height: {
        'hero': '481.71px',
        'hero-main': '195px',
        'hero-tablet': '540.24px',
        'hero-btn': '55px',
        'hero-image': '184px',
        'hero-image-tablet': '296px',
        'logo': '24.61px',
        'pagesection': '1070.71px',
        'page-feature-container': '206px',
        'page-feature-container-tablet': '136px',
        'page-feature-text-container': '164px',
        'page-feature-text-container-tablet': '136px',
        'call-to-action-img': '281px',
        'call-to-action': '375px',
        'call-to-action-tablet': '375px',
        'call-to-action-btn': '55px',
        'call-to-action-container-tablet': '526px',
        'call-to-action-container': '603px',

      },
      width: {
        'hero-btn': '133px',
        'hero-main': '343px',
        'hero-image': '320px',
        'hero-image-tablet': '514px',
        'logo': '95.76px',
        'pagesection': '375.3px',
        'page-feature-container': '343px',
        'page-feature-container-tablet': '573px',
        'page-feature-text-container': '343px ',
        'page-feature-text-container-tablet': '493px',
        'call-to-action-container-tablet': '689px',
        'call-to-action-container': '343px',
        'call-to-action': '343px',
        'call-to-action-img': '281px',
        'call-to-action-tablet': '514px',
        'call-to-action-btn': '172px'

      },
      borderRadius: {
        'section-bottom': '65% 5%',
      }
    },
  },
  plugins: [],
};
export default config;
