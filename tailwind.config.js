/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#ffffff',
        'surface': '#f8f9fa',
        'surface-alt': '#f1f3f5',
        'text-primary': '#1a202c',
        'text-secondary': '#4a5568',
        'text-muted': '#718096',
        'accent-primary': '#0066cc',
        'accent-secondary': '#004399',
        'accent-light': '#e6f0ff',
        'border-color': '#cbd5e0',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'serif': ['Georgia', 'serif'],
      },
      backdropBlur: {
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'fade-in': 'fade-in 0.4s ease-out',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      boxShadow: {
        'subtle': '0 1px 3px rgba(26, 32, 44, 0.08)',
        'card': '0 2px 8px rgba(26, 32, 44, 0.1)',
        'hover': '0 4px 12px rgba(26, 32, 44, 0.15)',
      },
    },
  },
  plugins: [],
}