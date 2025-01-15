/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.php","./**/*.php",
    'node_modules/preline/dist/*.js'
  ],
  theme: {
    extend: {
      height: {
        'banner': '500px', // Define a altura personalizada
        'about-img':'550px'
      },
      maxHeight: {
        'hero': '500px', // Define o valor máximo de altura
        'imageHero': '400px'
      },
      padding: {
        'custom-padding': '50px 0', // Define um padding personalizado
      },
      visibility: {
        'hidden': 'hidden', // Adiciona o valor 'hidden' como classe personalizada
    },
    },
  },
  plugins: [
    require('preline/plugin'),
  ],
}

