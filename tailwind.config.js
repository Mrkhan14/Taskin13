/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ['./src/**/*.{js,jsx,ts,tsx}'],
   theme: {
      extend: {
         colors: {
            primary: {
               600: '#FF7010',
            },
            'best-dark-gray': '#212121',
            'best-middle-gray': '#949494',
            'white-smoke': '#f5f5f8',
            'best-light-gray': '#f4f4f4',
            'bor-color': '#e1e1e1',
            'dim-gray': '#3C3C3C',
         },
      },
   },
   plugins: [],
};
