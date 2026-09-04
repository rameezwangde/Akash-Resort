/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        resort: {
          gold: "#D4AF63",
          goldDark: "#C99B46",
          goldDeep: "#A37B2E",
          goldLight: "#F0D799",
          ivory: "#F7F3E8",
          warmWhite: "#FFFDF8",
          charcoal: "#171713",
          charcoalDark: "#12120F",
          warmBlack: "#0D0D0A",
          mutedBeige: "#D8CEBA",
          glassDark: "rgba(18, 18, 15, 0.75)",
          glassLight: "rgba(247, 243, 232, 0.85)"
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        cinzel: ['"Cinzel"', 'serif'],
      },
      letterSpacing: {
        widest: '0.25em',
        ultra: '0.35em',
      },
      boxShadow: {
        'gold-glow': '0 0 25px rgba(212, 175, 99, 0.25)',
        'luxury': '0 20px 40px -15px rgba(0, 0, 0, 0.5)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-overlay': 'linear-gradient(to right, rgba(8, 10, 7, 0.90) 0%, rgba(8, 10, 7, 0.70) 35%, rgba(8, 10, 7, 0.30) 65%, rgba(8, 10, 7, 0.05) 100%)',
      }
    },
  },
  plugins: [],
}
