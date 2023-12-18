const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})


module.exports = {
  configureWebpack:{
    resolve:{
      // 给src下面的几个文件夹配置别名
      alias:{
        // '@':'src'    //已配置
        'assets':'@/assets',
        'common':'@/common',
        'components':'@/components',
        'network':'@/network',
        'views':'@/views',
        // router只会在main.js中引用，所以不需要配置别名
        // this.$router可以拿到router对象
        // this.$store可以拿到store对象
      }
    }
  }
}
