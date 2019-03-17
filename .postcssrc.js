// const tailwindcss = require('tailwindcss');
// const cssnano = require('cssnano');
// const autoprefixer = require('autoprefixer');

// module.exports = {
//   plugins: [
//     tailwindcss('./tailwind.js'),
//     cssnano({
//       preset: 'default',
//     }),
//     autoprefixer,
//   ],
// };

module.exports = {
    "plugins": [
      require('tailwindcss')('./tailwind.js'),
      require('autoprefixer')(),
    ]
  }