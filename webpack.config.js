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

const clientApp = lodash.cloneDeep(commonConfig);
clientApp.target ="web"
clientApp.entry = './src/clients/clientApp/clientApp.tsx';
clientApp.output.filename = 'clientApp.bundle.js';
clientApp.output.publicPath = __dirname

const clientSessionApp = lodash.cloneDeep(commonConfig);
clientSessionApp.target ="web"
clientSessionApp.entry = './src/clients/clientSessionApp/clientSessionApp.tsx';
clientSessionApp.output.filename = 'clientSessionApp.bundle.js';
clientSessionApp.output.publicPath = __dirname

const clientSessionSudoApp = lodash.cloneDeep(commonConfig);
clientSessionSudoApp.target ="web"
clientSessionSudoApp.entry = './src/clients/clientSessionSudoApp/clientSessionSudoApp.tsx';
clientSessionSudoApp.output.filename = 'clientSessionSudoApp.bundle.js';
clientSessionSudoApp.output.publicPath = __dirname

const server = require("./src/server/webpack.config.js")

const userConfig = lodash.cloneDeep(commonConfig);
userConfig.target ="web"
userConfig.entry = './src/adam/index.js';
userConfig.output.filename = 'adam.bundle.js';
userConfig.output.publicPath = __dirname
userConfig.devtool = false

module.exports = [
  // clientApp,
  clientSessionApp,
  clientSessionSudoApp,
  server,
  userConfig
];
