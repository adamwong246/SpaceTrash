const webpack = require("webpack");
const lodash = require('lodash');
const CopyPkgJsonPlugin = require('copy-pkg-json-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

function srcPaths(src) {
  return path.join(__dirname, src);
}

const isEnvProduction = process.env.NODE_ENV === 'production';
const isEnvDevelopment = process.env.NODE_ENV === 'development';

// #region Common settings
const commonConfig = {
  devtool: isEnvDevelopment ? 'source-map' : false,
  mode: isEnvProduction ? 'production' : 'development',
  output: { path: srcPaths('dist'), publicPath: '' },
  // node: { __dirname: false, __filename: false },

  module: {
    rules: [
      { test: /\.scss$/, use: [
          { loader: "style-loader" },  // to inject the result into the DOM as a style block
          // { loader: "css-modules-typescript-loader"},  // to generate a .d.ts module next to the .scss file (also requires a declaration.d.ts with "declare modules '*.scss';" in it to tell TypeScript that "import styles from './styles.scss';" means to load the module "./styles.scss.d.td")
          { loader: "css-loader", options: { modules: false } },  // to convert the resulting CSS to Javascript to be bundled (modules:true to rename CSS classes in output to cryptic identifiers, except if wrapped in a :global(...) pseudo class)
          { loader: "sass-loader" },  // to convert SASS to CSS
          // NOTE: The first build after adding/removing/renaming CSS classes fails, since the newly generated .d.ts typescript module is picked up only later
      ] },
      { test: /\.css$/, use: [
          { loader: "style-loader" },
          { loader: "css-loader", options: { modules: false } },
      ] },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
      },
      {
        test: /\.html$/,
        use: [{
          loader: "html-loader"
        }]
      }
    ],
  },

  plugins: [

  ]
};

const clientV2Config = lodash.cloneDeep(commonConfig);
clientV2Config.target ="web"
clientV2Config.entry = './src/clientV2/clientV2.tsx';
clientV2Config.output.filename = 'clientV2.bundle.js';
clientV2Config.output.publicPath = __dirname

const serverV3Config = require("./src/serverV3/webpack.config.js")

const userConfig = lodash.cloneDeep(commonConfig);
userConfig.target ="web"
userConfig.entry = './src/adam/index.js';
userConfig.output.filename = 'adam.bundle.js';
userConfig.output.publicPath = __dirname
userConfig.devtool = false

module.exports = [
  clientV2Config,
  serverV3Config,
  userConfig
];
