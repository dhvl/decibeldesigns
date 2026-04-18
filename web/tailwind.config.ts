import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0F0E0D",
        surface: "#121110",
        "surface-container": "#1E1B19",
        "surface-container-low": "#1A1614",
        "surface-container-high": "#282421",
        "surface-container-highest": "#332F2D",
        "surface-container-lowest": "#0A0908",
        primary: "#EFAB22", // Gold Highlight
        secondary: "#E46D32", // Rich Copper
        "on-surface": "#EAE4DF",
        "on-surface-variant": "#D0C4B8",
        outline: "#9C8F80",
        "outline-variant": "#4F4539",
        tertiary: "#E46D32",
        "secondary-container": "#5F2E14",
        "primary-container": "#2D1D00",
      },
      fontFamily: {
        headline: ["var(--font-manrope)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        accent: ["var(--font-playfair)", "serif"],
      },
      borderRadius: {
        DEFAULT: "0.125rem",
        lg: "0.25rem",
        xl: "0.5rem",
        full: "0.75rem",
      },
    },
  },
  plugins: [],
};
export default config;
