const isDev = process.env.NODE_ENV === 'development'

module.exports = {
  css: {
    sourceMap: isDev,
    requireModuleExtension: true
  },
  devServer: {
    port: 5566,
    disableHostCheck: true
  },
  publicPath: './'
}
