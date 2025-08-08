import type { Config } from 'tailwindcss'

export default {
  content: ['index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: 'var(--brand-bg)',
          fg: 'var(--brand-fg)',
          primary: 'var(--brand-primary)',
          accent: 'var(--brand-accent)',
          warn: 'var(--brand-warn)',
        },
      },
      container: {
        center: true,
        padding: '1rem',
      },
      borderRadius: {
        '2xl': '1rem',
      },
    },
  },
  plugins: [],
} satisfies Config
