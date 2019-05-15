const pkg = require('./package')
const routerBase =
  process.env.DEPLOY_ENV === 'GH_PAGES'
    ? {
        router: {
          base: '/tez.github.io/'
        }
      }
    : {}

module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      { src: 'https://cdn.rawgit.com/oauth-io/oauth-js/c5af4519/dist/oauth.js' }
    ]
  },
  ...routerBase,
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: ['element-ui/lib/theme-chalk/index.css'],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: ['@/plugins/element-ui'],

  /*
  ** Nuxt.js modules
  */
  modules: [],

  /*
  ** Build configuration
  */
  build: {
    transpile: [/^element-ui/],

    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
