/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        MonaSpace: ['MonaspaceArgon', 'sans-serif']
      },
       keyframes: {
        scale: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.3)' },
        },
      },
      animation: {
        scale: 'scale 4s ease-in-out infinite',
      },
      boxShadow: {
        'white': '2px 0px 18px 10px rgba(69, 69, 69, 1)',
      },
    },
  },
  plugins: [],
}