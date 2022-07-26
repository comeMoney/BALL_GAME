const { defineConfig } = require('@vue/cli-service')
// const path = require('path')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: './',
  // css: {
  //   loaderOptions: {
  //     stylus: {
  //       'resolve url': true,
  //       // 自定义主题场景
  //       import: [path.resolve(__dirname, './src/theme')]
  //     },
  //     postcss: {
  //       autoprefixer: {},
  //       plugins: [
  //         require('postcss-px2rem')({
  //           remUnit: '37.5',
  //           propList: ['*']
  //         })
  //       ]
  //     }
  //   }
  // },
})
