/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        lightViolet: "#393F6E",
        lightGray: "#E2E4F3",
      }, 
      backgroundImage:{
        linearColor: "linear-gradient(#E65895, #BC6BE8)"
      }
    }
  },
  plugins: [
  ]
};