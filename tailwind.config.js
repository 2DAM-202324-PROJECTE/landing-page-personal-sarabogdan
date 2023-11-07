/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        pulse: 'pulse 0.9s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      fontSize: {
        '2.5xl': '1.75rem',
      },
    },
  },
  plugins: [],
}

