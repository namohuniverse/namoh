import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#E0973A',
        gold: '#D9A94A',
        'gold-light': '#F0C874',
        'gold-dark': '#9C7423',
        bg: '#0F0D0A',
        surface: '#1C1712',
        text: '#FFFFFF',
      },
      fontFamily: {
        heading: ['var(--font-inter)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
      borderRadius: {
        soft: '10px',
        card: '14px',
        lux: '16px',
      },
      boxShadow: {
        soft: '0 8px 24px rgba(0, 0, 0, 0.35)',
        glow: '0 0 24px rgba(224, 151, 58, 0.3)',
        gold: '0 8px 24px rgba(217, 169, 74, 0.2)',
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
      },
      maxWidth: {
        container: '1280px',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
    },
  },
  plugins: [],
};

export default config;
