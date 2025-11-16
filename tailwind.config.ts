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
          accent: '#5A96B3',     // Primary accent (blue)
          neutral: '#E5E7EB',    // Light grey
          'accent-dark': '#487B94',  // Darker blue for hover
          'accent-darker': '#3B647A', // Even darker for hover/active
          'accent-light': '#7DB0C7'  // Lighter blue
        },
        // Alias palette used by classes like text-current-500, hover:text-current-400, bg-current-600/10
        current: {
          400: '#7DB0C7',
          500: '#5A96B3',
          600: '#487B94',
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

