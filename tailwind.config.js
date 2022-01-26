module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/*.html'],
  theme: {
    extend: {},
    maxWidth: {
      'mini': '12rem',
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
