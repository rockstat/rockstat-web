const path = require('path');

module.exports = {
  plugins: {
    // Illustrational
    // 'postcss-extend-rule': {}, // precss
    // 'postcss-import': { },
    'postcss-mixins': {
      mixinsDir: path.join(__dirname, 'styles', 'mixin')
    },
    // 'postcss-sassy-mixins': {},
    // 'postcss-simple-vars': {},
    'postcss-advanced-variables': {}, // precss
    'postcss-nested': {}, // precss
    'postcss-rem': {
      baseline: 14,
      precision: 6,
      fallback: false
    },

    // 'postcss-pxtorem': {

    // },
    'postcss-preset-env': {}, // precss
    'postcss-atroot': {}, // precss
    'postcss-property-lookup': {}, // precss
    'postcss-cssnext': {},
    // 'postcss-pixels-to-rem': {}
    // 'postcss-css-variables': {}
    'postcss-modules': {
      // scopeBehaviour: 'global'
    }
  }
}
