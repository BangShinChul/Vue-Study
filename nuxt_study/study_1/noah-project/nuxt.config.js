module.exports = {
  /*
  ** Headers of the page
  * 여기에서 뷰의 meta 태그를 설정합니다.
  */
  head: {
    title: 'noah-project',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' },
      { hid: 'keyword', name: 'keyword', content: '0.8liter, vue, study, 공팔리터'},
      { hid: 'og:title', name: 'og:title', content: '0.8liter | vue study'},
      { hid: 'og:image', name: 'og:image', content: 'http://review.08liter.com/images/slogan.png'},
      { hid: 'og:description', name: 'og:description', content: '0.8liter view study 프로젝트 입니다.'},

    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
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
