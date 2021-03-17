var path = require('path');
const config = require("./webpack.config.js");

config.target = "node"
config.mode = "none";
config.entry = "./src/test.js";
config.output = {
    filename: 'test.js',
    path: path.resolve(__dirname, 'dist'),
  }
module.exports = config;