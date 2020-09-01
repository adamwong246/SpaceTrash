const fs = require('fs');
const {NodeVM} = require('vm2');
const webpack = require('webpack');

const webpackText = fs.readFileSync('/Users/adam/Programming/spacetrashConfigs/webpack.config.js', {
  encoding: 'utf8',
  flag: 'r'
});

const vm = new NodeVM({
  require: { builtin: ['path'] },
  sandbox: {}
});

const webpackConfig = vm.run(webpackText).map((config) => {
  return {
    ...config,
    entry: "/Users/adam/Programming/spacetrashConfigs" + config.entry.split('.')[1]
  }
})

// console.log(webpackConfig)

webpack(webpackConfig, (err, stats) => {
  console.log("done packing")

  const bundleText = fs.readFileSync('/Users/adam/Programming/spacetrash/src/aiHarness/dist/ais/ai-bundle.js', {
    encoding: 'utf8',
    flag: 'r'
  });

  console.log(bundleText)

  vm.run(bundleText)
})
