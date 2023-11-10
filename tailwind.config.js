/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        pulse: 'pulse 1.6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      fontSize: {
        '2.5xl': '1.75rem',
      },
    },
    fontSize: {
      '2.5xs': '13px',
    },
  },
  plugins: [],
}

