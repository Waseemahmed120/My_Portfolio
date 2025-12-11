// module.exports = {
//   content: ["./src/**/*.{html,ts}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };


module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: '#1E40AF',
        secondary: '#FACC15',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
