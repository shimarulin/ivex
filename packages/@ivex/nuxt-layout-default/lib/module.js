const { resolve } = require('path')
const merge = require('lodash/merge')

async function nuxtModule (moduleOptions) {
  const defaultOptions = {
    name: 'default',
  }
  const options = merge(defaultOptions, this.options['@ivex/nuxt-layout-default'], moduleOptions)

  this.addLayout({
    src: resolve(__dirname, 'templates/layout.tpl.vue'),
    fileName: './@ivex/nuxt-layout-default.vue',
  }, options.name)

  // this.addPlugin({
  //   src: resolve(__dirname, 'templates/plugin.tpl.js'),
  //   fileName: './@ivex/nuxt-scroll-area.js',
  //   options,
  // })
}

module.exports = nuxtModule
module.exports.meta = require('../package.json')
