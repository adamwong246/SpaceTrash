var path = require('path');
const config = require("./webpack.config.js");

// config.target = "node"
// config.mode = "none";
config.entry = "./src/test1.js";
// config.output = {
//     filename: 'test1.js',
//     path: path.resolve(__dirname, 'dist'),
//   }
module.exports = config;