const path = require('path');
const webpack = require('webpack');

webpack({
  entry: './index.js',
  output: {
    filename: 'adamBundle.js',
    path: path.resolve(__dirname, './dist'),
  },
}, (err, stats) => { // Stats Object
  if (err || stats.hasErrors()) {
    console.log(err)
  }
  console.log(stats)
})
