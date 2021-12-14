import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s',
    title: 'ミレニアムゲーム開発部 HP',
    htmlAttrs: { lang: 'jp' },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'description', name: 'description', content: 'ミレニアムゲーム開発部の HP です。文化祭で出したゲームなどがあります。' },
      { property: 'og:title', content: 'ミレニアムゲーム開発部 HP' },
      { property: 'og:description', content: 'ミレニアムゲーム開発部の HP です。文化祭で出したゲームなどがあります。' },
      { property: 'og:type', content: 'article' },
      { property: 'og:url', content: 'https://moyomogi.github.io/millennium-game-dev-dept/' },
      { property: 'og:image', content: 'https://i.imgur.com/PIg9JmR.png' },
      { property: 'og:site_name', content: 'ミレニアムゲーム開発部 HP' },
      { property: 'og:locale', content: 'ja_JP' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  // @see https://nuxtjs.org/deployments/github-pages/
  target: 'static',
  router: {
    base: '/millennium-game-dev-dept/'
  }
}
