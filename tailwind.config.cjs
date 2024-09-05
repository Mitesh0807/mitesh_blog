/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{html,ts,md}'],
  theme: {
    extend: {
      keyframes: {
        'blink-caret': {
          '0%, 100%': { 'border-color': 'transparent' },
          '50%': { 'border-color': 'orange' },
        },
        typing: {
          from: { width: '0' },
          to: { width: '100%' },
        },
      },
      animation: {
        'blink-caret': 'blink-caret 0.75s step-end infinite',
        typing: 'typing 3.5s steps(40, end) 1',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['light', 'coffee'],
  },
};
