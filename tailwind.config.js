module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      'trajan-pro-bold': 'Trajan Pro Bold',
      'trajan-pro': 'Trajan Pro Regular',
    },
    extend: {
      colors: {
        primary: {
          900: 'rgb(38, 68, 8)',
          800: 'rgb(64, 113, 14)',
          700: 'rgb(79, 141, 17)',
          600: 'rgb(99, 177, 22)',
          500: 'rgb(122, 218, 27)',
          400: 'rgb(150, 232, 69)',
          300: 'rgb(153, 234, 72)',
          200: 'rgb(179, 239, 118)',
          100: 'rgb(204, 244, 164)',
        },
      },
    },
  },
  plugins: [],
}
