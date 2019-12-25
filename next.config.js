const withSass = require('@zeit/next-sass')
module.exports = withSass({
  /* config options here */
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]",
  }
})