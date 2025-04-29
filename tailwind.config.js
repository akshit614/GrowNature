/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2D5A27',
          light: '#3A7235',
          dark: '#1F3E1B',
        },
        secondary: {
          DEFAULT: '#8CB369',
          light: '#A6C98C',
          dark: '#6E9945',
        },
        accent: {
          DEFAULT: '#F4E285',
          light: '#F7E9A3',
          dark: '#F0D85E',
        },
        background: '#F8F9FA',
        text: '#1A1A1A',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};