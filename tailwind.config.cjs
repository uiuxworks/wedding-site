/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Roxborough CF', 'serif'],
        sans:['Bentham', 'sans-serif'],
      },
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ]
};
