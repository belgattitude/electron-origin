/**
 * Base webpack config used across other specific configs
 */

import path from 'path';
import webpack from 'webpack';
//import { dependencies as externals } from './src/package.json';

export default {
  //externals: Object.keys(externals || {}),

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        }
      },{
        test: /\.(scss)$/,
        use: [{
                loader: 'style-loader', // inject CSS to page
              },{
                loader: 'css-loader', // translates CSS into CommonJS modules
              },{
                loader: 'postcss-loader', // Run post css actions
                options: {
                  plugins: function () { // post css plugins, can be exported to postcss.config.js
                      return [
                        require('precss'),
                        require('autoprefixer')
                      ];
                  }
                }
              },{
                loader: 'sass-loader' // compiles Sass to CSS
              },
            ]
      }
    ]
  },

  output: {
    path: path.join(__dirname, 'src/'),
    // https://github.com/webpack/webpack/issues/1114
    libraryTarget: 'commonjs2'
  },

  /**
   * Determine the array of extensions that should be used to resolve modules.
   */
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    modules: [
      path.join(__dirname, 'src'),
      'node_modules',
    ],
  },

  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'production'
    }),
    new webpack.NamedModulesPlugin(),
  ],
};
