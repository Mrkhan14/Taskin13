/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ['./src/**/*.{js,jsx,ts,tsx}'],
   theme: {
      extend: {
         colors: {
            primary: {
               500: '#F4F0F8',
               600: '#232536',
               700: '#FFD050'
            },
         },
      },
   },
   plugins: [],
};
