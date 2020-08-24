const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.export = {
  entry: {
    clientV2: './clientV2.tsx',
  },
  output: {
    path: path.join(__dirname, '../../dist'),
    publicPath: '/',
    filename: '[name].js'
  },

  module: {
    rules: [
      {
        // Transpiles ES6-8 into ES5
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        // Loads the javacript into html template provided.
        // Entry point is set below in HtmlWebPackPlugin in Plugins
        test: /\.html$/,
        use: [{loader: "html-loader"}]
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./clientV2/index.html",
      filename: "./clientV2.html",
      excludeChunks: [ 'server' ]
    })
  ]
}
