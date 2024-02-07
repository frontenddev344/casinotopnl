/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('../build/images/hero.png')",
        'luxe-pattern': "url('../build/images/Luxury.jpg')",
        'Privacy-pattern': "url('../build/images/Privacy-.avif')",
        'termn': "url('../build/images/termn-.avif')",
        'top': "url('../build/images/top.avif')"

      },
      fontFamily: {
        aboreto: ['Aboreto', 'Sans-serif'],
        armata: ['Armata', 'sans-serif'],
      },
      boxShadow: {
        'custom': '0px 0px 10px 0px rgba(0, 0, 0, 0.2)',
      },
    },
  },
  plugins: [],
}