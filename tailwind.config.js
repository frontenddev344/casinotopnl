/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('images/hero.png')",
        'luxe-pattern': "url('images/Luxury.jpg')",
        'Privacy-pattern': "url('images/Privacy-.avif')",
        'termn': "url('images/termn-.avif')",
        'top': "url('images/top.png')",
        'contact': "url('images/au_banner.jpg')"

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