import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // 中医主题配色
        ink: "#1a1a1a",
        paper: "#f7f5f0",
        cinnabar: "#a93226",
        gold: "#d4ac0d",
        jade: "#5d6d7e",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["Noto Sans SC", "sans-serif"],
        serif: ["Noto Serif SC", "serif"],
        calligraphy: ["Ma Shan Zheng", "cursive"],
      },
      backgroundImage: {
        "radial-dot": "radial-gradient(rgba(169, 50, 38, 0.05) 1px, transparent 1px)",
      },
      backgroundSize: {
        "30": "30px 30px",
      },
      animation: {
        // 动画已在 globals.css 中定义，这里保留简化版本用于 Tailwind 类名
        "breathe-core": "breathe-core 5s ease-in-out infinite",
        "breathe-glow": "breathe-glow 5s ease-in-out infinite",
        "ripple": "ripple-ring 5s ease-in-out infinite",
        "settle": "settle-in 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) forwards",
      },
      keyframes: {
        // keyframes 已在 globals.css 中定义
      },
    },
  },
  plugins: [],
};
export default config;
