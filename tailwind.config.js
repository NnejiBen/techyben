/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'xl': {'max': '1200px'},
      // => @ media (max-width: 1200px) { ... }

      'lg': {'max': '992px'},
      // => @ media (max-width: 992px) { ... }

      'md': {'max': '768px'},
      // => @ media (max-width: 768px) { ... }

      'sm': {'max': '576px'},
      // => @ media (max-width: 576px) { ... }
    },
  },
  plugins: [],
}
