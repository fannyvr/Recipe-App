var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPlugin = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: [
    './app/index.js'
  ],
  module: {
    loarders: [
      {
        test: /\.js$/, 
        exclude: /node_modules/, 
        loarder: 'babel-loader'
      }
    ]
  },
  output: {
    filename: 'index_bundle.js',
    path: __dirname + '/dist'
  },
  plugins: [HTMLWebpackPlugin]
};