const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


 module.exports = {
   mode: 'development',
   entry: './src/index.js',
   output: {
    filename: '[name].js',
     path: path.resolve(__dirname, 'dist'),
   },
   devtool: 'inline-source-map',
   devServer: {
    static: './dist',
   },
   plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management',
      template: './src/index.html',
      clean: true,
    }),
  ],
  optimization: {
    runtimeChunk: 'single',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
 };
