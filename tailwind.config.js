/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Para el sistema de rutas de Next.js
    "./components/**/*.{js,ts,jsx,tsx}", // Para los componentes reutilizables
    "./pages/**/*.{js,ts,jsx,tsx}" // (Opcional) Si tienes una carpeta "pages"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};


