const path = require('path');
const tailwind = require('./tailwind.config.base.cjs')

module.exports = {
  eslint: path.join(__dirname, '.eslintrc.cjs'),
  prettier: path.join(__dirname, '.prettierrc.cjs'),
  tailwind,
  stylelint: path.join(__dirname, '.stylelintrc.cjs'),
  tsconfig: path.join(__dirname, 'tsconfig.base.json'),
};
