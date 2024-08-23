import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        AppPrimary:"#11CC95",
        AppSecondary:"#00EF67", 
        AppTertiary:"#FFFFFF", 
        AppHeading:"#9D9D9D", 
        AppBody:"#969696", 
        AppPop:"#FF4848", 
        AppGradiantEnd:"#11CC95",
        AppGradientStart:"#07DF7B",


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
export default config;
