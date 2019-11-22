const isDev = process.env.NODE_ENV === 'development'

module.exports = {
  css: {
    sourceMap: isDev,
    requireModuleExtension: false,
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/styles/main.scss";`
      }
    }
  },
  devServer: {
    port: 5566,
    disableHostCheck: true
  }
}
