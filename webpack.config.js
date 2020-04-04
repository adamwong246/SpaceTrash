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
// #endregion

const webConfig = lodash.cloneDeep(commonConfig);
webConfig.output= { path: srcPaths('.'), publicPath: '' },
webConfig.entry = './src/renderer/renderer.tsx';
webConfig.output.filename = 'demo_bundle.js';
webConfig.plugins = [...commonConfig.plugins,
    new HtmlWebpackPlugin({
      template: "./src/renderer/index.html",
      filename: "./index.html"
    }),

    new webpack.DefinePlugin({
      __MODE__: 'demo'
    })
  ];

const mainConfig = lodash.cloneDeep(commonConfig);
mainConfig.entry = './src/main/main.js';
mainConfig.target = 'electron-main';
mainConfig.output.filename = 'main.bundle.js';
mainConfig.plugins = [
  ...commonConfig.plugins,

  new CopyWebpackPlugin([
    {from:'./src/main/preload.js',to:'preload.js'},
    // {from:'./src/main/server/server-dev.html',to:'server-dev.html'},
    // {from:'./src/main/server/server.js',to:'server.js'},
    // {from:'./src/main/server/server-handlers.js',to:'server-handlers.js'},
    // {from:'./src/main/server/server-ipc.js',to:'server-ipc.js'},
  ]),

  // new CopyPkgJsonPlugin({
  //   remove: ['scripts', 'devDependencies', 'build'],
  //   replace: {
  //     main: './main.bundle.js',
  //     scripts: { start: 'electron ./main.bundle.js' },
  //     postinstall: 'electron-builder install-app-deps',
  //   },
  // }),
];

const rendererConfig = lodash.cloneDeep(commonConfig);
rendererConfig.entry = './src/renderer/renderer.tsx';
rendererConfig.target = 'electron-renderer';
rendererConfig.output.filename = 'renderer.bundle.js';
rendererConfig.plugins = [
  ...commonConfig.plugins,
  new HtmlWebpackPlugin({
    template: path.resolve(__dirname, 'src/renderer/index.html'),
  }),
  new webpack.DefinePlugin({
    __MODE__: 'full'
  }),
  new CopyWebpackPlugin([
    {from:'./src/renderer/images',to:'images'}
  ]),
];

const serverConfig = lodash.cloneDeep(commonConfig);
serverConfig.entry = './src/server/server.js';
serverConfig.target = 'node';
serverConfig.output.filename = 'server.bundle.js';
serverConfig.output.publicPath = __dirname
module.exports = [
  webConfig,
  mainConfig,
  rendererConfig,
  serverConfig
];
