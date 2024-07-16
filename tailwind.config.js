/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  
  theme: {
    extend: {
      darkMode: 'class',
      colors: {
        'backgroundLight': '#F8FAFC',
      },
    },
  },
  plugins: [],
}

