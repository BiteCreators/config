const path = require('path');
const tailwind = require('./tailwind.config.base.cjs')

module.exports = {
  eslint: path.join(__dirname, '.eslintrc.cjs'),
  prettier: path.join(__dirname, '.prettierrc.cjs'),
  tailwind,
  stylelint: path.join(__dirname, '.stylelintrc.cjs'),
  tsNext: path.join(__dirname, 'tsconfig.next.json'),
  tsNpm: path.join(__dirname, 'tsconfig.npm.json'),
};
