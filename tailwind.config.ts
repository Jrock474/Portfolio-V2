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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        xs: "480px", // Custom breakpoint for extra small screens
        sm: "600px", // Override default sm (original: 640px)
        md: "900px", // Override default md (original: 768px)
        lg: "1200px", // Override default lg (original: 1024px)
        xl: "1536px", // Override default xl (same as original)
      },
    },
  },
  plugins: [],
};
export default config;
