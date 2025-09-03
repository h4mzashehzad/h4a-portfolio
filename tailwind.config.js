/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'bebas': ['Bebas Neue', 'cursive'],
        'nunito': ['Nunito', 'sans-serif'],
        sans: ['Nunito', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Custom color palette - Reversed theme
        background: {
          primary: '#F8FAFC', // Primary Background (Off-White)
          secondary: '#F1F5F9', // Secondary Background
        },
        text: {
          primary: '#0F172A', // Primary Text (Slate)
          secondary: '#64748B', // Secondary Text (Muted Gray)
          muted: '#94A3B8', // Muted Text
        },
        slate: {
          900: '#0F172A', // Primary Text (Slate)
          700: '#334155',
          500: '#64748B',
          300: '#CBD5E1',
        },
        gray: {
          50: '#F8FAFC', // Off-White Background
          100: '#F1F5F9',
          300: '#E2E8F0',
          500: '#64748B', // Secondary Text / Borders (Muted Gray)
        },
        blue: {
          400: '#38BDF8', // Accent / Brand (Electric Blue)
        },
        cyan: {
          400: '#22D3EE', // Hover / Interaction (Bright Cyan)
        },
        // Legacy primary colors (keeping for compatibility)
        primary: {
          50: '#f0f9ff',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          900: '#1e3a8a',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}