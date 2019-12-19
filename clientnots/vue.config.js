module.exports = {
  // baseUrl: process.env.NODE_ENV === 'production' ? '//st.retailo2o.com/lsgc/' : '/',
  // assetsDir: 'marketing',
  configureWebpack: config => {
    if (process.env.NODE_ENV !== 'production') {
      config.devServer = {
        disableHostCheck: true
      }
    }
  },
  // chainWebpack: config => {
  //   config.module
  //     .rule('vue')
  //     .use('url-loader')
  //       .loader('url-loader')
  //       .tap(options => {
  //         // 修改它的选项...
  //         return options
  //       })
  // },
  css: {
    loaderOptions: {
      // 给 sass-loader 传递选项
      sass: {
        prependData: `@import "./assets/scss/mixin.scss";`,
      },
    },
  },  
  productionSourceMap: false,
}