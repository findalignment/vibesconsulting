import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        ocean: {
          950: '#0A1628',
          900: '#0F1F3A',
          800: '#1A3A52',
          700: '#1E4A63',
          600: '#2563A0'
        },
        current: {
          600: '#0891B2', // cyan-600 - main accent (the current/flow)
          500: '#06B6D4', // cyan-500
          400: '#22D3EE', // cyan-400
          300: '#67E8F9', // cyan-300
          200: '#A5F3FC'  // cyan-200
        },
        depth: '#14B8A6', // teal-600 - secondary accent
        mist: '#F0FDFA'   // teal-50 - light backgrounds
      },
      borderRadius: {
        '2xl': '1.25rem'
      },
      boxShadow: {
        soft: '0 10px 30px rgba(0,0,0,0.08)',
        flow: '0 8px 24px rgba(8, 145, 178, 0.12)'
      }
    }
  },
  plugins: []
} satisfies Config

