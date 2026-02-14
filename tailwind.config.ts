import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        surface: 'var(--surface)',
        panel: 'var(--panel)',
        accent: 'var(--accent)',
        text: 'var(--text)',
        muted: 'var(--muted)'
      },
      boxShadow: {
        soft: '0 12px 35px rgba(0, 0, 0, 0.08)'
      }
    }
  },
  plugins: []
};

export default config;
