const { resolve } = require('path')

module.exports = {
  rootDir: resolve(__dirname, '..'),
  buildDIr: resolve(__dirname, '.nuxt'),
  srcDir: __dirname,
  render: {
    resourceHints: false,
  },
  css: [
    '@/assets/styles/theme/index.less',
    '@/assets/styles/components/index.less',
  ],
  modules: [
    '@ivex/nuxt-scroll-area',
    [
      '@@',
      {},
    ],
  ],
  plugins: [
    '@/plugins/iview',
    '@/plugins/components',
  ],
  build: {
    loaders: {
      less: {
        javascriptEnabled: true,
      },
    },
    transpile: [
      /iview\/src\/components/,
    ],
  },
}
