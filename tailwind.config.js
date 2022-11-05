/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}','./index.html', './contacts.html'],

  theme: {
    screens: {
      'm': {'min': '0px', 'max': '767px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'p': {'min': '768px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }
    },
    fontFamily: {
      sans: ["'DM Sans'", 'sans-serif'],
      Syne: ["'Syne'"],
      Pano: ["PANO"]
    }
  },
  plugins: [],
}
