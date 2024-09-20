import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
    },
    extend: {
      backgroundImage: {
        'project-image': "url('/project-bg.svg')",
        'footer-texture': "url('/img/footer-texture.png')",
        'logo-light': "url('/img/logo-light-theme.png')",
        'logo-dark': "url('/img/logo-dark-theme.png')",
      },
      boxShadow: {
        'glass-shadow': '0 4px 30px rgba(0, 0, 0, 0.1)',
        'border-dark': '0 4px 130px rgba(255, 255, 255, 0.1)',
        'border-light': '0 4px 130px rgba(0, 0, 0, 0.1)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'pulse-down': {
          from: {
            transform: 'translateY(-0.2rem)',
            color: '#777',
          },
          to: {
            transform: 'translateY(0)',
            color: '#333',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'pulse-down': 'pulse-down 1s ease-out infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
