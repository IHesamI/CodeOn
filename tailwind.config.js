/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        theme_color:'var(--color-theme)',
        yellow_bg:'var(--color-yellow)',
        header:'var(--color-header)',
        footer:'var(--color-footer)',
        text:'var(--color-text)',
        coursebg:'var(--color-coursebg)'
      },
      backgroundImage: {
      },
    },
  },
  plugins: [],
}
