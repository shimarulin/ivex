const { resolve } = require('path')
const merge = require('lodash/merge')

async function nuxtModule (moduleOptions) {
  const defaultOptions = {
    css: true,
    config: {
      ops: {
        bar: {
          background: '#c1c1c1',
          opacity: 0.5,
          onlyShowBarOnScroll: false,
          hoverStyle: {
            opacity: 1,
          },
        },
      },
      name: 'VueScroll',
    },
  }
  const options = merge(defaultOptions, this.options['@ivex/vuescroll'], moduleOptions)

  this.addPlugin({
    src: resolve(__dirname, 'templates/plugin.tpl.js'),
    fileName: 'ivex-vuescroll.js',
    options,
  })
}

module.exports = nuxtModule
module.exports.meta = require('../package.json')
