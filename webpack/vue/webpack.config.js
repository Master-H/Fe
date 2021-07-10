const path = require('path');
const HtmlWebpackplugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  mode: 'development', // 指定开发者打包模式
  entry : './src/index.js', //入口文件
  output : {
      filename : 'index.js',
      path :  __dirname+'/dist'
  },
  module : {
      rules: [
          {
            /*将js文件转码成es5*/
            test: /\.js?$/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          },            
          {
            test: /\.vue$/,
            use: [
              {
                loader: 'vue-loader',
                options: {
                  compilerOptions: {
                    preserveWhitespace: false
                  },
                }
              }
            ]
          },
          {
            test: /\.txt$/,
            use: [
              './loaders/myloader2.js','./loaders/myloader1.js'
            ]
          }
      ]
  },
  plugins:[
    new HtmlWebpackplugin({
      filename: 'index.html', // 打包后的文件名，默认index.html
      template: path.resolve(__dirname, 'index.html') // 导入被打包的文件模板
    }),
     new VueLoaderPlugin()
  ]
}
