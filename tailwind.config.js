/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {},
  },
  plugins: [    require('daisyui'),
    
],

daisyui: {
    themes: ["light"],
  },
  // npx tailwindcss -i ./style.css -o ./output.css --watch
}

