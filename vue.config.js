
// const path = require('path')
module.exports = {
  transpileDependencies: true,
  publicPath: './',
  configureWebpack: {
    externals: {
      AMap: 'AMap' // 高德地图配置
    }
  }
}
