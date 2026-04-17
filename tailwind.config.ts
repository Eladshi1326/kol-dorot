import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['"Suez One"', '"Frank Ruhl Libre"', 'Georgia', 'serif'],
        serif: ['"Frank Ruhl Libre"', 'Georgia', 'serif'],
        sans: ['"Assistant"', '"Noto Sans Hebrew"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        'display-1': ['clamp(3.5rem, 7vw, 6.5rem)', { lineHeight: '0.96', letterSpacing: '-0.015em' }],
        'display-2': ['clamp(2.75rem, 5.5vw, 5rem)', { lineHeight: '1.02', letterSpacing: '-0.012em' }],
        'display-3': ['clamp(2rem, 4vw, 3.25rem)', { lineHeight: '1.1', letterSpacing: '-0.008em' }],
        'display-4': ['clamp(1.5rem, 2.8vw, 2.25rem)', { lineHeight: '1.2', letterSpacing: '-0.004em' }],
      },
      colors: {
        paper: {
          50: '#FAF7F2',
          100: '#F2EDE3',
          200: '#E5DBC8',
          300: '#D2C3A8',
        },
        ink: {
          50: '#F5F1E8',
          100: '#E8E2D3',
          200: '#BDB4A0',
          800: '#2F2A24',
          900: '#1A1714',
          950: '#0D0C0A',
        },
        honey: {
          400: '#C99966',
          500: '#B8824A',
          600: '#9A6B3A',
          700: '#7D572F',
        },
        terra: {
          400: '#D49481',
          500: '#C17F5F',
          600: '#A86242',
        },
        sage: {
          300: '#C3D0BD',
          500: '#8FA68B',
          600: '#6E8569',
        },
        dusk: {
          500: '#6B5E7A',
        },
      },
      animation: {
        'fade-in': 'fadeIn 800ms ease-out forwards',
        'fade-up': 'fadeUp 900ms cubic-bezier(.16,1,.3,1) forwards',
        'waveform': 'waveform 1.2s ease-in-out infinite',
        'slow-pulse': 'slowPulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        waveform: {
          '0%, 100%': { transform: 'scaleY(0.4)' },
          '50%': { transform: 'scaleY(1)' },
        },
        slowPulse: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config
