/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'fm-light-grey': '#B4BECB',
        'fm-medium-grey': '#8C9AA6',
        'fm-dark-blue': '#1C2938',
        'fm-very-dark-blue': '#0D1116',
        'fm-orange': '#FF7F00'
      },
      fontFamily: {
        overpass: ['Overpass', 'sans-serif']
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(98.96% 98.96% at 50% 0%, #232a34 0%, #181e27 100%)'
      }
    }
  },
  plugins: []
}
