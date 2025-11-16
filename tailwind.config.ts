import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          base: '#F9FAFB',      // Off-white background
          text: '#111827',       // Charcoal text
          accent: '#1AC7A0',     // Teal accent
          neutral: '#E5E7EB',    // Light grey
          'accent-dark': '#15A083',  // Darker teal for hover
          'accent-light': '#4FD8BA'  // Lighter teal
        },
        // Alias palette used throughout content classes like text-current-500, bg-current-600/10, etc.
        current: {
          400: '#26D3AB', // slightly lighter than brand.accent
          500: '#1AC7A0', // matches brand.accent
          600: '#159E82', // darker for contrast/overlays
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        button: '0.08em'  // +2px equivalent for buttons
      },
      maxWidth: {
        'container': '1200px'
      },
      boxShadow: {
        soft: '0 10px 30px rgba(0,0,0,0.08)',
        card: '0 4px 12px rgba(0,0,0,0.06)',
        'card-hover': '0 12px 32px rgba(0,0,0,0.12)'
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'flow': 'flow 2s ease-in-out infinite'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        flow: {
          '0%, 100%': { transform: 'translateX(0) translateY(0)' },
          '50%': { transform: 'translateX(10px) translateY(-10px)' }
        }
      }
    }
  },
  plugins: []
} satisfies Config

