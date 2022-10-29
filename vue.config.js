const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  // 屏幕样式适应
  css: {
    loaderOptions: {
      postcss: {
        postcssOptions: {
          plugins: [
            require('autoprefixer')(),
            require('postcss-pxtorem')({
              rootValue: 192,
              propList: ['*']
            })
          ]
        }
      }
    }
  },
})
