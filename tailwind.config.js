/** @type {import('tailwindcss').Config} */
module.exports = {
mode: 'jit',
content: [
"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
],
theme: {
extend: {
  colors: {
    'custom-blue': '#0077FF',
    'custom-green': '#00A180',
    'custom-grey1': '#BEFFF2',
    'custom-grey2': '#F9F9F9'
  },
backgroundImage: {
"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
"gradient-conic":
"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
},
},
},
plugins: [],
};
