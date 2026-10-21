/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        'off-white': '#FAFAFA',
        'warm-gray': '#F5F5F4',
        'neutral-cream': '#FDFDFD',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.stroke-text': {
          '-webkit-text-stroke': '2px black',
          'color': 'transparent',
        },
      })
    },
  ],
}
