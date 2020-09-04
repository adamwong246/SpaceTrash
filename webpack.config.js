const webpack = require("webpack");
const lodash = require('lodash');
const CopyPkgJsonPlugin = require('copy-pkg-json-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const {
  ModuleFederationPlugin
} = require("webpack").container;

function srcPaths(src) {
  return path.join(__dirname, src);
}

const isEnvProduction = process.env.NODE_ENV === 'production';
const isEnvDevelopment = process.env.NODE_ENV === 'development';

// #region Common settings
const commonConfig = {
  devtool: isEnvDevelopment ? 'source-map' : false,
  mode: isEnvProduction ? 'production' : 'development',
  output: {
    path: srcPaths('dist'),
    publicPath: ''
  },

  node: {
    __dirname: false,
    __filename: false
  },

  module: {
    rules: [

      {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader"
      }
    },
    {
        test: /\.(png)$/,
        use: {
          loader: 'url-loader',
        },
      },

      {
        test: /\.scss$/,
        use: [{
            loader: "style-loader"
          }, // to inject the result into the DOM as a style block
          // { loader: "css-modules-typescript-loader"},  // to generate a .d.ts module next to the .scss file (also requires a declaration.d.ts with "declare modules '*.scss';" in it to tell TypeScript that "import styles from './styles.scss';" means to load the module "./styles.scss.d.td")
          {
            loader: "css-loader",
            options: {
              modules: false
            }
          }, // to convert the resulting CSS to Javascript to be bundled (modules:true to rename CSS classes in output to cryptic identifiers, except if wrapped in a :global(...) pseudo class)
          {
            loader: "sass-loader"
          }, // to convert SASS to CSS
          // NOTE: The first build after adding/removing/renaming CSS classes fails, since the newly generated .d.ts typescript module is picked up only later
        ]
      },
      {
        test: /\.css$/,
        use: [{
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: false
            }
          },
        ]
      },
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


const electronRendererConfig = lodash.cloneDeep(commonConfig);
electronRendererConfig.entry = ["@babel/polyfill", './src/apps/client/index.js'];
electronRendererConfig.target = 'electron-renderer';
electronRendererConfig.output.filename = 'client.bundle.js';
electronRendererConfig.output.path = path.join(__dirname, 'dist/electron');
electronRendererConfig.plugins = [
  ...commonConfig.plugins,
  new CopyWebpackPlugin([{
    from: './src/apps/images',
    to: 'images'
  }]),
  new CopyWebpackPlugin([{
    from: './src/apps/client/index.html',
    to: 'index.html'
  }, ]),

  new ModuleFederationPlugin({
  name: "app2",
  library: {
    type: "var",
    name: "app2"
  },
  remotes: {
    app1: "app1",
  },
  shared: ["react", "react-dom"],
}),

];

const electronMainConfig = lodash.cloneDeep(commonConfig);
electronMainConfig.entry = './src/apps/electron/index.js';
electronMainConfig.target = 'electron-main';
electronMainConfig.output.filename = 'electron.bundle.js';
electronMainConfig.output.path = path.join(__dirname, 'dist/electron');
electronMainConfig.plugins = [
  ...commonConfig.plugins,
  new CopyWebpackPlugin([{
    from: './src/apps/electron/preload.js',
    to: 'preload.js'
  }, ]),
];



// // just copy, don't pack. Ignore the warnings.
// const aiHarnessConfig = lodash.cloneDeep(commonConfig);
// aiHarnessConfig.output.filename = 'aiHarness.js';
// aiHarnessConfig.plugins = [
//   ...commonConfig.plugins,
//   new CopyWebpackPlugin([{
//     from: './src/apps/aiHarness/index.js',
//     to: 'aiHarness.js'
//   }, ]),
// ];
//
const dashboardBundle = lodash.cloneDeep(commonConfig);
dashboardBundle.output.filename = 'dashboard.js';
dashboardBundle.output.path = path.join(__dirname, 'dist/electron');
dashboardBundle.target = 'web',
dashboardBundle.entry = './src/exampleUserConfig/src/index.js',
dashboardBundle.plugins = [
  ...commonConfig.plugins,
  new ModuleFederationPlugin({
  name: "app1",
  library: {
    type: "var",
    name: "app1"
  },
  filename: "remoteEntry.js",
  exposes: {
    // expose each component
    "./Chunky": "./src/exampleUserConfig/src/components/Chunk.js",
    "./MultiView": "./src/exampleUserConfig/src/MultiView.tsx",
  },
  shared: ["react", "react-dom"],
})
];
// dashboardBundle.optimization = {
//   splitChunks: {
//     chunks: 'all',
//   },
// }
// dashboardBundle.optimization = {
//   runtimeChunk: 'single',
//   splitChunks: {
//     chunks: 'all',
//     maxInitialRequests: Infinity,
//     minSize: 0,
//     cacheGroups: {
//       vendor: {
//         test: /[\\/]node_modules[\\/]/,
//         name(module) {
//           // get the name. E.g. node_modules/packageName/not/this/part.js
//           // or node_modules/packageName
//           const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
//
//           // npm package names are URL-safe, but some servers don't like @ symbols
//           return `npm.${packageName.replace('@', '')}`;
//         },
//       },
//     },
//   },
// };


// const autopilotBundle = lodash.cloneDeep(commonConfig);
// autopilotBundle.output.filename = 'autopilot.js';
// autopilotBundle.target = 'node',
//   autopilotBundle.entry = './src/exampleUserConfig/src/ai.js',
//   autopilotBundle.plugins = [
//     ...commonConfig.plugins,
//   ];
//
// const shipfactoryBundle = lodash.cloneDeep(commonConfig);
//
// shipfactoryBundle.externals = {};
// shipfactoryBundle.output.filename = 'shipFactory.js';
// shipfactoryBundle.target = 'node',
//   shipfactoryBundle.entry = './src/exampleUserConfig/src/ship4.js',
//   shipfactoryBundle.plugins = [
//     ...commonConfig.plugins,
//   ];

// const server = require("./src/apps/server/webpack.config.js")

module.exports = [
  // server,
  electronMainConfig,
  electronRendererConfig,

  dashboardBundle,
  // autopilotBundle,
  // shipfactoryBundle,

  // aiHarnessConfig,

];
