/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
        'bg-header': "#C2EFD4",
        'main':'#224F34',
        'regular': '#267D49',
        'price': '#454545',

      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1750px',
      },
      boxShadow: {
        'box-shadow': '6px 33px 59px 0px #0000004D',
      },
      fontFamily: {
        'header-font': 'Poppins',
        'title-ruf': 'Rufina',
        'roboto-slab': "Roboto Slab"
      },
      fontSize: {
        'title': '86px',
        'mobileTitle':'50px'
      },
      lineHeight: {
        'title-line-h': '106.21px',
        'text-line-h': '52.8px',
        'subtitle':'84.41px', 
      },
    extend: {
      
    },
  },
  plugins: [],
}

