export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Cat Finder',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'A cat finder frontend project.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/placeholder-loading/dist/css/placeholder-loading.min.css' }
    ],
    script: [
      {
        // src: 'https://unpkg.com/isotope-layout@3/dist/isotope.pkgd.min.js'
      }
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~/plugins/vue-masonry' }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    ['@nuxtjs/google-fonts', { families: { Inter: [400,500,700] }}]
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa'
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: process.env.CAT_API_URL,
    headers: {
      'x-api-key': process.env.API_KEY
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },

  publicRuntimeConfig: {
    catApiURL: process.env.CAT_API_URL,
    myURL: process.env.MY_URL,
    myEmail: process.env.MY_EMAIL,
    githubURL: process.env.GITHUB_URL,
    twitterURL: process.env.TWITTER_URL,
    linkedinURL: process.env.LINKEDIN_URL,
  },
  privateRuntimeConfig: {
    apiKey: process.env.API_KEY
  },

  loading: '~/components/Loading.vue'
}
