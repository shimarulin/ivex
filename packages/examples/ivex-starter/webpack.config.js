/**
 * This config is just an helper for JetBrains IDEs
 * for the right aliases resolve
 * */
const path = require('path')

module.exports = {
  resolve: {
    alias: {
      '~': path.resolve(__dirname),
      '@': path.resolve(__dirname),
    },
  },
}
