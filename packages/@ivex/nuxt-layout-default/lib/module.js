const { resolve } = require('path')
const merge = require('lodash/merge')
const constants = require('./constants')

async function nuxtModule (moduleOptions) {
  const defaultOptions = {
    name: 'default',
    components: {
      AppHeader: 'AppHeader',
      AppFooter: 'AppFooter',
    },
    constants,
  }
  const options = merge(defaultOptions, this.options['@ivex/nuxt-layout-default'], moduleOptions)

  this.addPlugin({
    src: resolve(__dirname, 'templates/plugin.tpl.js'),
    fileName: './@ivex/vuex-layout-module.js',
    options,
  })

  this.addLayout({
    src: resolve(__dirname, 'templates/layout.tpl.vue'),
    fileName: `./@ivex/nuxt-layout-${options.name}.vue`,
    options,
  }, options.name)
}

module.exports = nuxtModule
module.exports.meta = require('../package.json')
