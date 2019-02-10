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
      name: 'ScrollArea',
    },
  }
  const options = merge(defaultOptions, this.options['@ivex/nuxt-scroll-area'], moduleOptions)

  this.addPlugin({
    src: resolve(__dirname, 'templates/plugin.tpl.js'),
    fileName: './@ivex/nuxt-scroll-area.js',
    options,
  })
}

module.exports = nuxtModule
module.exports.meta = require('../package.json')
