export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {

      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1900px",
      },

      colors: {
        primary: "var(--color-primary)",
        primaryDark: "var(--color-primary-dark)",
        primaryLight: "var(--color-primary-light)",

        text: "var(--color-text)",
        textLight: "var(--color-text-light)",

        bg: "var(--color-bg)",
        border: "var(--color-border)",
        overlay: "var(--color-overlay)",

        highlight: "var(--color-highlight)",
      },

      spacing: {
        xs: "var(--space-xs)",
        sm: "var(--space-sm)",
        md: "var(--space-md)",
        lg: "var(--space-lg)",
        xl: "var(--space-xl)",
        "2xl": "var(--space-2xl)",
        "3xl": "var(--space-3xl)",
      },

      fontSize: {
        sm: "var(--text-sm)",
        md: "var(--text-md)",
        lg: "var(--text-lg)",
        xl: "var(--text-xl)",
        "2xl": "var(--text-2xl)",
        hero: "var(--text-hero)",
      },

      borderRadius: {
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
      },

      maxWidth: {
        container: "var(--container-width)",
      },

      fontFamily: {
        heading: ["Lora", "serif"],
        body: ["Cera Pro", "sans-serif"],
      },
    },
  },

  plugins: [],
}