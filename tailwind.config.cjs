/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        black: '#292929',
      },
      //   borderWidth: {
      //     2: '3px',
      //   },
    },
  },
  plugins: [],
};
