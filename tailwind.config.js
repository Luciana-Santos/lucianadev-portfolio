/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        white: 'hsla(0, 0%, 100%, 1)',
        whiteBody: 'hsla(0, 0%, 100%, 0.7)',
        vdBlue: 'hsla(240, 50%, 5%, 1)',
        mdGreen: 'hsla(167, 49%, 43%, 1)',
        dkViolet: 'hsla(240, 47%, 14%, 1)',
        dkPurple: 'hsla(243, 44%, 25%, 1)',
        mdTurquoise: 'hsla(183, 76%, 34%, 1)',
        ltOrange: 'hsla(36, 88%, 77%, 1)',
        mdOrange: 'hsla(34, 62%, 63%, 1)',
        modalBackdrop: 'rgba(0, 0, 0, 0.6)',
      },
      fontFamily: {
        berkshire: "'Berkshire Swash', serif",
        space: "'Space Mono', monospace",
      },
      spacing: {
        modalWidth: 'min(100% - 2rem, 60rem)',
        modalPadding: 'clamp(20px, 5vw, 60px)',
      },
      fontSize: {
        modalTitle: 'clamp(22px, 5vw, 30px)',
      },
    },
  },
  plugins: [],
}
