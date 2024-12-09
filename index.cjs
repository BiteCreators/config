const path = require('path');

module.exports = {
  eslint: path.join(__dirname, '.eslintrc.cjs'),
  prettier: path.join(__dirname, '.prettierrc.cjs'),
  tailwind: path.join(__dirname, 'tailwind.config.base.cjs'),
  stylelint: path.join(__dirname, '.stylelintrc.cjs'),
  tsconfig: path.join(__dirname, 'tsconfig.base.json'),
};
