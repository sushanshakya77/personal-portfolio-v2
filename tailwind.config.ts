import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    spacing: {
      xxs: "4px",
      xs: "8px",
      sm: "12px",
      md: "16px",
      lg: "24px",
      xl: "32px",
      "2xl": "40px",
      "3xl": "48px",
      "4xl": "64px",
    },
    extend: {
      // gridTemplateColumns: {
      //   "12": "repeat(12, 90px)",
      // },
      screens: {
        vxs: "380px", //mobile screen
        xs: "480px", //mobile screen
        sm: "768px", //ipad tablet
        md: "1025px", // laptop and small screen
        lg: "1200px", // large screen and desktop
        xl: "1440px", //
        "2xl": "1440px",
        "3xl": "1700px",
      },
      fontSize: {
        xs: "0.75rem", // 12px
        sm: "0.875rem", // 14px
        md: "1rem", // 16px
        lg: "1.125rem", // 18px
        xl: "1.4rem", // 22px
        "2xl": "1.5rem", // 24px
        "3xl": "1.625rem", // 26px
        "4xl": "2.125rem", // 34px
        "5xl": "3rem", // 48px
        "6xl": "4rem", // 64px
        "7xl": "4.5rem", // 72px
      },
      container: {
        center: true,
        screens: {
          "2xl": "1440px",
        },
      },
      colors: {
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        hoverBackground: "var(--hover-background)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
      },
    },
  },
  plugins: [],
};
export default config;
