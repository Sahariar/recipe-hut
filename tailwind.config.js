/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#fde047",
        
"secondary": "#ffd7c9",
        
"accent": "#e3f1ff",
        
"neutral": "#000000",
        
"base-100": "#ffffff",
        
"info": "#2E56E5",
        
"success": "#1E764B",
        
"warning": "#FA9919",
        
"error": "#F06065",
        },
      },
    ],
  },
  plugins: [
    require('daisyui'),
  ],
}
