module.exports = {
  // mode: 'spa',

  srcDir: __dirname,

  server: {
      port: 8000,
      host: '127.0.0.1',
  },

  head: {
    title: 'vue-laravel',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js + Laravel project' }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: 'favicon.ico?v2' },
      { rel: "stylesheet", href: 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons'}
    ]
  },

  loading: { color: '#007bff' },

  css: [
    'vuetify/dist/vuetify.min.css'
  ],

  plugins: [
    '~/plugins/vuetify',
    '~/plugins/vuefire',
  ],

  modules: [
    '@nuxtjs/axios',
  ],
}




