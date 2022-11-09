/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0a192f',
        green: '#64ffda',
        'ligth-navy': '#112240',
      },
      animation: {
        'spin-slow': 'spin 2s linear',
        slidein: 'slidein 3s ease-in-out',
        wiggle: 'wiggle 1s ease-in-out',
        'fade-in-down': 'fade-in-down 3s ease-in-out',
        'fade-out-up': 'fade-out-up 3s ease-in-out',
      },
      keyframes: {
        slidein: {
          from: {
            'margin-left': '100%',
          },
          to: {
            'margin-left': '0%',
          },
        },
        wiggle: {
          '0%, 100%': {
            transform: 'rotate(-3deg)',
          },
          '50%': {
            transform: 'rotate(3deg)',
          },
        },
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'fade-out-up': {
          from: {
            opacity: '1',
            transform: 'translateY(0px)',
          },
          to: {
            opacity: '0',
            transform: 'translateY(10px)',
          },
        },
      },
      screens: {
        xsm: { raw: '(max-width: 550px)' },
      },
    },
  },
  plugins: [],
};
