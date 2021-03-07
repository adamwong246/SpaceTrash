const TerserPlugin = require('terser-webpack-plugin');
const config = require("./webpack.config.js");

config.mode = "production";
config.optimization = {
    minimizer: [new TerserPlugin({ /* additional options here */ })],
  };

module.exports = config;