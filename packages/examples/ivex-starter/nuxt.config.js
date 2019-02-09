import { config } from 'dotenv'
import pkg from './package'

config()

export default {
  mode: 'spa',

  head: {
    title: pkg.name,
    meta: [
      {
        charset: 'utf-8',
      },
      {
        name: 'viewport', content: 'width=device-width, initial-scale=1',
      },
      {
        hid: 'description', name: 'description', content: pkg.description,
      },
    ],
    link: [
      {
        rel: 'icon', type: 'image/x-icon', href: '/favicon.ico',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Montserrat:300,400,700|Rubik:300,400,700&amp;subset=cyrillic,cyrillic-ext',
      },
    ],
  },

  loading: {
    color: '#fff',
  },

  css: [
    '@/assets/styles/common/index.less',
    '@/assets/styles/theme/index.less',
  ],

  plugins: [],

  modules: [
    '@nuxtjs/dotenv',
    '@ivex/vuescroll',
  ],

  build: {
    loaders: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
}
