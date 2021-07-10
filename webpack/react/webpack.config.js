var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode:'development',
  entry: "./index.js",
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json'], //import文件后面可以不加后缀，按顺序查找
    alias: {
      'Src': path.resolve(__dirname, './src'),
      'Components': path.resolve(__dirname, './src/components'),
      'Utils': path.resolve(__dirname, './src/utils'),
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.(js|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // webpack只识别js语法编译，所以用babel-loader针对其他语法转移成js
        }
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'My App', 
      template: './index.html'
    })


  ],
 


  devServer:{
    port:3000,
    open:true
  }
};