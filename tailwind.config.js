/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: { extend: {
    colors: { grape:'#3B0A6E', grapeDeep:'#2A0752', acid:'#FCEE21', coral:'#FF5C5C', mint:'#37E0A6', cream:'#FFF7E6', ink:'#0E0824' },
    fontFamily: { display:['Archivo','system-ui','sans-serif'], sans:['Manrope','system-ui','sans-serif'] },
  } },
  plugins: [],
}
