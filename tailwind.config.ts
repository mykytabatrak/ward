import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {},
    colors: {
      // Gray
      "gray-1": "var(--gray-1)",
      "gray-2": "var(--gray-2)",
      "gray-3": "var(--gray-3)",
      "gray-4": "var(--gray-4)",
      "gray-5": "var(--gray-5)",
      "gray-6": "var(--gray-6)",
      "gray-7": "var(--gray-7)",
      "gray-8": "var(--gray-8)",
      "gray-9": "var(--gray-9)",
      "gray-10": "var(--gray-10)",
      "gray-11": "var(--gray-11)",
      "gray-12": "var(--gray-12)",
      "gray-a1": "var(--gray-a1)",
      "gray-a2": "var(--gray-a2)",
      "gray-a3": "var(--gray-a3)",
      "gray-a4": "var(--gray-a4)",
      "gray-a5": "var(--gray-a5)",
      "gray-a6": "var(--gray-a6)",
      "gray-a7": "var(--gray-a7)",
      "gray-a8": "var(--gray-a8)",
      "gray-a9": "var(--gray-a9)",
      "gray-a10": "var(--gray-a10)",
      "gray-a11": "var(--gray-a11)",
      "gray-a12": "var(--gray-a12)",
    },
  },
  plugins: [],
};
export default config;
