const path = require('path');
const webpack = require('webpack');

// webpack({
//   entry:  './src/electron/tests/testProject0/index.js',
//   output: {
//     filename: 'adamBundle.js',
//     path: path.resolve(__dirname, './dist'),
//   },
// }, (err, stats) => {
//   if (err || stats.hasErrors()) {
//   }
// })

// webpack({
//   entry:  '../spaceTrashConfigs/index.js',
//   output: {
//     filename: 'adamBundle.js',
//     path: path.resolve(__dirname, './dist'),
//   },
// }, (err, stats) => {
//   if (err || stats.hasErrors()) {
//   }
// })

webpack({
  entry:  '/Users/adam/Programming/spacetrashConfigs/index.js',
  output: {
    filename: 'adamBundle.js',
    path: '/Users/adam/Programming/spaceTrash/src/electron/tests/dist',
  },
}, (err, stats) => {
  if (err || stats.hasErrors()) {
  }
})
