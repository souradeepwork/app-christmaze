import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark mode base colors
        background: "#0B0F14",
        surface: "#0F141B",
        card: "#0F141B",

        // Holiday palette - Dark mode
        primary: {
          red: "#EF5350",
          "red-dark": "#E53935",
          green: "#66BB6A",
          "green-dark": "#43A047",
          gold: "#C0A85B",
        },

        // Text colors
        text: {
          primary: "#E5E7EB",
          muted: "#9CA3AF",
          dark: "#101828",
        },

        // Borders and UI elements
        border: "#1F2937",
        "border-light": "#EAECF0",

        // Light mode (for reference)
        light: {
          background: "#F9FAFB",
          card: "#FFFFFF",
          red: "#C62828",
          "red-dark": "#B71C1C",
          green: "#2E7D32",
          "green-dark": "#1B5E20",
        },
      },
      fontFamily: {
        sans: ["Inter", "Plus Jakarta Sans", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.24s ease-in-out",
        "slide-in": "slideIn 0.3s ease-out",
        "scale-in": "scaleIn 0.2s ease-out",
        "confetti": "confetti 0.8s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideIn: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        confetti: {
          "0%": { transform: "translateY(0) rotate(0deg)", opacity: "1" },
          "100%": { transform: "translateY(-200px) rotate(360deg)", opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
