const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './adamShipV0.js',
  output: {
    filename: 'adamBundle.js',
    path: path.resolve(__dirname, './dist'),
  },
}
