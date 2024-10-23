// tailwind.config.js
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mycooltheme: {
          primary: "#5A4FCF",
          secondary: "#23CE6B",
          accent: "#F61067",
          neutral: "#141517",
          "base-100": "#111111",
          info: "#F6F8FF",
          success: "#23CE6B",
          warning: "#fef08a",
          error: "#e11d48",
        },
      },
    ],
  },
};
export default config;
