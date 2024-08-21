/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors:{
        btnColor:"#ABEF5F",
        btnLightColor: "#d4f6ae",
        bgColor:"#F4F4F4",
        bgSecondColor: "#FFFFFF"
      },
      textColor:{
        
      },

    },
  },
  plugins: [    require('daisyui'),
    
],

daisyui: {
    themes: ["light"],
  },
  // npx tailwindcss -i ./style.css -o ./output.css --watch
}

