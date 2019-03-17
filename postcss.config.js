const tailwindcss = require('tailwindcss');
const purgecss = require('@fullhuman/postcss-purgecss');
const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');

module.exports = {
  modules: true,
  plugins: [
    tailwindcss('./tailwind.js'),
    cssnano({
      preset: 'default',
    }),
    purgecss({
      content: ['./**/*.html'],
    }),
    autoprefixer,
  ],
};
