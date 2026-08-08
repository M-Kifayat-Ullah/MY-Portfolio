/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
          darkBg: '#0b0f17',
          cardBg: '#111827',
          accent: '#00ff88',
          accentDark: '#1a5c2a',
          mutedText: '#9ca3af',
        },
        fontFamily: {
          sans: ['Inter', 'sans-serif'],
          mono: ['Fira Code', 'monospace'],
        },
      },
    },
    plugins: [],
  }