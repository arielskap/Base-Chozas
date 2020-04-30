const stylelint = require('stylelint');
const autoprefixer = require('autoprefixer');
const postcssImport = require('postcss-import');
const postcssPresetEnv = require('postcss-preset-env');
const cssMqpacker = require('css-mqpacker');

module.exports = {
  plugins: [
    postcssImport({
      plugins: [
        stylelint,
      ],
    }),
    postcssPresetEnv({
      stage: 0,
    }),
    autoprefixer,
    cssMqpacker,
  ],
};
